const http = require('http')

http.createServer((req, res) => {
    //res.writeHead(200, {'Content-Type': 'application/json'})
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    res.writeHead(200, {'Content-Type': 'application/csv'})

    // const persona = {
    //     id: 1,
    //     nombre: 'Luis'
    // }
    res.write('id, nombre\n')
    res.write('1, nombre1\n')
    res.write('2, nombre2\n')
    res.write('3, nombre3\n')
    res.write('4, nombre4\n')

    //res.write(JSON.stringify(persona))
    res.end()
})
.listen('8080')

console.log('Escuchando en el puerto ', 8080)