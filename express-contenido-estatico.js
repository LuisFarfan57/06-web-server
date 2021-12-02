const express = require('express')
const app = express()
const port = 8080

// Middleware para servir contenido estatico
//Le indica que la carpeta public sera la que sirva el contenido estatico
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Hola mundo')
})

app.get('/hola-mundo', (req, res) => {
    res.send('Hola mundo en su ruta')
})

app.get('*', (req, res) => {
    //res.send('404 | Page not found')
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`App listening at ${port}`)
})