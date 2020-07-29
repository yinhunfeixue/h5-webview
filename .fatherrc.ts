import { IBundleOptions } from 'father';

const options: IBundleOptions = {
  cjs: 'rollup',
  esm: 'rollup',
  doc: {
    typescript: true,
    title: 'h5-webview',
    base: '/h5-webview/',
  },
};

export default options;
