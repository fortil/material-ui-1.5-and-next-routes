'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _config = require('../config.json');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SERVER_BASE = _config2.default && _config2.default.api || 'http://localhost:8080';
const http = _axios2.default.create({
  baseURL: `${SERVER_BASE}`,
  timeout: 100000
});

http.interceptors.response.use(response => response, e => {
  const firstMsg = e && e.response && e.response.statusText || e.toString();

  let msg = {
    message: firstMsg,
    detail: firstMsg
  };
  if (e.response && e.response.data) {
    msg = e.response.data;
  }
  throw msg;
});

exports.default = http;