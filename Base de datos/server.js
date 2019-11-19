// ------------------- REQUIRES ------------------- //
var bodyParser = require('body-parser');
var express = require('express');
var mysql = require('mysql');

// ------------------- QUERIES ------------------- //
var DELETE_CUENTA_USERNAME = 'DELETE FROM Cuenta WHERE username=?';
var GET_CUENTA = 'SELECT * FROM Cuenta';
var GET_CUENTA_USERNAME = 'SELECT * FROM Cuenta where username=?';
var GET_NOTICIAS = 'SELECT c.Titulo, c.Descripcion, n.Contenido FROM Contenido c INNER JOIN Noticia n ON (c.Idcontenido = n.Contenido_idcontenido)';
var GET_NOTICIA_ID = 'SELECT c.Titulo, c.Descripcion, n.Contenido FROM Contenido c INNER JOIN Noticia n ON (c.Idcontenido = n.Contenido_idContenido) WHERE n.Contenido_idContenido=?';
var GET_PERMISOS_USERNAME = 'SELECT t.Nombre, p.Escritura, p.Lectura FROM Permisos p INNER JOIN Tag t ON (p.Tag_idTag = t.idTag) WHERE Cuenta_username=?';
var GET_TAGS = 'SELECT * FROM Tag';
var CHECK_USER_AND_PASS = 'SELECT 1 FROM Cuenta WHERE username = ? AND password = ?';
var INSERT_INTO_COMENTARIO = 'INSERT INTO Comentario (Cuenta_username, Noticia_contenido_idcontenido, Texto_comentario) VALUES (?, ?, ?)';
var INSERT_INTO_CONTENIDO = 'INSERT INTO CONTENIDO (Idcontenido, Titulo, Descripcion, Tag_idtag, Cuenta_username) VALUES (0, ?, ?, ?, ?)';
var INSERT_INTO_NOTICIA = 'INSERT INTO NOTICIA (Contenido_idcontenido, Contenido) VALUES (?, ?)';
var INSERT_INTO_PERMISOS = 'INSERT INTO Permisos (Cuenta_username, Tag_idtag, Escritura, Lectura) VALUES (?, ?, ?, ?)';
var INSERT_INTO_TAG = 'INSERT INTO Tag (Idtag, Nombre) VALUES (0, ?)';
var INSERT_INTO_USER = 'INSERT INTO Cuenta (Username, Password, Admin, Mail, Fecha_nacimiento, Telefono, Nombre, Apellido, Direccion) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);';

// ------------------- VARIABLES ------------------- //
var app = express();
var port = 3000;

// ------------------- PARSER PARA MENSAJES HTML ------------------- //
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false 
}));

// ------------------- CONEXION CON MYSQL------------------- //
var con = mysql.createConnection({
	host: 'localhost',
	user: 'guidomodarelli',
	password: 'Librocorto13.-,',
	insecureAuth : true,
	database: 'talleragiles'
});

con.connect(function(error) {
	if (error) throw error;
});

// ------------------- METODOS DE LA API ------------------- //
app.get('/', function (req, res) {
	return res.send({ error: true, message: 'Root' })
})

app.get('/users', function (req, res) {
	con.query(GET_CUENTA, function (error, result) {
		if (error) {
			console.log('There was an error while obtaining the users.');
			return res.status(400).send({ error: true, message: 'There was an error while obtaining the users.' });
		};
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
		if (error) {
			console.log('There was an error while obtaining the user.');
			return res.status(400).send({ error: true, message: 'Error in parameters. Please provide a correct username.' });
		};
		return res.send({ error: false, data: results, message: 'User listed.' });
	});
});

