-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2019-10-02 17:43:48.955

-- tables
-- Table: Articulo_Encuesta
CREATE TABLE Articulo_Encuesta (
    Encuesta_Contenido_idContenido int  NOT NULL,
    idArticulo int  NOT NULL,
    opcion varchar(30)  NOT NULL,
    contador int  NOT NULL,
    CONSTRAINT Articulo_Encuesta_pk PRIMARY KEY (Encuesta_Contenido_idContenido,idArticulo)
);

-- Table: Comentario
CREATE TABLE Comentario (
    Cuenta_username varchar(25)  NOT NULL,
    Noticia_Contenido_idContenido int  NOT NULL,
    Texto_Comentario text  NOT NULL,
    CONSTRAINT Comentario_pk PRIMARY KEY (Cuenta_username,Noticia_Contenido_idContenido)
);

-- Table: Contenido
CREATE TABLE Contenido (
    idContenido int  NOT NULL,
    titulo varchar(50)  NOT NULL,
    descripcion varchar(200)  NOT NULL,
    Tag_idTag int  NOT NULL,
    Cuenta_username varchar(25)  NOT NULL,
    CONSTRAINT Contenido_pk PRIMARY KEY (idContenido)
);

-- Table: Cuenta
CREATE TABLE Cuenta (
    username varchar(25)  NOT NULL,
    password varchar(15)  NOT NULL,
    admin boolean  NOT NULL,
    mail varchar(30)  NOT NULL,
    fecha_nacimiento date  NOT NULL,
    telefono varchar(15)  NOT NULL,
    nombre varchar(25)  NOT NULL,
    apellido varchar(25)  NOT NULL,
    direccion varchar(100)  NOT NULL,
    CONSTRAINT Cuenta_pk PRIMARY KEY (username)
);

-- Table: Encuesta
CREATE TABLE Encuesta (
    Contenido_idContenido int  NOT NULL,
    pregunta varchar(100)  NOT NULL,
    CONSTRAINT Encuesta_pk PRIMARY KEY (Contenido_idContenido)
);

-- Table: MeGusta
CREATE TABLE MeGusta (
    Cuenta_username varchar(25)  NOT NULL,
    Noticia_Contenido_idContenido int  NOT NULL,
    CONSTRAINT MeGusta_pk PRIMARY KEY (Cuenta_username,Noticia_Contenido_idContenido)
);

-- Table: Noticia
CREATE TABLE Noticia (
    Contenido_idContenido int  NOT NULL,
    contenido text  NOT NULL,
    CONSTRAINT Noticia_pk PRIMARY KEY (Contenido_idContenido)
);

-- Table: Permisos
CREATE TABLE Permisos (
    Cuenta_username varchar(25)  NOT NULL,
    Tag_idTag int  NOT NULL,
    escritura boolean  NOT NULL,
    lectura boolean  NOT NULL,
    CONSTRAINT Permisos_pk PRIMARY KEY (Cuenta_username,Tag_idTag)
);

-- Table: Suscripcion
CREATE TABLE Suscripcion (
    Cuenta_username varchar(25)  NOT NULL,
    Tag_idTag int  NOT NULL,
    CONSTRAINT Suscripcion_pk PRIMARY KEY (Cuenta_username,Tag_idTag)
);

-- Table: Tag
CREATE TABLE Tag (
    idTag int  NOT NULL,
    nombre varchar(25)  NOT NULL,
    CONSTRAINT Tag_pk PRIMARY KEY (idTag)
);

-- foreign keys
-- Reference: Articulo_Encuesta_Encuesta (table: Articulo_Encuesta)
ALTER TABLE Articulo_Encuesta ADD CONSTRAINT Articulo_Encuesta_Encuesta
    FOREIGN KEY (Encuesta_Contenido_idContenido)
    REFERENCES Encuesta (Contenido_idContenido)  
;

-- Reference: Comentario_Cuenta (table: Comentario)
ALTER TABLE Comentario ADD CONSTRAINT Comentario_Cuenta
    FOREIGN KEY (Cuenta_username)
    REFERENCES Cuenta (username)  
;

-- Reference: Comentario_Noticia (table: Comentario)
ALTER TABLE Comentario ADD CONSTRAINT Comentario_Noticia
    FOREIGN KEY (Noticia_Contenido_idContenido)
    REFERENCES Noticia (Contenido_idContenido)  
;

-- Reference: Contenido_Cuenta (table: Contenido)
ALTER TABLE Contenido ADD CONSTRAINT Contenido_Cuenta
    FOREIGN KEY (Cuenta_username)
    REFERENCES Cuenta (username)  
;

-- Reference: Contenido_Tag (table: Contenido)
ALTER TABLE Contenido ADD CONSTRAINT Contenido_Tag
    FOREIGN KEY (Tag_idTag)
    REFERENCES Tag (idTag)  
;

-- Reference: Encuesta_Contenido (table: Encuesta)
ALTER TABLE Encuesta ADD CONSTRAINT Encuesta_Contenido
    FOREIGN KEY (Contenido_idContenido)
    REFERENCES Contenido (idContenido)  
;

-- Reference: MeGusta_Cuenta (table: MeGusta)
ALTER TABLE MeGusta ADD CONSTRAINT MeGusta_Cuenta
    FOREIGN KEY (Cuenta_username)
    REFERENCES Cuenta (username)  
;

-- Reference: MeGusta_Noticia (table: MeGusta)
ALTER TABLE MeGusta ADD CONSTRAINT MeGusta_Noticia
    FOREIGN KEY (Noticia_Contenido_idContenido)
    REFERENCES Noticia (Contenido_idContenido)  
;

-- Reference: Noticia_Contenido (table: Noticia)
ALTER TABLE Noticia ADD CONSTRAINT Noticia_Contenido
    FOREIGN KEY (Contenido_idContenido)
    REFERENCES Contenido (idContenido)
;

-- Reference: Permisos_Cuenta (table: Permisos)
ALTER TABLE Permisos ADD CONSTRAINT Permisos_Cuenta
    FOREIGN KEY (Cuenta_username)
    REFERENCES Cuenta (username)
;

-- Reference: Permisos_Tag (table: Permisos)
ALTER TABLE Permisos ADD CONSTRAINT Permisos_Tag
    FOREIGN KEY (Tag_idTag)
    REFERENCES Tag (idTag)
;

-- Reference: Suscripcion_Cuenta (table: Suscripcion)
ALTER TABLE Suscripcion ADD CONSTRAINT Suscripcion_Cuenta
    FOREIGN KEY (Cuenta_username)
    REFERENCES Cuenta (username)
;

-- Reference: Suscripcion_Tag (table: Suscripcion)
ALTER TABLE Suscripcion ADD CONSTRAINT Suscripcion_Tag
    FOREIGN KEY (Tag_idTag)
    REFERENCES Tag (idTag)  
;

