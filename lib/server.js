const express = require('express')
const app = express()

const dummyData = {
    username: 'twl',
    password: 'apa123',
    role: 'teamlead',
    hobby: 'servrar',
    music: 'Slayer',
    nickname: 't-bag',
    surname: 'Tommy',
    lastname: 'Ljungberg'
}

app.get('/login', (req, res) => {
    console.log(' server', req)
    return req.query.username === dummyData.username && req.query.password === dummyData.password ? 
    res.send(JSON.stringify(dummyData)) : res.send(JSON.stringify({ response : 'Unauthorized - Your base are belong not to us' })) 
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))