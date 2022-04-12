const shell = require('shelljs')
const fs = require(`fs`)

const packages = fs.readFileSync(`./packages.txt`, `utf-8`).split(`\n`).map(p => p.trim().slice(2))

packages.forEach(package => {
  shell.echo(`npm deprecate ${package} "bad publish"`)
})

