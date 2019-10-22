var bodyParser = require('body-parser');
var express = require('express');
var mysql = require('mysql');

var DELETE_CUENTA_USERNAME = 'DELETE FROM Cuenta WHERE username=?';
var GET_CUENTA = 'SELECT * FROM Cuenta';
var GET_CUENTA_USERNAME = 'SELECT * FROM Cuenta where username=?';
var GET_NOTICIAS = 'SELECT c.Titulo, c.Descripcion, n.Contenido FROM Contenido c INNER JOIN Noticia n ON (c.Idcontenido = n.Contenido_idcontenido)';
var GET_NOTICIA_ID = 'SELECT c.Titulo, c.Descripcion, n.Contenido FROM Contenido c INNER JOIN Noticia n ON (c.Idcontenido = n.Contenido_idContenido) WHERE n.Contenido_idContenido=?';
var GET_PERMISOS_USERNAME = 'SELECT Tag_idtag, Escritura, Lectura FROM Permisos WHERE Cuenta_username=?';
var GET_TAGS = 'SELECT * FROM Tag';
var INSERT_INTO_COMENTARIO = 'INSERT INTO Comentario (Cuenta_username, Noticia_contenido_idcontenido, Texto_comentario) VALUES (?, ?, ?)';
var INSERT_INTO_PERMISOS = 'INSERT INTO Permisos (Cuenta_username, Tag_idtag, Escritura, Lectura) VALUES (?, ?, ?, ?)';
var INSERT_INTO_TAG = 'INSERT INTO Tag (Idtag, Nombre) VALUES (?, ?)';
var INSERT_INTO_USER = 'INSERT INTO Cuenta (Username, Password, Admin, Mail, Fecha_nacimiento, Telefono, Nombre, Apellido, Direccion) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);';

var app = express();
var port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false 
}));
  
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    insecureAuth : true,
    database: 'talleragiles'
});

con.connect(function(error) {
    if (error) throw error;
});

app.get('/', function (req, res) {
    return res.send({ error: true, message: 'Root' })
})

app.get('/users', function (req, res) {
    con.query(GET_CUENTA, function (error, result) {
        if (error) throw error;
        if (result.length != 0) {
            return res.send({ error: false, data: result, message: 'Users list.' });
        }
    });
});

app.get('/user/:username', function (req, res) {

    var username = req.params.username;

    if (!username) {
        return res.status(400).send({ error: true, message: 'Error in parameters. Please provide a correct username.' });
    }

    con.query(GET_CUENTA_USERNAME, username, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'User listed.' });
    });
});

app.get('/tags', function(req, res) {
    con.query(GET_TAGS, function (error, result) {
        if (error) throw error;
        if (result.length != 0) {
            return res.send({ error: false, data: result, message: 'Tags list.' });
        }    
    });
})

app.get('/user/:username/permisos', function(req, res) {

    var username = req.params.username;

    if (!username) {
        return res.status(400).send({ error: true, message: 'Error in parameters. Please provide a correct username.' });
    }
    console.log(username);
    con.query(GET_PERMISOS_USERNAME, username, function(error, result) {
        if (error) throw error;
        if (result.length != 0) {
            return res.send({ error: false, data: result, message: 'Permissions list.' });
        }    
    });
})

app.get('/noticias', function(req, res) {
    con.query(GET_NOTICIAS, function(error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'News list.' });
    });
})

app.get('/noticias/:id', function(req, res) {

    var id = req.params.id;

    if (!id) {
        return res.status(400).send({ error: true, message: 'Error in parameters. Please provide correct news id.' });
    }

    con.query(GET_NOTICIA_ID, id, function(error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'New listed.' });
    });
})

app.post('/user', function(req, res) {

    var user = req.body;

    if (!user) {
        return res.status(400).send({ error: true, message: 'Error in body. Please provide a correct user.' });
    }

    con.query(INSERT_INTO_USER, [user.username, user.password, user.admin, user.mail, user.fecha_nacimiento, user.telefono, user.nombre, user.apellido, user.direccion], 
    function (error, results, fields) {
        if (error) {
						console.log('There was an error during user creation.');
						return res.status(400).send({ error: true, message: 'Error in body. Please provide a correct user.' });
				};
        return res.send({ error: false, data: results, message: 'New user has been created successfully.' });
    });
})

app.post('/noticias/:id', function(req, res) {

    var id = req.params.id;

    if (!id) {
        return res.status(400).send({ error: true, message: 'Error in parameters. Please provide correct news id.' });
    }

    con.query(INSERT_INTO_COMENTARIO, [req.body.username, id, req.body.contenido], function(error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'The news ' + id  + ' was successfully charged.' });
    });
})

app.post('/label', function(req, res) {

    var label = req.body;

    if (!label) {
        return res.status(400).send({ error: true, message: 'Error in body. Please provide correct label.' });
    }

    con.query(INSERT_INTO_TAG,[label.id,label.nombre], function(error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'New label has been created successfully.' });
    });
})

app.post('/user/:username/permisos', function(req, res) {

    var username = req.params.username;
    var permisos = req.body;

    if (!permisos) {
        return res.status(400).send({ error: true, message: 'app.post("/user/:username/permisos" --> Error in parameters. Please provide a correct username.' });
    }

    con.query(INSERT_INTO_PERMISOS, [username,permisos.tag,1,1], function(error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'The user ' + username + ' was successfully added permissions.' });
    });
})

app.delete('/user', function(req, res) {
    
    var user = req.body;

    if (!user) {
        return res.status(400).send({ error: true, message: 'Error in body. Please provide user.' });
    }

    con.query(DELETE_CUENTA_USERNAME, user.nombre, function(error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'The user has been deleted successfully.' });
    });
})

app.listen(port, function () {
    console.log('Node app is running on port ' + port);
});
