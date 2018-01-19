const fetch = require('node-fetch');

const login = async (username, password) => {
    const response = await call(`http://localhost:3000/login?username=${username}&password=${password}`, {})
    return response
}

const call = async (url, data) => {
    console.log('calling', url, data)
    try {
      const response = new Promise((resolve, reject) => {
        fetch(url, data)
          .then(res =>  res.json())
          .then(data => resolve(data))
          .catch((e) => reject(e.message))
      })
      await response
      return response
    } catch (e) {
      console.log('error', e)
      return false
    }
  
  }

module.exports = { login }