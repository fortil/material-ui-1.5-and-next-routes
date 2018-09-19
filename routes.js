const routes = require('next-routes')
const paths = require('./paths')
module.exports = Object.keys(paths).reduce((prev, key) => (
  prev.add(key, paths[key].page)
), routes())