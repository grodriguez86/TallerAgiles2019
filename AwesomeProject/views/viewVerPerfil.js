import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert,FlatList,SafeAreaView } from 'react-native';
import user from './components/usuario.js';
{/*FALTA PASSWORD - FECHA NAC*/ }
var userToShow;
var userTags:[];
function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )}
export default class viewCrearUsuario extends Component{

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
              <Text style={styles.textStyle2}>Nombre sde usuario:</Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <Text style={styles.name}>{userToShow.usuario}</Text>
            </View>
          </View>
        </View>
        <View style={styles.grupo}>{/*justifyContent 'row' -- flex 1 */}
          <View style={styles.columna}>{/*Text y textinput -- flex 1*/}
          <View style={{flexDirection:'row'}}>
              <Text style={styles.textStyle2}>Nombre:</Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <Text style={styles.name}>{userToShow.nombre}</Text>
            </View>
          </View>
        </View>
        <View style={styles.grupo}>{/*justifyContent 'row' -- flex 1 */}
          <View style={styles.columna}>{/*Text y textinput -- flex 1*/}
          <View style={{flexDirection:'row'}}>
              <Text style={styles.textStyle2}>Apellido:</Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <Text style={styles.name}>{userToShow.apellido}</Text>
            </View>
          </View>
        </View>
        <View style={styles.grupo}>{/*justifyContent 'row' -- flex 1 */}
          <View style={styles.columna}>{/*Text y textinput -- flex 1*/}
          <View style={{flexDirection:'row'}}>
              <Text style={styles.textStyle2}>Email:</Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <Text style={styles.name}>{userToShow.email}</Text>
            </View>
          </View>
        </View>
        <View style={styles.grupo}>{/*justifyContent 'row' -- flex 1 */}
          <View style={styles.columna}>{/*Text y textinput -- flex 1*/}
          <View style={{flexDirection:'row'}}>
              <Text style={styles.textStyle2}>Direccion:</Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <Text style={styles.name}>{userToShow.direccion}</Text>
            </View>
          </View>
        </View>
        <View style={styles.grupo}>{/*justifyContent 'row' -- flex 1 */}
          <View style={styles.columna}>{/*Text y textinput -- flex 1*/}
          <View style={{flexDirection:'row'}}>
              <Text style={styles.textStyle2}>Fecha de nacimiento:</Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <Text style={styles.name}>{userToShow.fechanac}</Text>
            </View>
          </View>
        </View>
        <View style={styles.grupo}>{/*justifyContent 'row' -- flex 1 */}
            <View style={styles.columna}>{/*Text y textinput -- flex 1*/}
            <View style={{flexDirection:'row'}}>
              <Text style={styles.textStyle2}>Telefono:</Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <Text style={styles.name}>{userToShow.telefono}</Text>
            </View>
            </View>
        </View>
        <View style={styles.grupo}>{/*justifyContent 'row' -- flex 1 */}

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
    height: 100,
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