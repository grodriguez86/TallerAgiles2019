import React, {Component} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  View
} from 'react-native';
//import Constants from 'expo-constants';
import Noticia from '../components/Noticia.js';

function Item({ noticia }) {
  return (
    <View>
      <Text style={styles.title}>{noticia.titulo}</Text>
      <Text style={styles.cuerpo}>{noticia.cuerpo}</Text>
      <Text style={styles.autor}>{noticia.autor}</Text>
      <Text style={styles.autor}>{noticia.fecha}</Text>
    </View>
  );
}

export default class FlatListNoticia extends Component {
  //const [selected, setSelected] = React.useState(new Map());

 /* const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
    },
    [selected],
  );*/
  render(){
  /*return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item
            id={item.idNoticia}
            title={item.titulo}
            cuerpo={item.cuerpo}
            autor={item.autor}
            fecha={item.fecha}
          />
        )}
        keyExtractor={item => item.idNoticia}
      />
    </SafeAreaView>
  );*/
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
   container: {
     flex: 1,
     //marginTop: Constants.statusBarHeight,
     paddingTop: 22
   },
   item: {
     backgroundColor: '#f9c2ff',
     padding: 20,
     marginVertical: 8,
     marginHorizontal: 16,
   },
   title: {
     fontSize: 32,
   },
   cuerpo: {
     fontSize: 20,
     alignItems: 'center',
     justifyContent: 'center',
   },
   autor: {
     fontSize: 12,
     textAlign:'right',
  }
});
