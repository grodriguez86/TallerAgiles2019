import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  Alert
} from 'react-native';
import user from './components/usuario.js';
var userToShow;
export default class Profile extends Component {
  
  constructor(usuario){
    userToShow=usuario;
  super()
	}
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <View style={styles.header2}></View>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{userToShow.usuario}</Text>
              <Text style={styles.field}>Nombre:</Text>
              <Text style={styles.information}>{userToShow.nombre}</Text>
              <Text style={styles.field}>Apellido:</Text>
              <Text style={styles.information}>{userToShow.apellido}</Text>
			  <Text style={styles.field}>Fecha nacimiento:</Text>
              <Text style={styles.information}>{userToShow.fechanac}</Text>
              <Text style={styles.field}>Direcion:</Text>
              <Text style={styles.information}>{userToShow.direccion}</Text>            
              <Text style={styles.field}>Telefono:</Text>
              <Text style={styles.information}>{userToShow.telefono}</Text>
              <Text style={styles.field}>Email:</Text>
              <Text style={styles.information}>{userToShow.email}</Text>
              <Text style={styles.field}>Tags:</Text>
              <Text style={styles.information}>{userToShow.tags}</Text>
              <Text style={styles.information}></Text>
         
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00333F",
    height:100,
  },
  container:{
    backgroundColor: '#eeeeee',
    height:10000,
  },
  body:{
    marginTop:0,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
    
  },
  name:{
    marginTop:30,
    fontSize:30,
    color: "black",
    fontWeight: "600"
  },
  field:{
    marginLeft: -10,
    marginTop: 15,
    alignSelf: 'flex-start',
    //marginTop:30,
    fontSize:25,
    color: '#072F46',
    fontWeight: "600"
  },
  information:{
    marginTop:10,
    fontSize:20,
    color: '#072F46',
    fontWeight: "600"
  },
}); 