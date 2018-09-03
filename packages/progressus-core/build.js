const fs = require('fs')
const { exec } = require('child_process')
const path = require('path')
const BASE_DIR = 'src'
const rmraf = require('rimraf')

let dirsAndFiles = (fs.readdirSync(path.join(__dirname, 'src')))
  .filter(dir => !['node_modules', 'build', '__test__', '.git', '.DS_Store'].includes(dir))
  .map(d => path.join(__dirname, BASE_DIR, d))

let dirs = dirsAndFiles.filter(dir => (
  fs.lstatSync(dir).isDirectory()
))

let files = dirsAndFiles.filter(p => !fs.lstatSync(p).isDirectory())

function foundFilesIntoDirs(dir) {
  let directories = fs.readdirSync(dir)
  directories.map(d => path.join(dir, d)).forEach(p => {
    if (fs.lstatSync(p).isDirectory()) {
      foundFilesIntoDirs(p)
    } else {
      files.push(p)
    }
  })
}
for (let idx = 0; idx < dirs.length; idx++) {
  foundFilesIntoDirs(dirs[idx])
}

const buildDir = path.join(__dirname, 'build')

if (fs.existsSync(buildDir)) {
  rmraf(buildDir, continueFn)
} else {
  continueFn()
}

function continueFn() {
  if (!fs.existsSync(buildDir)) {
    fs.mkdirSync(buildDir)
  }
  
  for (let id = 0; id < files.length; id++) {
    const originPathFile = files[id]
    const file = files[id].substring(files[id].indexOf(`${BASE_DIR}/`), files[id].length).replace(`${BASE_DIR}/`, '')
    const fileName = path.basename(file)
    const pathName = path.dirname(file)
    const buildFileDir = path.join(buildDir, pathName)
    const buildFile = path.join(buildFileDir, fileName)
  
    if (!fs.existsSync(buildFileDir)) {
      fs.mkdirSync(buildFileDir)
    }
    exec(`./node_modules/.bin/babel --plugins babel-plugin-transform-react-jsx ${originPathFile} -o ${buildFile}`, (err, stdout, stderr) => {
      if (err) {
        console.log('========================ERROR========================');
        console.log(err)
        console.log('=====================================================');
        return;
      }
    })
  }
}
