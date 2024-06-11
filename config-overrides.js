const { override, addWebpackModuleRule, addWebpackResolve, addWebpackAlias } = require("customize-cra");
const path = require('path')

module.exports = {
    webpack: override(
        addWebpackResolve({
            fallback: {
                fs: false,
            },
        }),
        addWebpackAlias({
            '@': path.resolve(__dirname, 'src')
        }),
        addWebpackModuleRule(
            {
                test: [/\.css$/, /\.scss$/],
                exclude: [/\.module\.(css|scss)/],
                use: ['style-loader' ,
                    "css-loader",
                    "sass-loader"
                ],
            },
        ),
    ),
}