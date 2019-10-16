var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');

var INSERT_INTO_USER = "INSERT INTO Cuenta (username, password, admin, mail, fecha_nacimiento, telefono, nombre, apellido, direccion) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);";
var INSERT_INTO_PERMISOS = "insert into Permisos (Cuenta_username, Tag_idTag, escritura, lectura) VALUES (?, ?, ?, ?)";
var INSERT_INTO_COMENTARIO = "INSERT INTO Comentario (Cuenta_username, Noticia_Contenido_idContenido, Texto_Comrentario) VALUES (?, ?, ?)";
var INSERT_INTO_TAG = "INSERT INTO Tag (idTag, nombre) VALUES (?, ?)";
var DELETE_CUENTA_USERNAME = "DELETE FROM Cuenta WHERE username = ?";
var GET_CUENTA = "SELECT * FROM Cuenta";
var GET_CUENTA_USERNAME = "SELECT * FROM Cuenta where username=?";
var GET_TAGS = "SELECT nombre FROM Tag";
var GET_PERMISOS_USERNAME = "SELECT escritura, lectura FROM Permisos WHERE username = ?";
var GET_NOTICIAS = "SELECT c.titulo, c.descripcion, n.contenido FROM Contenido c INNER JOIN Noticia n ON (c.idContenido = n.Contenido_idContenido)";
var GET_NOTICIA_ID = "SELECT c.titulo, c.descripcion, n.contenido FROM Contenido c INNER JOIN Noticia n ON (c.idContenido = n.Contenido_idContenido) WHERE n.Contenido_idContenido=?";

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
    con.query(GET_CUENTA, function (err, result) {
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

    con.query(GET_CUENTA_USERNAME, username, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'users list.' });
    });
});

app.get('/tags', function(req, res) {
    con.query(GET_TAGS, function (err, result) {
        if (err) throw err;
        if (result.length != 0) {
            return res.send({ error: false, data: result, message: 'users list.' });
        }    
    });
})

app.get('/user/:username/permisos', function(req, res) {

    var username = req.params.username;

    if (!username) {
        return res.status(400).send({ error: true, message: 'Please provide username' });
    }

    con.query(GET_PERMISOS_USERNAME, function(req, res) {
        if (err) throw err;
        if (result.length != 0) {
            return res.send({ error: false, data: result, message: 'users list.' });
        }    
    });
})

app.get('/noticias', function(req, res) {
    con.query(GET_NOTICIAS, function(error, results, fields) {
        if (err) throw err;
        return res.send({ error: false, data: results, message: 'users list.' });
    });
})

app.get('/noticias/:id', function(req, res) {

    var id = req.params.id;

    if (!id) {
        return res.status(400).send({ error: true, message: 'Please provide username' });
    }

    con.query(GET_NOTICIA_ID, function(error, results, fields) {
        if (err) throw err;
        return res.send({ error: false, data: results, message: 'users list.' });
    });
})

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

app.post('/noticias/:id', function(req, res) {

    var id = req.params.id;

    if (!id) {
        return res.status(400).send({ error: true, message: 'Please provide username' });
    }

    con.query(INSERT_INTO_COMENTARIO, [req.body.username, id, req.body.contenido], function(error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'New user has been created successfully.' });
    });
})

app.post('/label', function(req, res) {

    var label = req.body;

    if (!label) {
        return res.status(400).send({ error: true, message: 'Please provide username' });
    }

    con.query(INSERT_INTO_TAG, function(error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'New user has been created successfully.' });
    });
})

app.post('/user/:username/permisos', function(req, res) {
    
    var permisos = req.body;

    if (!permisos) {
        return res.status(400).send({ error: true, message: 'Please provide username' });
    }

    con.query(INSERT_INTO_PERMISOS, username, function(error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'New user has been created successfully.' });
    });
})

app.delete('/user', function(req, res) {
    
    var user = req.body;

    if (!user) {
        return res.status(400).send({ error: true, message: 'Please provide username' });
    }

    con.query(DELETE_CUENTA_USERNAME, username, function(error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'User has been deleted successfully.' });
    });
})

var port = 3000;

app.listen(port, function () {
    console.log('Node app is running on port ' + port);
});
