import React, {Component,Fragment} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableHighlight, Alert, ImageBackground, Image } from 'react-native';
import login from '../servicios/servicioLogin'

export default class viewLogin extends Component{
    
  static navigationOptions = {
    headerTitleStyle: { 
        textAlign:"center", 
        flex:1,
        marginLeft:-45,
    },
    title: 'Login',
    };
    

    state = {
            usuario: '',
            password: ''
    }



    actualizarUsuario = (usuario) => { 
    this.setState(
      { 
        usuario: usuario
      }
                  )
   }

    actualizarPassword = (password) => { 
    this.setState(
      { 
        password: password
      }
                  )
   }
  
    render(){
        return(
          <View  style={styles.container}>
          <ImageBackground source={require('../assets/logo2.png')} style={styles.bgcontainer}>
              <View style={styles.maincontainer}>
                  <Text style={styles.textStyle2}>¡BIENVENIDO!</Text>
                   <View  style={styles.margin}>
                        <Text style={styles.textStyle2}>Usuario:</Text>
                   </View>
                   <View>
                        <TextInput style={styles.textStyle} 
                          placeholder="Nombre usuario"
                          onChangeText ={this.actualizarUsuario}
                          />
                   </View>
                    <View>
                        <Text style={styles.textStyle2}>Contraseña:</Text>
                   </View>
                   <View>
                        <TextInput secureTextEntry={true} style={styles.textStyle1} 
                          placeholder="Contraseña"
                          onChangeText ={this.actualizarPassword}
                          />
                   </View>
                  <TouchableHighlight onPress={(this.onLogin.bind(this))} style={styles.boton}>
                     <Text style={styles.textoBoton}>LOGIN</Text>
                  </TouchableHighlight>
              </View>
        </ImageBackground>
        </View>
        );
    }
 
    onLogin()
    {  
      login(this.usuario,this.password);
      
    }

    aceptar()
    {
      Alert.alert('Mensaje', 'Aceptado')
    }

    cancelar()
    {
       Alert.alert('Mensaje', 'Cancela3')
    }

}

const styles = StyleSheet.create({
    bgcontainer:{
      width: 420,
      height:420,
      alignItems:'center',
      resizeMode: 'contain',
       marginTop:20,
      
    },
    maincontainer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
       marginBottom: 10,
        marginTop:150,
      
    },
    container:{
      justifyContent:'center',
      alignItems:'center',
    },
    margin:{
       justifyContent:'center',
      alignItems:'center',
      marginTop:5,

    },
    boton:{
        width:300,
        height:30,
        backgroundColor:'#072F46',
        marginBottom: 10,
        marginTop:30,
        borderRadius: 8,
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
    },
    textoBoton:{
      color:'white',
      fontWeight: 'bold',
    },
    textStyle1:{
      color :'#072F46',
      textAlign:'center',
      fontSize:12,
      margin: 10,
    },

    textStyle2:{
      color :'#072F46',
      textAlign:'left',
      fontWeight: 'bold',
      fontSize:20,
      margin: 10,
    }
    });
    