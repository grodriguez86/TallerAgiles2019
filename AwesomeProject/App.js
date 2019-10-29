import React, { Component } from 'react';
import { Text, View } from 'react-native';
import NoticiaView from './views/NoticiaView.js';
import Noticia from './components/Noticia.js';
import FlatListNoticia from './views/FlatListNoticias.js';

const noticias = [ new Noticia("1","Primera noticia","cuerpo1","crimen","yo","hoy"), new Noticia("2","Segunda noticia","cuerpo2","politica","vos","ayer")];

const DATA = [ new Noticia("1","Primera noticia","Este es el cuerpo 1 de la noticia 1 , donde paso tal y tal cosa blablabla","crimen","yo","hoy"), new Noticia("2","Segunda noticia","cuerpo2","politica","vos","ayer"), 
new Noticia("3","3 noticia","cuerpo3","crimen","yo","hoy"), new Noticia("4","4 noticia","cuerpo4","crimen","yo","hoy"),
new Noticia("5","5 noticia","cuerpo5","crimen","yo","hoy"),
new Noticia("6","6 noticia","cuerpo6","crimen","yo","hoy"), new Noticia("7","7 noticia","cuerpo7","crimen","yo","hoy"),
new Noticia("8","8 noticia","cuerpo8","crimen","yo","hoy"), new Noticia("9","9 noticia","cuerpo9","crimen","yo","hoy"),
new Noticia("10","10 noticia","cuerpo10","crimen","yo","hoy"), new Noticia("11","11 noticia","cuerpo11","crimen","yo","hoy")];

/*const fetch = require("node-fetch");
const data3 = fetch('http://172.29.29.54:3000/noticias',{
  method: 'get',
  headers: {
    Accept: 'application/json',
    'Content-Type':'application/json'}}
    ).then(function(response){
      return response.json();
    })
*/

export default class Ejemplo1 extends Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('http://172.29.29.54:3000/noticias',{
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type':'application/json'}})
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.data,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }
  //<NoticiaView noticia = {new Noticia("1","Primera noticia","asjdghasdhgasdgh","crimen","yo","hoy")} /> <FlatListNoticia noticias={data2}/>
  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <Text>{'Cargando'}</Text>
        </View>
      )
    }

    return (
      <View style={{ flex: 1 }}>
        <FlatListNoticia noticias={this.state.dataSource}/>
      </View>
    );
  }
}
