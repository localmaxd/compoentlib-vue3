const path = require("path");
// const glob = require("glob");
const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const list = {};
// async function makeList(dirPath, list) {
//   const files = glob.sync(`${dirPath}/**/index.js`);
//   for (let file of files) {
//     console.log(file);
//     const comName = file.split(/[/.]/)[4];
//     list[comName] = `./${file}`;
//   }
// }

// makeList("src/libs/appui/compoents", list);

list["index"] = "./src/libs/appui/index.js";
module.exports = {
  mode: "none",
  entry: list,
  output: {
    filename: "my-lib.js",
    path: path.join(__dirname, "/dist"),
    library: `myLib`,
    libraryTarget: "umd",
    libraryExport: "default",
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "dist/[name].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
