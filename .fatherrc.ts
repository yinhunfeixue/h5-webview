import { IBundleOptions } from 'father';

const options: IBundleOptions = {
  cjs: {
    type: 'babel',
  },
  esm: {
    type: 'babel',
  },
  doc: {
    typescript: true,
    title: 'h5-webview',
    base: '/h5-webview/',
  },
};

export default options;
