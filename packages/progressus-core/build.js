const fs = require('fs')
const { exec } = require('child_process')
const path = require('path')

let dirs = fs.readdirSync('./')
dirs = dirs.filter(dir => (
  fs.lstatSync(dir).isDirectory() && !['node_modules', 'build', '__test__', 'utils', '.git'].includes(dir)
))

let files = []
for (let idx = 0; idx < dirs.length; idx++) {
  let dir = fs.readdirSync(`./${dirs[idx]}`)
  dir = dir.map(d => path.join(dirs[idx], d))
  files = files.concat(dir)
}

for (let id = 0; id < files.length; id++) {
  const file = path.join(__dirname, files[id])
  const buildFileDir = path.join(__dirname, 'build', path.dirname(files[id]))
  const buildFile = path.join(__dirname, 'build', files[id])

  if (!fs.existsSync(buildFileDir)) {
    fs.mkdirSync(buildFileDir)
  }

  exec(`babel --plugins babel-plugin-transform-react-jsx ${file} -o ${buildFile}`, (err, stdout, stderr) => {
    if (err) {
      console.log(`Error`, err)
      return;
    }
    // the *entire* stdout and stderr (buffered)
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  })
}

const indexFile = path.join(__dirname, 'index.js')
const indexBuildFile = path.join(__dirname, 'build', 'index.js')

exec(`babel --plugins babel-plugin-transform-react-jsx ${indexFile} -o ${indexBuildFile}`, (err, stdout, stderr) => {
  if (err) {
    console.log(`Error`, err)
    return;
  }
  // the *entire* stdout and stderr (buffered)
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
})