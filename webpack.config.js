module.exports = {
  entry: ["./src/index.js"],
  output: {
    filename: 'dist/bundle.js',
  },
  devtool: "source-map",
  module: {
   loaders: [
     {
       test: /\.js$/,
       exclude: /node_modules/,
       loader: 'babel-loader',
       query: {
         presets: ['react', 'es2015', 'stage-2']
       }
     }
   ]
 },
 resolve: {
   extensions: ['.js']
 }
}
