import React, { Component } from 'react';
import { Text, View } from 'react-native';
import NoticiaView from './views/NoticiaView.js';
import Noticia from './components/Noticia.js';

export default class Ejemplo1 extends Component {
  
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <NoticiaView noticia = {new Noticia("1","Primera noticia","asjdghasdhgasdgh","crimen","yo","hoy")} />
      </View>
    );
  }
}
