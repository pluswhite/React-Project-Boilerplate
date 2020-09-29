const express = require('express');
const webpack = require('webpack');

const app = express();
const config = require('../webpack.config');
const compiler = webpack(config);

app.use(
  require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
  }),
);

app.listen(3000, function () {
  console.log('App is listening on port 3000');
});
