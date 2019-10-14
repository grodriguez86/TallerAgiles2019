import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import user from './components/usuario.js';

export default class viewCrearUsuario extends Component{

  constructor(props){
    super(props);
  
    this.actualizarUsuario = this.actualizarUsuario.bind(this);
    this.actualizarNombre = this.actualizarNombre.bind(this);
    this.actualizarApellido = this.actualizarApellido.bind(this);
    this.actualizarEmail = this.actualizarEmail.bind(this);
    this.actualizarDireccion = this.actualizarDireccion.bind(this);
    this.actualizarTelefono = this.actualizarTelefono.bind(this);
    
    this.crearUsuario = this.crearUsuario.bind(this);
  }

  state = {nombreUsuario: '',
  nombrePersona: '',
  apellidoPersona: '',
  emailPersona: '',
  direccionPersona: '',
  telefonoPersona: ''};


  actualizarUsuario(nombreUsuario){this.setState({nombreUsuario})}
  actualizarNombre(nombrePersona){this.setState({nombrePersona})}
  actualizarApellido(apellidoPersona){this.setState({apellidoPersona})}
  actualizarEmail(emailPersona){this.setState({emailPersona})}
  actualizarDireccion(direccionPersona){this.setState({direccionPersona})}
  actualizarTelefono(telefonoPersona){this.setState({telefonoPersona})}

  crearUsuario(){
    if(this.state.nombreUsuario == '' || this.state.nombrePersona=='' || this.state.apellidoPersona=='' || this.state.direccionPersona=='' || this.state.telefonoPersona=='' || this.state.emailPersona==''){
      Alert.alert('Ningun campo puede quedar vacio')
    }else{
      usuarioNuevo = new user(this.state.nombreUsuario, 
      this.state.nombrePersona, 
      this.state.apellidoPersona,
      this.state.direccionPersona,
      this.state.telefonoPersona,
      this.state.emailPersona);
      Alert.alert('Nuevo usuario creado')
    }
  }
  
  render(){
    return(
    <View style={styles.container}>
      <View style={styles.titulo}>{/*titulo*/}
      <View style={{flex:1}}>
          <View>
            <Text style={{fontSize:26, color:'white', textAlign:'center', fontWeight: 'bold', paddingBottom:5}}>Agregar usuario</Text>
          </View>
        </View>
      </View>
      <View style={styles.informacion}>{/*contenido de form -- flex 1*/}
        <View style={styles.grupo}>{/*justifyContent 'row' -- flex 1 */}
          <View style={styles.columna}>{/*Text y textinput -- flex 1*/}
            <View style={{flexDirection:'row'}}>
              <Text style={styles.textStyle2}>Ingrese un nombre de usuario:</Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <TextInput style={styles.textStyle} 
                placeholder="Nombre usuario"
                onChangeText ={this.actualizarUsuario}
                />
            </View>
          </View>
        </View>
        <View style={styles.grupo}>{/*justifyContent 'row' -- flex 1 */}
          <View style={styles.columna}>{/*Text y textinput -- flex 1*/}
          <View style={{flexDirection:'row'}}>
              <Text style={styles.textStyle2}>Ingrese su nombre:</Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <TextInput style={styles.textStyle} 
                placeholder="Nombre"
                onChangeText ={this.actualizarNombre}
                />
            </View>
          </View>
        </View>
        <View style={styles.grupo}>{/*justifyContent 'row' -- flex 1 */}
          <View style={styles.columna}>{/*Text y textinput -- flex 1*/}
          <View style={{flexDirection:'row'}}>
              <Text style={styles.textStyle2}>Ingrese su apellido:</Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <TextInput style={styles.textStyle} 
                placeholder="Apellido"
                onChangeText ={this.actualizarApellido}
                />
            </View>
          </View>
        </View>
        <View style={styles.grupo}>{/*justifyContent 'row' -- flex 1 */}
          <View style={styles.columna}>{/*Text y textinput -- flex 1*/}
          <View style={{flexDirection:'row'}}>
              <Text style={styles.textStyle2}>Ingrese su email:</Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <TextInput style={styles.textStyle} 
                placeholder="Email"
                onChangeText ={this.actualizarEmail}
                />
            </View>
          </View>
        </View>
        <View style={styles.grupo}>{/*justifyContent 'row' -- flex 1 */}
          <View style={styles.columna}>{/*Text y textinput -- flex 1*/}
          <View style={{flexDirection:'row'}}>
              <Text style={styles.textStyle2}>Ingrese su direccion:</Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <TextInput style={styles.textStyle} 
                placeholder="Direccion"
                onChangeText ={this.actualizarDireccion}
                />
            </View>
          </View>
        </View>
        <View style={styles.grupo}>{/*justifyContent 'row' -- flex 1 */}
            <View style={styles.columna}>{/*Text y textinput -- flex 1*/}
            <View style={{flexDirection:'row'}}>
              <Text style={styles.textStyle2}>Ingrese su telefono:</Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <TextInput style={styles.textStyle} 
                placeholder="Telefono"
                onChangeText ={this.actualizarTelefono}
                />
            </View>
            </View>
          </View>
      </View>
      <View style={styles.botones}>{/*botones atras y guardar*/}
        <View style={{marginHorizontal:15, flexDirection:'row', flex:1, justifyContent:'space-between'}}>{/*Esta por fila*/}
            <Button title="Atras" 
             color='#072F46'
            />

            <Button title="Guardar" 
             color='#072F46'
             onPress = {this.crearUsuario}
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
    flexDirection: 'row',
    backgroundColor: 'white',
    textAlign:'center',
    marginHorizontal: 10,
    borderWidth: 1,
    borderRadius:5,
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
