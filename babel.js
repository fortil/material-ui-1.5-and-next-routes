const fs = require('fs')
const path = require('path')
const env = process.env.BABEL
const babelrc = {
  test: `
{
  "plugins": [
    "transform-decorators-legacy",
    [
      "transform-class-properties",
      "transform-es2015-modules-commonjs"
    ]
  ],
  "presets": [
    "env",
    "react"
  ]
}
  `,
  dev: `
{
  "plugins": [
    ["babel-plugin-root-import", {
      "rootPathSuffix": "./",
      "rootPathPrefix": "#"
    }],
    "transform-decorators-legacy"
  ],
  "presets": [
    "next/babel"
  ]
}
  `,
  prod: `
{
  "plugins": [
    ["babel-plugin-root-import", {
      "rootPathSuffix": "./",
      "rootPathPrefix": "#"
    }],
    "transform-decorators-legacy"
  ],
  "presets": [
    "next/babel"
  ]
}
  `
}
fs.writeFileSync(path.join(__dirname, '.babelrc'), babelrc[env])