const _ = require('lodash');
const path = require('path');

const includePath = path.resolve(__dirname, '../');

module.exports = {
    styleguideDir: 'docs',
    showUsage:     true,
    showCode:      true,
    getComponentPathLine(componentPath) {
        const name = path.basename(componentPath, '.js');
        const dirname = path.basename(path.dirname(componentPath));
        if (dirname === 'components') {
            return `import { ${name} } from "menu-animation-icon";`;
        }
        return `import ${name} from "menu-animation-icon/lib/components/${dirname}/${name}";`;
    },
    dangerouslyUpdateWebpackConfig(webpackConfig, env) {
        const newWebpackConfig = webpackConfig;
        // WARNING: inspect Styleguidist Webpack config before modifying it, otherwise you may break Styleguidist
        newWebpackConfig.resolve.alias['menu-animation-icon/lib'] = path.resolve('./src');
        newWebpackConfig.resolve.alias['menu-animation-icon'] = path.resolve('./src');
        return newWebpackConfig;
    },
    styles: {
        Playground: {
            preview: {
                height: 400 + (2 * 16) + (2 * 1),
            },
        },
    },
    sections: [
        {
            name:    'Introduction',
            content: 'src/docs/introduction.md',
        },
        {
            name:     'Documentation',
            sections: [
                {
                    name:    'Installation',
                    content: 'src/docs/installation.md',
                },
                {
                    name:    'Usage & Configuration',
                    content: 'src/docs/configuration.md',
                },
            ],
        },
        {
            name:       'UI Components',
            // components: 'src/components/**/[A-Z]*.js',
            components: () => [
                './src/components/HamburgerMenu/index.js',
                './src/components/DonerMenu/index.js',
                './src/components/BentoMenu/index.js',
                './src/components/KebabMenu/index.js',
                './src/components/MeatballMenu/index.js',
                // './src/components/Placeholder/Placeholder.js',
            ],
        },
    ],
    webpackConfig: {
        module: {
            rules: [
                {
                    test:    /\.jsx?$/,
                    exclude: /node_modules/,
                    loader:  'babel-loader',
                },
                {
                    test:    /\.styl$/,
                    loaders: ['style-loader', 'css-loader', 'stylus-loader'],
                    include: includePath,
                }, {
                    test:    /\.scss$/,
                    exclude: /(\/node_modules\/|\.global\.)/,
                    loaders: [
                        'style-loader', {
                            loader:  'css-loader',
                            options: {
                                importLoaders:  1,
                                modules:        true,
                                localIdentName: '[name]__[local]--[hash:base64:5]',
                                url:            false,
                                sourceMap:      true,
                            },
                        },
                        'resolve-url-loader',
                        {
                            loader:  'postcss-loader', options: {sourceMap: true, plugins() { return []; }},
                        },
                        'sass-loader?sourceMap',
                    ],
                    include: includePath,
                }, {
                    test: /\.global\.scss$/,
                    use:  [
                        'style-loader', {
                            loader:  'css-loader',
                            options: {
                                importLoaders: 1,
                                url:           false,
                                sourceMap:     true,
                            },
                        }, {
                            loader:  'postcss-loader', options: {sourceMap: true, plugins() { return []; }},
                        }, {
                            loader:  'sass-loader', options: {sourceMap: true},
                        },
                    ],
                    include: [
                        includePath,
                    ],
                }, {
                    test: /\.css$/,
                    use:  [
                        'style-loader', {
                            loader:  'css-loader', options: {sourceMap: true},
                        },
                    ],
                    include: includePath,
                }, {
                    test:    [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
                    loader:  require.resolve('url-loader'),
                    options: {
                        limit: 10000,
                        name:  '[hash].[ext]',
                    },
                },
            ],
        },
    },
};
