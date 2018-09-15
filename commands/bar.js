const yourOption = require('../utils/your-option')

module.exports = (args) => {
    // here we look for the user passing in --option or -o
    const option = args.option || args.o

    if (option) {
      // below we know the user passed in an option
      console.log('You first command!', option)
    } else {
      console.log('Your first command')
    }
}
