const request = require('./utils/request.js')


const login = async ({username, password}) => {

  const response = await request.call(`http://localhost:3000/login?username=${username}&password=${password}`, {})

  return response
}

module.exports = login