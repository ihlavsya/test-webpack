module.exports = function override(config, env) {
    config.module.rules.push({
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                // support for importing json files in scss
                // importer: jsonImporter(),
              },
            },
          },
        ],
        // include: [path.resolve(__dirname, "src")],
      })
    return config;
  }