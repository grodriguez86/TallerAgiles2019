var mysql = require('../AwesomeProject/node_modules/mysql');
var resultado;
var con = mysql.createConnection({
    host: "localhost",
    user: "usuario",
    password: "contraseña",
    insecureAuth : true,
    database: "talleragiles"
});

con.connect(function(err) {
    if (err) throw err;
});

con.query("SELECT * FROM Cuenta", function (err, result) {
    if (err) throw err;
    resultado = result;
    if (resultado.length != 0) {
        console.log(resultado[0].username);
    }
});

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(resultado[0].username);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
