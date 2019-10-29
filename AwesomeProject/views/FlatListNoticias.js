import React, {Component} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Noticia from '../components/Noticia.js';

function Item({ noticia }) {
  return (
    <View style={styles.itemNoticia}>
      <Text style={styles.textTitulo}>{noticia.Titulo}</Text>
      <Text style={styles.textStyleNoticia}>{noticia.Contenido.substring(0,100)}</Text>
    </View>
  );
}

export default class FlatListNoticia extends Component {
  render(){
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={this.props.noticias}
        renderItem={({ item }) => <Item noticia={item} />}
        keyExtractor={item => item.idNoticia}
      />
    </SafeAreaView>
  );
  }
}


  const styles = StyleSheet.create({
  itemNoticia:{
    flex: 1,
    marginVertical: 10,
    backgroundColor: '#eeeeee',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
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
    backgroundColor: '#072F46',
    textAlign:'center', 
    fontWeight: 'bold', 
    paddingBottom:5,
  },
  textDate: {
    fontSize:13,
    color:'#072F46',
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
    marginRight: 20,
  },
  textStyleAutor: {
    flex: 1,
    color:'#072F46',
    textAlign:'right',
    fontSize:16,
    fontStyle: 'italic'
  }
});
