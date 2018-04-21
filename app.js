const express = require('express')
const path = require('path')

const app = express()

app.use(express.static('static'))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'views/index.html'))
})

app.get('/first', function (req, res) {
    res.sendFile(path.join(__dirname, 'views/first.html'))
})


app.listen(3000, function () {
  console.log("App listening on port 3000.")
})
