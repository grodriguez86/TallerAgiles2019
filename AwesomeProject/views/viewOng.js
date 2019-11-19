import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
{/*FALTA PASSWORD - FECHA NAC*/ }
var userToShow;
var tags;
var flex = 1;
var flexDirection = 'column';
export default class viewCrearUsuario extends Component{
    static navigationOptions = {
    headerTitleStyle: { 
        textAlign:"center", 
        flex:1,
        marginLeft:-45,
    },
    title: 'Ver informacion ONG',
    };
  constructor(usuario){
    super()
    userToShow=usuario;
  }
  
  render(){
    return(
      <View style={{backgroundColor: '#FFFFFF'}}>
      <View style={{flexDirection:flexDirection}}>
        <Text style={{fontSize:18, textAlign:'left', fontWeight: 'bold', paddingBottom:5}}>
          Para el bienestar común del grupo como de la comunidad.
          La ONG se originó por un grupo de vecinos convencidos de que el trabajo colectivo es mucho más importante que la suma de sus partes.
          Tiene por finalidad las siguientes acciones:
        </Text>
      </View>
      <View style={{flexDirection:flexDirection}}>
        <Text style={{fontSize:18, textAlign:'left', fontWeight: 'bold', paddingBottom:5}}> 
           • Desarrollar un ambiente de cordialidad y solidaridad entre sus asociados y proponer el mejoramiento intelectual y cultural de los mismos.
        </Text>
      </View>
      <View style={{flexDirection:flexDirection}}>
        <Text style={{fontSize:18, textAlign:'left', fontWeight: 'bold', paddingBottom:5}}> 
           • Representar y defender los intereses y derechos de sus asociados.
        </Text>
      </View>
      <View style={{flexDirection:flexDirection}}>
        <Text style={{fontSize:18, textAlign:'left', fontWeight: 'bold', paddingBottom:5}}> 
           • Promover, defender y difundir las incumbencias de los asociados.
        </Text>
      </View>
      <View style={{flexDirection:flexDirection}}>
        <Text style={{fontSize:18, textAlign:'left', fontWeight: 'bold', paddingBottom:5}}> 
           • Promover principios de solidaridad a través de la organización y constitución de servicios sociales y recreativos.
        </Text>
      </View>
      <View style={{flexDirection:flexDirection}}>
        <Text style={{fontSize:18, textAlign:'left', fontWeight: 'bold', paddingBottom:5}}> 
           • Colaborar con el cuidado y la preservación del medio ambiente.
        </Text>
      </View>
      <View style={{flexDirection:flexDirection}}>
        <Text style={{fontSize:18, textAlign:'left', fontWeight: 'bold', paddingBottom:5}}> 
           • Todas las actividades a desarrollar serán sin fines de lucro.
        </Text>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    backgroundColor: '#072F46',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    height: 0,
  },
  botones: {
    backgroundColor: '#eeeeee',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 80,
  },
  informacion: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#eeeeee',
  },
  grupo: {
    height:100,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  columna: {
    flex: 1,
    height:100,
    alignItems: 'center',
  },
  textStyle2:{
    flex:1,
    color :'#072F46',
    textAlign:'left',
    fontWeight: 'bold',
    fontSize:16,
    margin: 10,
  }
}); 
