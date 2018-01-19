const fetch = require('node-fetch')

const formPost = async (url, data) => {
  console.log('posting', url, data)
  try {
    const response = new Promise((resolve, reject) => {
      fetch(url, data)
        .then(res =>  res.text())
        .then(data => resolve(data))
        .catch((e) => reject(e.message))
    })
    await response
    return response
  } catch (e) {
    console.log(e)
    return false
  }

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
    console.log(e)
    return false
  }

}

const error = message => JSON.stringify({
  success: false,
  error: message || 'default error'
})

const success = data => JSON.stringify({
  success: true,
  data,
})

module.exports = { call, error, success, formPost }