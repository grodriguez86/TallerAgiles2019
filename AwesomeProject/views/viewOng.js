import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
{/*FALTA PASSWORD - FECHA NAC*/ }
var userToShow;
var tags;
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
    <View style={styles.container}>
      <View style={styles.titulo}>{/*titulo*/}
      <View style={{flex:1}}>
          <View>
            <Text style={{fontSize:26, color:'white', textAlign:'center', fontWeight: 'bold', paddingBottom:5}}>Ver perfil</Text>
          </View>
        </View>
      </View>
      <View style={styles.informacion}>{/*contenido de form -- flex 1*/}
        <View style={styles.grupo}>{/*justifyContent 'row' -- flex 1 */}
          <View style={styles.columna}>{/*Text y textinput -- flex 1*/}
            <View style={{flexDirection:'row'}}>
              <Text style={styles.textStyle2}></Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <Text style={styles.name}>para el bienestar común del grupo como de la comunidad.
La ONG se originó por un grupo de vecinos convencidos de que el trabajo colectivo es mucho más importante que la suma de sus partes.
Tiene por finalidad las siguientes acciones:
   • Desarrollar un ambiente de cordialidad y solidaridad entre sus asociados y proponer el mejoramiento intelectual y cultural de los mismos.
   • Representar y defender los intereses y derechos de sus asociados.
   • Promover, defender y difundir las incumbencias de los asociados.
   • Promover principios de solidaridad a través de la organización y constitución de servicios sociales y recreativos.
   • Colaborar con el cuidado y la preservación del medio ambiente.
   • Todas las actividades a desarrollar serán sin fines de lucro.</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.botones}>{/*boton editar perfil*/}
        <View style={{marginHorizontal:15, flexDirection:'row', flex:1, justifyContent:'center'}}>{/*Esta por fila*/}
            <Button title="Editar perfil" 
             color='#072F46'
             onPress = {() => Alert.alert('Call edit profile')}
            />
          </View>
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