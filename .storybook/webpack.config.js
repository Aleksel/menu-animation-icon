const path = require('path');

const includePath = path.resolve(__dirname, '../');

// Export a function. Accept the base config as the only param.
module.exports = (storybookBaseConfig, configType) => {
    // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    storybookBaseConfig.module.rules.push(
        {
            test: /\.styl$/,
            loaders: ['style-loader', 'css-loader', 'stylus-loader'],
            include: includePath
        }, {
            test: /\.scss$/,
            exclude: /(\/node_modules\/|\.global\.)/,
            loaders: [
                'style-loader', {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                        modules: true,
                        localIdentName: '[name]__[local]--[hash:base64:5]',
                        url: false,
                        sourceMap: true
                    },
                },
                'resolve-url-loader',
                {
                    loader: 'postcss-loader', options: { sourceMap: true, plugins: function() { return []; } },
                },
                'sass-loader?sourceMap',
            ],
            include: includePath
        }, {
            test: /\.global\.scss$/,
            use: [
                'style-loader', {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                        url: false,
                        sourceMap: true,
                    },
                }, {
                    loader: 'postcss-loader', options: { sourceMap: true, plugins: function() { return []; } },
                }, {
                    loader: 'sass-loader', options: { sourceMap: true, },
                }
            ],
            include: [
              includePath,
            ]
        }, {
            test: /\.css$/,
            use: [
                'style-loader', {
                    loader: 'css-loader', options: { sourceMap: true, },
                },
            ],
            include: includePath
        }, {
            test:    [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
            loader:  require.resolve('url-loader'),
            options: {
                limit: 10000,
                name:  '[hash].[ext]',
            },
        }
    );

    // Return the altered config
    return storybookBaseConfig;
};
