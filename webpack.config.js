const path = require("path");

const mode = process.env.NODE_ENV === 'production' ? 'production': 'development';

module.exports = {
    mode,

    devtool: 'source-map',

    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 9000
    }
}
