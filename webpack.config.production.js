var path = require('path'),
    webpack = require('webpack'),
    HtmlwebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname),
    SRC_PATH = path.resolve(ROOT_PATH, 'src'),
    DIST_PATH = path.resolve(ROOT_PATH, 'dist'),
    LIBS_PATH = path.resolve(ROOT_PATH, 'libs'),
    TEM_PATH = path.resolve(LIBS_PATH, 'template');

module.exports = {
    devtool: 'source-map',
    entry: {
        ld04a: path.resolve(SRC_PATH, 'ld04a.jsx'),
        ld04b: path.resolve(SRC_PATH, 'ld04b.jsx'),
        ld04c: path.resolve(SRC_PATH, 'ld04c.jsx'),
        ld05: path.resolve(SRC_PATH, 'ld05.jsx'),
        ld06: path.resolve(SRC_PATH, 'ld06.jsx'),
        ld07: path.resolve(SRC_PATH, 'ld07.jsx'),
        vendors: ['react', 'react-dom']
    },
    output: {
        path: DIST_PATH,
        publicPath: '../',
        filename: 'js/[name]-[hash:8].js'
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
                test: /\.(svg|gif|png|jpg)$/,
                loader: 'url-loader?limit=(1024*8)&name=img/[name]-[hash:8].[ext]',
                include: SRC_PATH
            }, {
                test: /\.(swf|mp4|ogv|webm)$/,
                loader: 'file-loader?name=video/[name]-[hash:8].[ext]',
                include: SRC_PATH
            }, {
                test: /\.(mp3|ogg|wav|m4a)$/,
                loader: 'file-loader?name=audio/[name]-[hash:8].[ext]',
                include: SRC_PATH
            }, {
                test: /\.(woff|eot|ttf)$/,
                loader: 'file-loader?name=font/[name]-[hash:8].[ext]',
                include: SRC_PATH
            }, {
                test: /\.(css|scss)$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader'),
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
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            compress: {
                warnings: false
            },
            output: {
                comments: false
            }
        }),
        new CleanWebpackPlugin([DIST_PATH], {
            root: '',
            verbose: true,
            dry: false
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.ProvidePlugin({
            $: 'zepto' || 'jquery',
            zepto: 'zepto',
            jQuery: 'jquery',
            'window.zepto': 'zepto',
            'window.jQuery': 'jquery'
        }),
        new ExtractTextPlugin("css/[name]-[hash:8].css"),
        new webpack.optimize.CommonsChunkPlugin({
            filename: "js/[name]-[hash:8].js",
            name: "vendors"
        }),
        new HtmlwebpackPlugin({
            title: '《黎明之光》下载_蓝港互动',
            keywords: '黎明之光,黎明之光手游,黎明之光官网,黎明之光礼包,黎明之光下载,黎明之光论坛,黎明之光',
            description: '蓝港互动2016首款三端同步3DMMO动作手游《黎明之光》即将正式上线。游戏以上古龙神之间的封魔战争为故事背景，采用顶尖自研Saturn 3D引擎，打造最真实炫丽的3D大世界。360°全景空战、无限技能连击、野外组团冒险、个性战宠出征控场、一切PK玩法皆可跨服。光明与黑暗，忠诚与信仰，为玩家带来一场痛快的冒险竞技之旅！',
            filepath: DIST_PATH,
            template: path.resolve(TEM_PATH, 'index.html'),
            chunks: ['ld04a', 'vendors'],
            filename: 'html/ld_04a.html',
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: '《黎明之光》下载_蓝港互动',
            keywords: '黎明之光,黎明之光手游,黎明之光官网,黎明之光礼包,黎明之光下载,黎明之光论坛,黎明之光',
            description: '蓝港互动2016首款三端同步3DMMO动作手游《黎明之光》即将正式上线。游戏以上古龙神之间的封魔战争为故事背景，采用顶尖自研Saturn 3D引擎，打造最真实炫丽的3D大世界。360°全景空战、无限技能连击、野外组团冒险、个性战宠出征控场、一切PK玩法皆可跨服。光明与黑暗，忠诚与信仰，为玩家带来一场痛快的冒险竞技之旅！',
            filepath: DIST_PATH,
            template: path.resolve(TEM_PATH, 'index.html'),
            chunks: ['ld04b', 'vendors'],
            filename: 'html/ld_04b.html',
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: '《黎明之光》下载_蓝港互动',
            keywords: '黎明之光,黎明之光手游,黎明之光官网,黎明之光礼包,黎明之光下载,黎明之光论坛,黎明之光',
            description: '蓝港互动2016首款三端同步3DMMO动作手游《黎明之光》即将正式上线。游戏以上古龙神之间的封魔战争为故事背景，采用顶尖自研Saturn 3D引擎，打造最真实炫丽的3D大世界。360°全景空战、无限技能连击、野外组团冒险、个性战宠出征控场、一切PK玩法皆可跨服。光明与黑暗，忠诚与信仰，为玩家带来一场痛快的冒险竞技之旅！',
            filepath: DIST_PATH,
            template: path.resolve(TEM_PATH, 'index.html'),
            chunks: ['ld04c', 'vendors'],
            filename: 'html/ld_04c.html',
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: '《黎明之光》下载_蓝港互动',
            keywords: '黎明之光,黎明之光手游,黎明之光官网,黎明之光礼包,黎明之光下载,黎明之光论坛,黎明之光',
            description: '蓝港互动2016首款三端同步3DMMO动作手游《黎明之光》即将正式上线。游戏以上古龙神之间的封魔战争为故事背景，采用顶尖自研Saturn 3D引擎，打造最真实炫丽的3D大世界。360°全景空战、无限技能连击、野外组团冒险、个性战宠出征控场、一切PK玩法皆可跨服。光明与黑暗，忠诚与信仰，为玩家带来一场痛快的冒险竞技之旅！',
            filepath: DIST_PATH,
            template: path.resolve(TEM_PATH, 'index.html'),
            chunks: ['ld05', 'vendors'],
            filename: 'html/ld_05.html',
            inject: 'body'
        })
        ,
        new HtmlwebpackPlugin({
            title: '《黎明之光》下载_蓝港互动',
            keywords: '黎明之光,黎明之光手游,黎明之光官网,黎明之光礼包,黎明之光下载,黎明之光论坛,黎明之光',
            description: '蓝港互动2016首款三端同步3DMMO动作手游《黎明之光》即将正式上线。游戏以上古龙神之间的封魔战争为故事背景，采用顶尖自研Saturn 3D引擎，打造最真实炫丽的3D大世界。360°全景空战、无限技能连击、野外组团冒险、个性战宠出征控场、一切PK玩法皆可跨服。光明与黑暗，忠诚与信仰，为玩家带来一场痛快的冒险竞技之旅！',
            filepath: DIST_PATH,
            template: path.resolve(TEM_PATH, 'index.html'),
            chunks: ['ld06', 'vendors'],
            filename: 'html/ld_06.html',
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: '《黎明之光》下载_蓝港互动',
            keywords: '黎明之光,黎明之光手游,黎明之光官网,黎明之光礼包,黎明之光下载,黎明之光论坛,黎明之光',
            description: '蓝港互动2016首款三端同步3DMMO动作手游《黎明之光》即将正式上线。游戏以上古龙神之间的封魔战争为故事背景，采用顶尖自研Saturn 3D引擎，打造最真实炫丽的3D大世界。360°全景空战、无限技能连击、野外组团冒险、个性战宠出征控场、一切PK玩法皆可跨服。光明与黑暗，忠诚与信仰，为玩家带来一场痛快的冒险竞技之旅！',
            filepath: DIST_PATH,
            template: path.resolve(TEM_PATH, 'index.html'),
            chunks: ['ld07', 'vendors'],
            filename: 'html/ld_07.html',
            inject: 'body'
        })
    ]
};