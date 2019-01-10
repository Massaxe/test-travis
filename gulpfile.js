'use strict';
const axios = require('axios');
const {series, parallel} = require('gulp');

const paths = [
  'http://localhost:3000/api/animals',
  'http://localhost:3000/api/dogs',
];

function checkPaths(cb) {
  for (let i = 0; i < paths.length; i++) {
    axios
      .get()
      .then(res => {})
      .catch(err => {
        cb(err);
      });
  }
  cb();
}

function checkMore(cb) {
  cb();
}

function transpile(cb) {
  cb();
}

function bundle(cb) {
  cb();
}

function js(cb) {
  cb();
}

function css(cb) {
  cb(new Error('weak'));
}

exports.build = series(transpile, bundle);
exports.transcend = parallel(js, css);
exports.bothParallel = parallel(series(transpile, bundle), parallel(js, css));
exports.final = parallel(transpile, checkPaths, checkMore);
