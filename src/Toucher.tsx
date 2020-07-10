import IComponentProps from '@/base/interfaces/IComponentProps';
import React, { Component, TouchEvent } from 'react';
export enum IDirection {
  NONE,
  TO_TOP,
  TO_BOTTOM,
  TO_LEFT,
  TO_RIGHT
}

interface IToucherState {}
interface IToucherProps extends IComponentProps {
  /**
   * 触发生效的距离
   */
  effectDistance?: number;

  /**
   * 触摸结束后的处理函数
   * @param horizontal 水平移动方向
   * @param vertical 竖直移动方向
   * @param x 水平移动距离
   * @param y 竖直移动距离
   */
  onTouch?: (
    horizontal: IDirection,
    vertical: IDirection,
    x: number,
    y: number
  ) => void;
  onTouching?: (x: number, y: number) => void;
}

/**
 * Toucher
 */
class Toucher extends Component<IToucherProps, IToucherState> {
  private _startX: number = 0;
  private _startY: number = 0;

  render() {
    const {
      children,
      effectDistance,
      onTouch,
      className,
      style,
      onTouching
    } = this.props;

    let otherProps: any = Object.assign({}, this.props);
    delete otherProps.onTouch;
    delete otherProps.onTouching;
    return (
      <div
        className={className}
        style={style}
        onTouchStart={(event: TouchEvent) => {
          event.stopPropagation();
          this._startX = event.touches[0].pageX;
          this._startY = event.touches[0].pageY;
        }}
        onTouchMove={(event: TouchEvent) => {
          if (onTouching) {
            const touch = event.changedTouches[0];
            const currentX = touch.pageX;
            const currentY = touch.pageY;

            const x = currentX - this._startX;
            const y = currentY - this._startY;
            onTouching(x, y);
          }
        }}
        onTouchEnd={(event: TouchEvent) => {
          event.stopPropagation();
          const touch = event.changedTouches[0];
          const currentX = touch.pageX;
          const currentY = touch.pageY;
          const distance = effectDistance || 50;
          let horizontal = IDirection.NONE;

          const horDistance = currentX - this._startX;
          if (horDistance > distance) {
            horizontal = IDirection.TO_RIGHT;
          } else if (horDistance < -distance) {
            horizontal = IDirection.TO_LEFT;
          }

          let vertical = IDirection.NONE;
          const verDistance = currentY - this._startY;
          if (verDistance > distance) {
            vertical = IDirection.TO_BOTTOM;
          } else if (verDistance < -distance) {
            vertical = IDirection.TO_TOP;
          }

          const x = currentX - this._startX;
          const y = currentY - this._startY;

          if (onTouch) {
            onTouch(horizontal, vertical, x, y);
          }
        }}
        {...otherProps}
      >
        {children}
      </div>
    );
  }
}

export default Toucher;
