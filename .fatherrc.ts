import { IBundleOptions } from 'father';

const options: IBundleOptions = {
  cjs: {
    type: 'rollup',
  },
  esm: {
    type: 'rollup',
  },
  doc: {
    typescript: true,
    title: 'h5-webview',
    base: '/h5-webview/',
  },
};

export default options;
