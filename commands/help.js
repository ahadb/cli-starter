const cmdMenus = {
  index: `
    fu 1.0.0
    url: https://your-path-to-usage.com
    
    Basic Commands:
    fu [command] <options>
    
    bar ................ show your first command
    version ............ show your package version
    help ............... show your help menu for a command
    config ............. path to your config file`,

  bar: `
    Basic Usage:
    fu bar <options>

    --option, -o ..... the option to use`,
}

module.exports = (args) => {
  const subCmd = args._[0] === 'help'
    ? args._[1]
    : args._[0]

  console.log(cmdMenus[subCmd] || cmdMenus.index)
}
