#!/usr/bin/env node
var app = require('commander');


app
  .command('login [login]')
  .description('Login to lbl service')
  .option('-u, --username <username>', 'Username')
  .option('-p, --password <password>', 'Password')
  .action(async function (cmd, options) {
    const login = require('./call.js').login
    const result = await login(options.username, options.password)
    console.log('asd', result)
})

app.parse(process.argv);