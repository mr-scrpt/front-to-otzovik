const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const dotenv = require("dotenv");
const path = require("path");
const webpack = require("webpack");
const env = dotenv.config().parsed;
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = (env = {}) => {
  const { mode = "development" } = env;
  const isProd = mode === "production";
  const isDev = mode === "development";

  const getStyleLoaders = () => [
    isProd ? MiniCssExtractPlugin.loader : "style-loader",
    "css-loader"
  ];

  const getPlugins = () => {
    const plugins = [
      new webpack.DefinePlugin(envKeys),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: "public/index.html",
        title: "Hello world!"
      })
    ];
    if (isProd) {
      plugins.push(
        new MiniCssExtractPlugin({
          filename: "main-[hash:5].css"
        })
      );
    }
    return plugins;
  };
  return {
    mode: isProd ? "production" : isDev && "development",
    output: {
      filename: isProd ? "main-[hash:5].js" : undefined
    },
    devServer: {
      historyApiFallback: true,
      overlay: true,
      port: 8080
      /*  proxy: {
        "/api": {
          target: "http://localhost:3000",
          changeOrigin: true,
          secure: false
        }
      } */
    },

    module: {
      rules: [
        //js
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        //css
        {
          test: /\.css$/,
          use: getStyleLoaders()
        },
        //scss and sass
        {
          test: /\.(scss|sass)$/,
          use: [...getStyleLoaders(), "sass-loader"]
        },
        //Images
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: [
            {
              loader: "file-loader",
              options: {
                outputPath: "img",
                name: "[name]-[sha1:hash:5].[ext]"
              }
            }
          ]
        },
        //Fonts
        {
          test: /\.(ttf|otf|eot|woff|woff2)$/i,
          use: [
            {
              loader: "file-loader",
              options: {
                outputPath: "fonts",
                name: "[name].[ext]"
              }
            }
          ]
        }
      ]
    },
    plugins: getPlugins(),
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "src"),
        "~c": path.resolve(__dirname, "src/components/"),
        "~m": path.resolve(__dirname, "src/modules/"),
        "~u": path.resolve(__dirname, "src/utils/"),
        "~p": path.resolve(__dirname, "src/components/pages/"),
        "~f": path.resolve(__dirname, "src/components/forms/")
      }
    }
  };
};

/* 
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },

      // Loading images
      {
        test: /\.(png|jpg|jpeg|gif|ico)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images",
              name: "[name]-[sha1:hash:7].[ext]"
            }
          }
        ]
      },

      // Loading fonts
      {
        test: /\.(ttf|otf|eot|woff|woff2)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "fonts",
              name: "[name].[ext]"
            }
          }
        ]
      },

      // Loading CSS
      {
        test: /\.(css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },

      // Loading SASS/SCSS
      {
        test: /\.(s[ca]ss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Hello World",
      buildTime: new Date().toISOString(),
      template: "public/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "main-[hash:8].css"
    })
  ],

  devServer: {
    historyApiFallback: true,
    open: true
  }
};
 */
