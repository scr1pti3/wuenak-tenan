const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const production = require('./webpack.prod.js');

module.exports = merge(production, {
    output: {
        path: path.resolve(__dirname, 'docs'),
    }
})
