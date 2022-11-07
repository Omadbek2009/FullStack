const { Router } = require('express')
const cors = require('cors')
const app = Router()
const users = require('./user.js')

app.use(cors())

app.get('/',(req, res) =>{
    res.send(users);
})

module.exports = app