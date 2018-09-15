const error = require('./utils/error')
const minimist = require('minimist')

module.exports = () => {
  const args = minimist(process.argv.slice(2))

  let cmd = args._[0] || 'help'

  if (args.version || args.v) {
    cmd = 'version'
  }

  if (args.help || args.h) {
    cmd = 'help'
  }

  switch (cmd) {
    case 'bar':
      require('./commands/bar')(args)
      break
    case 'version':
      require('./commands/version')(args)
      break
    case 'help':
      require('./commands/help')(args)
      break
    default:
      error(`"${cmd}" is not a valid command, please try again or use --help for usages`)
      break
  }
}
