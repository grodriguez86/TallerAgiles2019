var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');

var INSERT_INTO_USER = "INSERT INTO Cuenta (username, password, admin, mail, fecha_nacimiento, telefono, nombre, apellido, direccion) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false 
}));
  
var con = mysql.createConnection({
    host: "localhost",
    user: "guidomodarelli",
    password: "Librocorto13.-,",
    insecureAuth : true,
    database: "talleragiles"
});

con.connect(function(err) {
    if (err) throw err;
});

app.get('/', function (req, res) {
    return res.send({ error: true, message: 'hello' })
})

app.get('/users', function (req, res) {
    con.query("SELECT * FROM Cuenta", function (err, result) {
        if (err) throw err;
        if (result.length != 0) {
            return res.send({ error: false, data: result, message: 'users list.' });
        }
    });
});

app.get('/user/:username', function (req, res) {
    
    let username = req.params.username;

    if (!username) {
        return res.status(400).send({ error: true, message: 'Please provide username' });
    }

    con.query('SELECT * FROM Cuenta where username=?', username, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'users list.' });
    });
});

app.post('/user', function(req, res) {
    console.log(req.body);
    console.log(req.params);
    var user = req.body;

    if (!user) {
        return res.status(400).send({ error: true, message: 'Please provide username' });
    }

    con.query(INSERT_INTO_USER, [user.username, user.password, user.admin, user.mail, user.fecha_nacimiento, user.telefono, user.nombre, user.apellido, user.direccion], 
    function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'New user has been created successfully.' });
    });
})

app.delete('/user', function(req, res) {
    
})

var port = 3000;

app.listen(port, function () {
    console.log('Node app is running on port ' + port);
});
