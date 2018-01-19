#!/usr/bin/env node
 
var app = require('commander');

app
  .command('login [login]')
  .description('Login to lbl service')
  .option('-u, --username <username>', 'Username')
  .option('-p, --password <password>', 'Password')
  .action(function (cmd, options) {
    console.log(options.username, options.password)
})

app.parse(process.argv);