module.exports = {
  entry: ["./src/index.js"],
  output: {
    filename: 'bundle.js',
  },
  devtool: "#inline-source-map",
  module: {
   loaders: [
     {
       test: /\.js$/,
       exclude: /node_modules/,
       loader: 'babel-loader',
       query: {
         presets: ['react', 'es2015']
       }
     }
   ]
 },
 resolve: {
   extensions: ['.js']
 }
}
