const express = require('express')
    , app = express()
    , routes = require('./routes')

const port = 3000

routes(app)

app.listen(port, console.log(
    `Servidor está rodando na porta ${port}`
))

module.exports = app