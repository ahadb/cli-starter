## CLI Starter

A bare bones starter for Node CLI that focuses only on the addition of commands.

### Installation 

npm install cli-starter -g

### Usage

* clone repo
* change `fu` in `bin/fu` to your project name
* run `npm link`
* start adding commands

CLI Starter does not use `async` or `await` nor any other deps except for 
processing args and chalk. That's it, you choose your own path from here.

### What You Could Do

1. Add more commands
2. Install more CLI specific packages like `chalk`, `clui`, `figlet`, `inquirer`, `clear`
3. Fetch some data
4. Write and read from the file system
