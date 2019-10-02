var mysql = require('mysql');
var resultado;
var con = mysql.createConnection({
  host: "localhost",
  user: "lautaro",
  password: "Lautaro3.0",
insecureAuth : true,
  database: "talleragiles"
});

con.connect(function(err) {
  if (err) throw err;
});



con.query("SELECT * FROM Cuenta", function (err, result, fields) {
    if (err) throw err;
    resultado = result;
console.log(result[0].username);
  });

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(resultado[0].username);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
