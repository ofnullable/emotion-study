const path = require('path');
const withImages = require('next-images');
const withCSS = require('@zeit/next-css');

module.exports = withCSS(
  withImages({
    include: path.resolve(__dirname, 'node_modules/tui-editor'),
  }),
  {
    cssLoaderOptions: {
      url: false,
    },
  }
);
