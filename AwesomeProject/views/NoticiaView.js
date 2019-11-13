import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, Alert } from 'react-native';
import Noticia from '../components/Noticia.js';

export default class NoticiaView extends Component{

  render(){  
    return(
      
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.headerTitulo}>

              <Text style={styles.textDate}>{/*this.props.noticia.fecha*/}</Text>

              <Text style={styles.textTitulo}>{this.props.noticia.titulo}</Text>         

          </View>
          <View style={styles.informacion}>

            <Text style={styles.textStyleNoticia}>{this.props.noticia.contenido}</Text>
        
            <Text style={styles.textStyleAutor}>{/*this.props.noticia.autor*/}</Text>

          </View>
        </ScrollView>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#eeeeee',
    alignItems: 'stretch',
  },
  headerTitulo: {
    flex: 1,
    backgroundColor: '#072F46',
    alignItems: 'stretch',
  },
  textTitulo: {
    flex: 9,
    fontSize:26, 
    color:'white', 
    textAlign:'center', 
    fontWeight: 'bold', 
    paddingBottom:5,
  },
  textDate: {
    fontSize:13,
    color:'white',
    textAlign:'right',
    fontWeight: 'bold',
    paddingTop: 20,
  },
  botones: {
    backgroundColor: '#eeeeee',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 80,
  },
  informacion: {
    flex: 7,
    justifyContent: 'space-between',
    backgroundColor: '#eeeeee',
  },
  grupo: {
    height:100,
    alignItems: 'stretch',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  columnaFlex1:{
    flex:1,
  },
  columna: {
    flex: 1,
    height:100,
    alignItems: 'center',
  },
  textStyle:{
    flex:1,
    //flexDirection: 'row',
    backgroundColor: 'white',
    textAlign:'center',
    //marginHorizontal: 10,
    //borderWidth: 1,
    //borderRadius:5,
  },
  textStyleNoticia:{
    flex: 9,
    color:'#072F46',
    textAlign:'justify',
    fontSize:18,
  },
  textStyleAutor: {
    flex: 1,
    color:'#072F46',
    textAlign:'right',
    fontSize:16,
    fontStyle: 'italic'
  }
});
