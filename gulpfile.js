'use strict';
const axios = require('axios');
const {series, parallel} = require('gulp');

const paths = [
  'http://localhost:3000/api/animals',
  'http://localhost:3000/api/do',
];

function checkPaths(cb) {
  axios
    .get('http://localhost:3000/api/dogs')
    .then(res => {
      cb();
    })
    .catch(err => {
      cb(err);
    });
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
