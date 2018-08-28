const { exec } = require('child_process')
const path = require('path')
const dirRoot = path.dirname(__dirname)
const coreDir = path.join(dirRoot, 'packages', 'progressus-core')

exec(`cd ${coreDir} && node build.js && cd ${dirRoot} && lerna add progressus-core`, (err, stdout, stderr) => {
  if (err) {
    console.log(`Error`, err)
    return;
  }
  // the *entire* stdout and stderr (buffered)
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
})
