const express = require('express')
const app = express()
const port = 8080

// Middleware para servir contenido estatico
//Le indica que la carpeta public sera la que sirva el contenido estatico
app.use(express.static('public'))

app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html')
})

app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html')
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`App listening at ${port}`)
})