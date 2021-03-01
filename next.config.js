require('dotenv').config({path:__dirname+'./.env'})

const path = require('path');
const webpack = require('webpack');
const os = require('os');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { name } = require('./package.json');

const { NODE_ENV = 'dev' } = process.env;
const IS_DEV = NODE_ENV === 'dev';
const dirNode = 'node_modules';
const dirApp = path.join(__dirname, 'examples', 'react', 'src');
const dirAssets = path.join(__dirname, 'assets');
const appHtmlTitle = name;

module.exports = {
    entry: {
        bundle: path.join(dirApp, 'index'),
    },
    resolve: {
        modules: [dirNode, dirAssets],
    },
    devIndicators: {
        autoPrerender: false,
    },
    module: {
        rules: [
            // BABEL
            {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /(node_modules)/,
            options: {
                compact: true,
                sourceMap: IS_DEV,
            },
            },

            // STYLES
            {
            test: /\.css$/,
            use: [
                'style-loader',
                {
                loader: 'css-loader',
                options: {
                    sourceMap: IS_DEV,
                },
                },
            ],
            },

            // CSS / SASS
            {
            test: /\.scss/,
            use: [
                'style-loader',
                {
                loader: 'css-loader',
                options: {
                    sourceMap: IS_DEV,
                },
                },
                {
                loader: 'sass-loader',
                options: {
                    sourceMap: IS_DEV,
                    includePaths: [dirAssets],
                },
                },
            ],
            },

            // IMAGES
            {
            test: /\.(jpe?g|png|gif)$/,
            loader: 'file-loader',
            options: {
                name: '[path][name].[ext]',
            },
            },
        ],
        plugins: [
            // other plugins,
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                window: 'jquery',
                'window.jQuery': 'jquery'
            }),
        ],
    },
    env: {
        'APP_VERSION': process.env.APP_VERSION,
        'APP_NAME': process.env.APP_NAME,
        'APP_DESCRIPTION': process.env.APP_DESCRIPTION,
        'APP_AUTHOR': process.env.APP_AUTHOR,

        'STDAUX_ROOT_URL': process.env.STDAUX_ROOT_URL,
        'STDAUX_HOST': process.env.STDAUX_HOST,
        'STDAUX_PORT': process.env.STDAUX_PORT,

        'FERMAT_ROOT_URL': process.env.FERMAT_ROOT_URL,
        'FERMAT_HOST': process.env.FERMAT_HOST,
        'FERMAT_PORT': process.env.FERMAT_PORT,
        
        'FERMAT_DATAENGINE_URL': process.env.FERMAT_DATAENGINE_URL,
        'FERMAT_DATAENGINE_HOST': process.env.FERMAT_DATAENGINE_HOST,
        'FERMAT_DATAENGINE_PORT': process.env.FERMAT_DATAENGINE_PORT,

        'MAPBOX_ACCESS_TOKEN': process.env.MAPBOX_ACCESS_TOKEN,

        'PLANET_API_KEY': process.env.PLANET_API_KEY,

        'AWS_ACCESS_KEY_ID': process.env.AWS_ACCESS_KEY_ID,
        'AWS_REGION': process.env.AWS_REGION,
        'AWS_SECRET_ACCESS_KEY': process.env.AWS_SECRET_ACCESS_KEY,

        'ANALYTICS_PROPERTY_ID': process.env.ANALYTICS_PROPERTY_ID,
        'GOOGLE_CUSTOM_SEARCH_CX': process.env.GOOGLE_CUSTOM_SEARCH_CX,
        'GOOGLE_SEARCH_API_KEY': process.env.GOOGLE_SEARCH_API_KEY,

        'FACEBOOK_PIXEL_ID': process.env.FACEBOOK_PIXEL_ID,
        'TWITTER_CONVERSION_ID': process.env.TWITTER_CONVERSION_ID,

        'GEE_API_KEY': process.env.GEE_API_KEY,
        'NASA_API_KEY': process.env.NASA_API_KEY,
        'ISRO_API_KEY': process.env.ISRO_API_KEY,
        
        'FACEBOOK_LINK': process.env.FACEBOOK_LINK,
        'TWITTER_LINK': process.env.TWITTER_LINK,
        'LINKEDIN_LINK': process.env.LINKEDIN_LINK,
        'INSTAGRAM_LINK': process.env.INSTAGRAM_LINK,
    },
    output: {
        globalObject: "this",
    }
}
