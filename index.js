const express = require('express')
const app = express()
const session = require('express-session')

app.use = session{}

app.listen(3000, () => {
    console.log('Listening on port 3000')
})