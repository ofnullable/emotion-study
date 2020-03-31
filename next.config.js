const path = require('path');
const withImages = require('next-images');

module.exports = withImages({
    include: path.resolve(__dirname, 'node_modules/tui-editor'),
});
