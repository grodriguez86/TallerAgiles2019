import React, {Component} from 'react';
import { StyleSheet, Picker, View} from 'react-native';

export default class PickerUsuario extends Component{

  constructor(props){
    super(props);
  }
  render(){    

    let listaUsuarios = this.props.usuarios.map((e) => {
        return <Picker.Item key= {e.usuario} value={e.usuario} label={e.usuario} color='#072F46'/>
    });

    return(
        <View>
            <Picker
                style={{height: 50, width: 200}}
                selectedValue={(this.state && this.state.nombreUsuario == '')}
                onValueChange ={this.props.padre.actualizarUsuario}>
                {listaUsuarios}
            </Picker>
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
  }
});
