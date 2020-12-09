(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./src/PageItem.tsx":function(e,t,a){"use strict";var n=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),s=function e(t,a){Object(n.a)(this,e),this.classType=void 0,this.props=void 0,this.classType=t,this.props=a};t.a=s,s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PageItem",filename:"src\\PageItem.tsx"}})},"./src/PageManager.ts":function(e,t,a){"use strict";var n=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),s=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),r=a("react"),i=a.n(r),o=a("react-dom"),c=a.n(o),l=a("./src/PageViewWrap.tsx"),u=function(){function e(){Object(n.a)(this,e)}return Object(s.a)(e,null,[{key:"openPage",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=t?this._getItemByClassType(e.classType):null;a&&this.removePage(a);var n=document.createElement("div");n.className="PageContainer",this._pageList.push(e),this._linkItemAndContainer(e,n),this._updateRender()}},{key:"openWrapPage",value:function(t){e.openPage({classType:l.a,props:t})}},{key:"closePage",value:function(e){this.removePage(e),this._updateRender()}},{key:"removePage",value:function(e){this._removeItem(e);var t=this._getContainerByData(e);t&&(this._containerDic.delete(e),c.a.unmountComponentAtNode(t),this.root.contains(t)&&this.root.removeChild(t))}},{key:"_updateRender",value:function(){for(var e=this,t=this._pageList.length,a=function(a){var n=e._pageList[a],s=e._getContainerByData(n);s&&(e.root.contains(s)&&e.root.removeChild(s),s.removeAttribute("isNew"),a>=t-2&&(0===s.childElementCount&&(s.setAttribute("isNew","true"),c.a.render(i.a.createElement(n.classType,Object.assign({},n.props,{close:function(){e.closePage(n)}})),s)),e.root.appendChild(s)))},n=0;n<t;n++)a(n)}},{key:"_getContainerByData",value:function(e){return this._containerDic.get(e)}},{key:"_getItemByClassType",value:function(e){for(var t=0;t<this._pageList.length;t++){var a=this._pageList[t];if(a.classType===e)return a}return null}},{key:"_removeItem",value:function(e){var t=this._pageList.indexOf(e);t>=0&&this._pageList.splice(t,1)}},{key:"_linkItemAndContainer",value:function(e,t){this._containerDic.set(e,t)}},{key:"root",get:function(){return document.body}}]),e}();u._pageList=[],u._containerDic=new Map,t.a=u,"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PageManager",filename:"src\\PageManager.ts"}})},"./src/PageView.less":function(e,t,a){},"./src/PageView.tsx":function(e,t,a){"use strict";var n,s=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),r=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),i=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),o=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper.js"),c=a("react"),l=a.n(c);a("./src/PageView.less");!function(e){e[e.NONE=0]="NONE",e[e.TO_TOP=1]="TO_TOP",e[e.TO_BOTTOM=2]="TO_BOTTOM",e[e.TO_LEFT=3]="TO_LEFT",e[e.TO_RIGHT=4]="TO_RIGHT"}(n||(n={})),"undefined"!==typeof n&&n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IDirection",filename:"src\\Toucher.tsx"}});var u=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r)))._startX=0,e._startY=0,e._touching=!1,e}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.children,s=t.effectDistance,r=t.onTouch,i=t.className,o=t.style,c=t.onTouching,u=t.validateStartTouch,p=Object.assign({},this.props);return delete p.onTouch,delete p.onTouching,delete p.validateStartTouch,l.a.createElement("div",Object.assign({className:i,style:o,onTouchStart:function(t){var a=t.touches[0].pageX,n=t.touches[0].pageY;(!u||u(a,n))&&(t.stopPropagation(),e._touching=!0,e._startX=t.touches[0].pageX,e._startY=t.touches[0].pageY)},onTouchMove:function(t){if(e._touching&&(t.stopPropagation(),c)){var a=t.changedTouches[0],n=a.pageX,s=a.pageY,r=n-e._startX,i=s-e._startY;c(r,i)}},onTouchEnd:function(t){if(e._touching){t.stopPropagation(),e._touching=!1;var a=t.changedTouches[0],i=a.pageX,o=a.pageY,c=s||50,l=n.NONE,u=i-e._startX;u>c?l=n.TO_RIGHT:u<-c&&(l=n.TO_LEFT);var p=n.NONE,d=o-e._startY;d>c?p=n.TO_BOTTOM:d<-c&&(p=n.TO_TOP);var h=i-e._startX,m=o-e._startY;r&&r(l,p,h,m)}}},p),a)}}]),a}(c.Component),p=u;"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Toucher",filename:"src\\Toucher.tsx"}});var d=a("./node_modules/classnames/index.js");"undefined"!==typeof IPageViewProps&&IPageViewProps&&IPageViewProps===Object(IPageViewProps)&&Object.isExtensible(IPageViewProps)&&Object.defineProperty(IPageViewProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IPageViewProps",filename:"src\\PageView.tsx"}});var h=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r)))._show=!0,e._touchX=0,e._closeTouchX=80,e._touching=!1,e}return Object(r.a)(a,[{key:"renderHeader",value:function(){var e=this,t=this.extra;return this.showHeader?l.a.createElement("header",{className:this.headerClassName},!this.disabledBack&&l.a.createElement("i",{onClick:function(){e.close()}}),l.a.createElement("h1",null,this.title),l.a.createElement("div",{className:"PageViewExtra"},t)):null}},{key:"renderChildren",value:function(){return l.a.createElement("div",null,"pageView")}},{key:"close",value:function(){this._show&&(this._show=!1,this.forceUpdate())}},{key:"render",value:function(){var e=this,t=this._closeTouchX,a=this.disableTouchBack,n=this.props,s=n.close,r=n.className,i={transform:"translate(".concat(this._touchX,"px)")},o={opacity:Math.min(1,.2+Math.max(0,(t-this._touchX)/t))};return this._touching&&(i.transition="none",o.transition="none"),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:d("PageViewBg",this._show?"":"PageViewBgClose",r),style:o}),l.a.createElement(p,{onTouching:function(t){a||(e._touching=!0,e._touchX=Math.max(0,t),e.forceUpdate())},validateStartTouch:function(e){return e<50},onTouch:function(n,s,r,i){a||(e._touching=!1,r>t?e.close():e._touchX=0,e.forceUpdate())},className:d("PageView",this.className,this._show?"":"PageViewClose"),onAnimationEnd:function(){!e._show&&s&&s()},style:i},this.renderHeader(),l.a.createElement("main",null,this.renderChildren())))}},{key:"headerClassName",get:function(){return""}},{key:"className",get:function(){return""}},{key:"title",get:function(){return""}},{key:"showHeader",get:function(){return!0}},{key:"disabledBack",get:function(){return!1}},{key:"disableTouchBack",get:function(){return!1}},{key:"extra",get:function(){return null}}]),a}(c.Component);t.a=h;"undefined"!==typeof h&&h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PageView",filename:"src\\PageView.tsx"}})},"./src/PageViewWrap.mdx":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var n=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=(a("react"),a("./node_modules/@mdx-js/react/dist/esm.js")),r=a("./src/PageManager.ts"),i=a("./src/PageItem.tsx"),o=a("./src/PageViewWrap.tsx"),c=a("./node_modules/father/node_modules/docz/dist/index.esm.js"),l={};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(s.b)("wrapper",Object.assign({},l,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"\u901a\u7528\u7684\u5f39\u7a97\u7ec4\u4ef6\uff0c\u5b50\u5143\u7d20\u53ca\u5404\u5c5e\u6027\u53ef\u901a\u8fc7props\u4f20\u5165"},"\u901a\u7528\u7684\u5f39\u7a97\u7ec4\u4ef6\uff0c\u5b50\u5143\u7d20\u53ca\u5404\u5c5e\u6027\u53ef\u901a\u8fc7props\u4f20\u5165"),Object(s.b)(c.c,{__position:0,__code:"<button\n  onClick={() => {\n    PageManager.openPage(\n      new PageItem(PageViewWrap, {\n        children: <div>ccc</div>,\n        title: 'aa',\n        extra: <span>+</span>,\n      }),\n    )\n  }}\n>\n  \u6253\u5f00\u901a\u7528\u9875\u9762\u5bb9\u5668\n</button>",__scope:{props:this?this.props:a,PageManager:r.a,PageItem:i.a,PageViewWrap:o.a,Playground:c.c,Props:c.d},__codesandbox:"undefined",mdxType:"Playground"},Object(s.b)("button",{onClick:function(){r.a.openPage(new i.a(o.a,{children:Object(s.b)("div",null,"ccc"),title:"aa",extra:Object(s.b)("span",null,"+")}))}},"\u6253\u5f00\u901a\u7528\u9875\u9762\u5bb9\u5668")),Object(s.b)(c.d,{of:o.a,mdxType:"Props"}))}u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src\\PageViewWrap.mdx"}}),u.isMDXComponent=!0},"./src/PageViewWrap.tsx":function(e,t,a){"use strict";var n=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),s=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),r=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),i=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper.js"),o=a("./src/PageView.tsx");"undefined"!==typeof IPageViewWrapProps&&IPageViewWrapProps&&IPageViewWrapProps===Object(IPageViewWrapProps)&&Object.isExtensible(IPageViewWrapProps)&&Object.defineProperty(IPageViewWrapProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IPageViewWrapProps",filename:"src\\PageViewWrap.tsx"}});var c=function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"renderChildren",value:function(){return this.props.children}},{key:"headerClassName",get:function(){return this.props.headerClassName||""}},{key:"showHeader",get:function(){return!1!==this.props.showHeader}},{key:"className",get:function(){return this.props.className||""}},{key:"title",get:function(){return this.props.title||""}},{key:"disabledBack",get:function(){return Boolean(this.props.disabledBack)}},{key:"disableTouchBack",get:function(){return Boolean(this.props.disableTouchBack)}},{key:"extra",get:function(){return this.props.extra}}]),a}(o.a);t.a=c,"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PageViewWrap",filename:"src\\PageViewWrap.tsx"}})}}]);