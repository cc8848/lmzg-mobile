var path = require('path'),
    webpack = require('webpack'),
    HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname),
    SRC_PATH = path.resolve(ROOT_PATH, 'src'),
    DIST_PATH = path.resolve(ROOT_PATH, 'dist'),
    LIBS_PATH = path.resolve(ROOT_PATH, 'libs'),
    TEM_PATH = path.resolve(LIBS_PATH, 'template');

module.exports = {
    devtool: 'eval-source-map',
    entry: {
        ld04a: path.resolve(SRC_PATH, 'ld04a.jsx'),
        ld04b: path.resolve(SRC_PATH, 'ld04b.jsx'),
        ld04c: path.resolve(SRC_PATH, 'ld04c.jsx'),
        ld05: path.resolve(SRC_PATH, 'ld05.jsx'),
        ld06: path.resolve(SRC_PATH, 'ld06.jsx'),
        ld07: path.resolve(SRC_PATH, 'ld07.jsx')
    },
    output: {
        path: DIST_PATH,
        filename: '[name].js'
    },
    module: {
        preLoader: [
            {
                test: /\.(js|jsx)?$/,
                loader: 'eslint',
                include: SRC_PATH
            }
        ],
        loaders: [
            {
                test: /\.(js|jsx)?$/,
                loader: 'babel',
                include: SRC_PATH
            }, {
                test: /\.(svg|gif|png|jpg|swf|mp4|mp3|m4a|otf|svg|eot|ttf|woff)$/,
                loader: 'file-loader?name=[name].[ext]',
                include: SRC_PATH
            }, {
                test: /\.(css|scss)$/,
                loaders: ['style', 'css', 'sass'],
                include: SRC_PATH
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.scss']
    },
    externals: {
        zepto: '$',
        jquery: '$'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'zepto' || 'jquery',
            zepto: 'zepto',
            jQuery: 'jquery',
            'window.zepto': 'zepto',
            'window.jQuery': 'jquery'
        }),
        new HtmlwebpackPlugin({
            title: '黎明之光',
            filepath: DIST_PATH,
            template: path.resolve(TEM_PATH, 'index.html'),
            chunks: ['ld04a'],
            filename: 'ld_04a.html',
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: '黎明之光',
            filepath: DIST_PATH,
            template: path.resolve(TEM_PATH, 'index.html'),
            chunks: ['ld04b'],
            filename: 'ld_04b.html',
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: '黎明之光',
            filepath: DIST_PATH,
            template: path.resolve(TEM_PATH, 'index.html'),
            chunks: ['ld04c'],
            filename: 'ld_04c.html',
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: '黎明之光',
            filepath: DIST_PATH,
            template: path.resolve(TEM_PATH, 'index.html'),
            chunks: ['ld05'],
            filename: 'ld_05.html',
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: '黎明之光',
            filepath: DIST_PATH,
            template: path.resolve(TEM_PATH, 'index.html'),
            chunks: ['ld06'],
            filename: 'ld_06.html',
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: '黎明之光',
            filepath: DIST_PATH,
            template: path.resolve(TEM_PATH, 'index.html'),
            chunks: ['ld07'],
            filename: 'ld_07.html',
            inject: 'body'
        })
    ],
    devServer: {
        inline: true,
        hot: true,
        colors: true,
        historyApiFallback: true,
        progress: true,
        contentBase: ROOT_PATH,
        host: '0.0.0.0',
        proxy: [{
            context: ['/*'],
            target: 'https://lmzg.8864.com',
            changeOrigin: true,
            ws: true,
            secure: false
        }]
    }
};