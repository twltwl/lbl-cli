#!/usr/bin/env node
var app = require('commander');
var prompt = require('prompt')

app
  .command('login [login]')
  .description('Login to lbl service')
  .action((cmd, options) => {
    prompt.start()
    prompt.get(['username', 'password'], async (err, options) => {
      const login = require('./login.js')
      const result = await login(options)
      console.log('asd', result)
    })
})
/*
app
  .command('create [create]')
  .description('create new label')
  .option('-k, --key <key>', 'Key')
  .option('-v, --value <value>', 'Value')
  .action(async (cmd, options) => {
    const login = require('./call.js').login
    const result = await login(options.username, options.password)
    console.log('asd', result)
})
*/
app.parse(process.argv);
