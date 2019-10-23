import React, { Component } from 'react';
import { Text, View } from 'react-native';
import NoticiaView from './views/NoticiaView.js';
import Noticia from './components/Noticia.js';
import FlatListNoticia from './views/FlatListNoticias.js';

const noticias = [ new Noticia("1","Primera noticia","cuerpo1","crimen","yo","hoy"), new Noticia("2","Segunda noticia","cuerpo2","politica","vos","ayer")];

const DATA = [ new Noticia("1","Primera noticia","cuerpo1","crimen","yo","hoy"), new Noticia("2","Segunda noticia","cuerpo2","politica","vos","ayer"), 
new Noticia("3","3 noticia","cuerpo3","crimen","yo","hoy"), new Noticia("4","4 noticia","cuerpo4","crimen","yo","hoy"),
new Noticia("5","5 noticia","cuerpo5","crimen","yo","hoy"),
new Noticia("6","6 noticia","cuerpo6","crimen","yo","hoy"), new Noticia("7","7 noticia","cuerpo7","crimen","yo","hoy"),
new Noticia("8","8 noticia","cuerpo8","crimen","yo","hoy"), new Noticia("9","9 noticia","cuerpo9","crimen","yo","hoy"),
new Noticia("10","10 noticia","cuerpo10","crimen","yo","hoy"), new Noticia("11","11 noticia","cuerpo11","crimen","yo","hoy")];

export default class Ejemplo1 extends Component {
  //<NoticiaView noticia = {new Noticia("1","Primera noticia","asjdghasdhgasdgh","crimen","yo","hoy")} />
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <FlatListNoticia noticias={DATA}/>
      </View>
    );
  }
}
