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
    "transform-decorators-legacy"
  ],
  "presets": [
    "next/babel"
  ]
}
  `,
  prod: `
{
  "presets": [
    "next/babel"
  ]
}
  `
}
fs.writeFileSync(path.join(__dirname, '.babelrc'), babelrc[env])