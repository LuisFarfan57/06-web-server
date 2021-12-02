const express = require('express')
const hbs = require('hbs')
require('dotenv').config()

const app = express()
const port = process.env.PORT

//Indicar que se utilizara hbs para renderizar
app.set('view engine', 'hbs')

//Indica donde se utilizaran los partials, que son los bloques para reutilizar codigo
hbs.registerPartials(__dirname + '/views/partials', (err) => {

})

//Para utilizar los assets e imagenes
app.use(express.static('public'))

app.get('/', (req, res) => {
    //Renderizar las views. En la carpeta views. Configuracion por defecto de hbs
    res.render('home', {
        nombre: 'Luis Farfan',
        titulo: 'Curso de node'
    })
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Luis Farfan',
        titulo: 'Curso de node'
    })
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Luis Farfan',
        titulo: 'Curso de node'
    })
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`App listening at ${port}`)
})