app.get('/tags', function(req, res) {
	con.query(GET_TAGS, function (error, result) {
		if (error) {
			console.log('There was an error while obtaining tags.');
			return res.status(400).send({ error: true, message: 'There was an error while obtaining tags.' });
		};
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

	con.query(GET_PERMISOS_USERNAME, username, function(error, result) {
		if (error) {
			console.log(error);
			console.log('There was an error while obtaining user permissions.');
			return res.status(400).send({ error: true, message: 'Error in parameters. Please provide a correct username.' });
		};
		if (result.length != 0) {
			return res.send({ error: false, data: result, message: 'Permissions list.' });
		}    
	});
})

app.get('/noticias', function(req, res) {
	con.query(GET_NOTICIAS, function(error, results, fields) {
		if (error) {
			console.log('There was an error while getting the news.');
			return res.status(400).send({ error: true, message: 'There was an error while getting the news.' });
		};
		return res.send({ error: false, data: results, message: 'News list.' });
	});
})

app.get('/noticia/:id', function(req, res) {

	var id = req.params.id;

	if (!id) {
		return res.status(400).send({ error: true, message: 'Error in parameters. Please provide correct news id.' });
	}

	con.query(GET_NOTICIA_ID, id, function(error, results, fields) {
		if (error) {
			console.log('There was an error while getting a story.');
			return res.status(400).send({ error: true, message: 'Error in parameters. Please provide correct news id.' });
		};
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
			console.log(user);
			if (error) {
				console.log('There was an error while inserting the user into the database.');
				console.log(error);
				return res.status(400).send({ error: true, message: 'Error in body. Please provide a correct user.' });
			};
			return res.send({ error: false, data: results, message: 'New user has been created successfully.' });
    });
})

app.post('/noticia', function(req,res) {

	var noticia = req.body;

    if (!noticia) {
			return res.status(400).send({ error: true, message: 'Error in body. Please provide correct news.' });
	}
	
	con.query(INSERT_INTO_CONTENIDO, [noticia.titulo, noticia.descripcion, noticia.Tag_idTag, noticia.Cuenta_username], 
	function(error, results, fields) {
		if (error) {
			console.log('There was an error while inserting news into the database.');
			console.log(error);
			return res.status(400).send({ error: true, message: 'Error in body. Please provide correct news.' });
		}

		var last_id = results.insertId;

		con.query(INSERT_INTO_NOTICIA, [last_id, noticia.contenido], function(error, results, fields) {
			if (error) {
				console.log('There was an error while inserting news into the database.');
				con.query('DELETE FROM CONTENIDO WHERE idContenido=?', [last_id], function(error, results, fields) { //Si hay un error al insertar la noticia, hay que eliminiar el contenido insertado previamente
					if (error) {
						console.log('There was an error while deleting a temporary content in the database.');
						return res.status(400).send({ error: true, message: 'Error in body while inserting news. Please provide content.' });
					};
					return res.send({ error: false, data: results, message: 'The content has been deleted successfully.' });
				})
				return res.status(400).send({ error: true, message: 'Error in body. Please provide correct news.' });
			}

			return res.send({ error: false, data: results, message: 'News successfully uploaded.' });
		});
	});
})

app.post('/noticia/:id/comentario', function(req, res) {

    var id = req.params.id;

    if (!id) {
			return res.status(400).send({ error: true, message: 'Error in parameters. Please provide correct news id.' });
    }

    con.query(INSERT_INTO_COMENTARIO, [req.body.username, id, req.body.contenido], function(error, results, fields) {
			if (error) {
				console.log('There was an error during the insertion of a comment into a news item in the database.');
				return res.status(400).send({ error: true, message: 'Error in parameters. Please provide correct news id.' });
			};
			return res.send({ error: false, data: results, message: 'The news ' + id  + ' was successfully commented.' });
	});
	
})

app.post('/tag', function(req, res) {

	var tag = req.body;

	if (!tag) {
		return res.status(400).send({ error: true, message: 'Error in body. Please provide correct label.' });
	}

	con.query(INSERT_INTO_TAG,tag.nombre, function(error, results, fields) {
		if (error) {
			console.log('There was an error while inserting a tag into the database.');
			return res.status(400).send({ error: true, message: 'Error in body. Please provide correct label.' });
		};
		return res.send({ error: false, data: results, message: 'New label has been created successfully.' });
	});
})

app.post('/user/:username/permisos', function(req, res) {

	var username = req.params.username;
	var permisos = req.body;

	if (!permisos) {
		return res.status(400).send({ error: true, message: 'Error in parameters. Please provide a correct username.' });
	}

	con.query(INSERT_INTO_PERMISOS, [username,permisos.tag,permisos.esc,permisos.lect], function(error, results, fields) {
		if (error) {
			console.log("There was an error during the insertion of a user's permissions in the database.");
			return res.status(400).send({ error: true, message: 'Error in parameters. Please provide a correct username.' });
		};
		return res.send({ error: false, data: results, message: 'The user ' + username + ' was successfully added permissions.' });
	});
})

app.delete('/user', function(req, res) {
	
	var user = req.body;

	if (!user) {
		return res.status(400).send({ error: true, message: 'Error in body. Please provide user.' });
	}

	console.log(user.nombre);
	
	con.query(DELETE_CUENTA_USERNAME, user.nombre, function(error, results, fields) {
		if (error) {
			console.log('There was an error while deleting a user in the database.');
			return res.status(400).send({ error: true, message: 'Error in body. Please provide user.' });
		};
		return res.send({ error: false, data: results, message: 'The user has been deleted successfully.' });
	});
})

app.post('/login', function(request, response) {

	var username = request.body.username;
	var password = request.body.password;

	if (username && password) {
		con.query(CHECK_USER_AND_PASS, [username, password], function(error, results, fields) {
			if (results.length > 0) {
				response.send('Bienvenido '+username);
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

// ------------------- LEVANTAR SERVIDOR ------------------- //

app.listen(port, function () {
	console.log('Node app is running on port ' + port);
});
