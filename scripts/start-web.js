const { exec } = require('child_process')
const path = require('path')
const argv = require('minimist')(process.argv.slice(2))
const dirRoot = path.dirname(__dirname)
const packagesDir = path.join(dirRoot, 'packages')

if (argv.h || argv.help) {
  console.log(`
  You can use:\n
  - yarn start -n doctor -c dev (to run web doctor for example) or\n
  - yarn start -all -c dev (to run all web)
  `)
} else {
  if (argv.n) {
    const dirToGo = path.join(packagesDir, `progressus-${argv.n}`)
    if (!argv.c) {
      console.log('Doesnt exist option command, will be run dev by default')
    }
    const command = argv.c ? argv.c : 'dev'
    exec(`cd ${dirToGo} && npm run ${command}`, (err, stdout, stderr) => {
      if (err) {
        console.log(`Error`, err)
        return;
      }
      // the *entire* stdout and stderr (buffered)
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    })
  } else if (argv.all) {

  }
}


// exec(`cd ${coreDir} && node build.js && cd ${dirRoot} && lerna add progressus-core`, (err, stdout, stderr) => {
//   if (err) {
//     console.log(`Error`, err)
//     return;
//   }
//   // the *entire* stdout and stderr (buffered)
//   console.log(`stdout: ${stdout}`);
//   console.log(`stderr: ${stderr}`);
// })
