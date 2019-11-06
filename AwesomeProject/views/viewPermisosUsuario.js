import React, {Component} from 'react';
import { StyleSheet, Text, View, Picker, Button, Alert } from 'react-native';
import user from '../components/usuario.js';
import PickerUsuario from '../components/pickerUsuario.js';
 
export default class viewPermisosUsuario extends Component{
  static navigationOptions = {
    headerTitleStyle: { 
        textAlign:"center", 
        flex:1,
        marginLeft:-45,
    },
    title: 'Ver permisos de usuario',
    };
  constructor(props){
    super(props);
    
    this.actualizarUsuario = this.actualizarUsuario.bind(this);
  }
  
  state = {
    nombreUsuario: 'Sin usuario'
  };

  actualizarUsuario(nombreUsuario){
    this.setState({nombreUsuario})
  }
  
  render(){

    /*Esto esta hardcodeado pero luego va a ser una lista dada por el back con todos los usuario del sistema */
    const usuarios = [new user('a','a','a','b','b','b'),
    new user('b','a','a','c','c','c'),
    new user('c','a','a','b','b','b'),
    new user('d','a','a','b','b','b'),
    new user('e','a','a','b','b','b'),
    new user('aa','a','a','b','b','b'),
    new user('ab','a','a','c','c','c'),
    new user('ac','a','a','b','b','b'),
    new user('ad','a','a','b','b','b'),
    new user('ae','a','a','b','b','b'),
    new user('ba','a','a','b','b','b'),
    new user('bb','a','a','c','c','c'),
    new user('bc','a','a','b','b','b'),
    new user('bd','a','a','b','b','b'),
    new user('be','a','a','b','b','b'),
    new user('ca','a','a','b','b','b'),
    new user('cb','a','a','c','c','c'),
    new user('cc','a','a','b','b','b'),
    new user('cd','a','a','b','b','b'),
    new user('ce','a','a','b','b','b')]


    return(
    <View style={styles.container}>
      <View style={styles.titulo}>{/*titulo*/}
      <View style={{flex:1}}>
          <View>
            <Text style={{fontSize:26, color:'white', textAlign:'center', fontWeight: 'bold', paddingBottom:5}}>Editar permisos a usuarios</Text>
          </View>
        </View>
      </View>
      <View style={styles.informacion}>{/*contenido gral donde se elige el usuario y se cambian dinamicamente los permisos del usuario*/}
        <View style={{flexDirection: 'row', height : 100, backgroundColor: '#eeeeee', alignItems: 'center'}}>{/*usuario row flex 1*/}
          <View style={{flex: 1}}>
            <View style={{flexDirection: 'row'}}>
            <Text style={[styles.textStyle2,{fontSize:16,textAlignVertical:'center'}]}>Seleccione un usuario:</Text>
            <PickerUsuario usuarios={usuarios} padre={this}/>
            </View>
            <View style={{height:60}}>          
              <Text style={[styles.textStyle2,{fontSize:20,textAlignVertical:'center'}]}>{'Usuario:' + this.state.nombreUsuario}</Text>
            </View>
          </View>
        </View>
        <View style={{flex:1}}>{/*view de los permisos con flex 1, habria que hacer un componente de list view
            donde se le pasa la prop de lista de permisos asociados a ese usuario*/}
        </View>
      </View>
      <View style={styles.botones}>{/*botones atra*/}
        <View style={{marginHorizontal:15, flexDirection:'row', flex:1, justifyContent:'flex-start'}}>{/*Esta por fila*/}
            <Button title="Atras" 
             color='#072F46'
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
  textStyle2:{
    flex:1,
    color :'#072F46',
    textAlign:'left',
    fontWeight: 'bold',
    fontSize:20,
    margin: 10,
  }
});
