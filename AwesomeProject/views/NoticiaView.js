import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import Noticia from '../components/Noticia.js';

export default class NoticiaView extends Component{

    render(){
        
        return(
        <View style={styles.container}>
          <View style={styles.titulo}>
            <View style={{flex:1}}>
                <View>
                  <Text style={{fontSize:13, color:'white', textAlign:'right', fontWeight: 'bold'}}>{this.props.noticia.fecha}</Text>
                </View>
               <View>
                 <Text style={{fontSize:26, color:'white', textAlign:'center', fontWeight: 'bold', paddingBottom:5}}>{this.props.noticia.titulo}</Text>
               </View>             
            </View>
          </View>
            <View style={styles.informacion}>
              <View style={styles.grupo}>
                <Text style={styles.textStyle2}>{this.props.noticia.cuerpo}</Text>
              </View>
              <View style={styles.grupo}>
                <Text style={styles.textStyle2}>{this.props.noticia.autor}</Text>
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
