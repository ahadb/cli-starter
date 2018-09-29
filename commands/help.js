const chalk = require('chalk')
const b = chalk.bold
const u = chalk.underline
const d = chalk.dim

const cmdMenus = {
  index: `
    ${b(`your-package`)}
    url: https://github.com/jsinfin/fincli
    version: 1.0.0
    
    ${b(`> your-package`)} [command] <options>
    
    ${d(`USAGE:`)}
    foo                  show your first command
    bar                  show your second command
    foo --symbol -s      show your first command with args
    version, v           show your package version
    help, h              show your help menu for a command
    config               path to your config file`,

  foo: `
    ${d(`Basic Usage:`)}
    your-package foo <no options>`,

  bar: `
    ${d(`Basic Usage:`)}
    your-package bar <options>

    --option, -o ..... some extra option for bar`
}

module.exports = (args) => {
  const subCmd = args._[0] === 'help'
    ? args._[1]
    : args._[0]

  console.log(cmdMenus[subCmd] || cmdMenus.index)
}
