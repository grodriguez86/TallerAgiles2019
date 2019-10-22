import React, { Component, Fragment } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native'
import template from './components/template';
import tag from './components/tag';

/*PROBLEMA: NO IMPRIME CADA ELEMENTO OBTENIDO EN TAGS, LA IDEA ES RECORRER STATE.TAGS PARA MOSTRAR EN 
TIEMPO REAL COMO VA CAMBIANDO EL TEMPLATE SELECCIONADO Y SUS TAGS. ESTO SE NECESITA PARA PODER 
LLENAR LOS CHECKBOXES Y QUE EL USUARIO CARGUE EL TEMPLATE CORRECTAMENTE.*/ 
class TemplateLoader extends Component {
  
   constructor(props){
      super(props);
      this.state = 
      {
         user: '', 
         selectedTemplate: '', 
         flag:false, 
         tags:null
      } 
   }
   //La variable state almacena variables que cambian de estado durante la ejecucion.
   
   
   //Es una funcion que recibe como parametro un usuario y lo asigna al usuario de state.
   updateUser = (user) => { 
    this.setState(
      { 
        user: user,
        flag:true
      }
   
                  )
   }

   showTag = (tagList) => //Por cada tag del template seleccionado debo mostrar sus datos.
   { 
      if(tagList !== null){
         tagList.map((tag) =>
            {
            <Fragment>
               <Text style = {styles.text}>{'Nombre: '+tag.nombre}</Text> 
               <Text style = {styles.text}>{'Lectura: '+tag.lectura}</Text> 
               <Text style = {styles.text}>{'Escritura: '+tag.escritura}</Text> 
            </Fragment>
            })
      }
      else{
         <Text style = {styles.text}>{'TEXTO'}</Text> 
      }
   }
   //RENDER
   render() 
   {
     //Se definen los Tags
     const t1 = new tag("t1",0,1);
     const t2 = new tag("t2",1,0);
     let selectTag = t1;
     //Se definen los Templates
     let templates = [new template("administrador", [t1,t2]),
                      new template("usuario comun", [t1])]

     //Le asigno a una variable una funcion y luego devuelvo un picker con esos parametros.
      let listaTemplates = templates.map((e) => {
      return <Picker.Item key= {e.nombre} value={e.nombre} label={e.nombre}/>
       }); 
       
       //Obtener el template seleccionado
       let selecTemplate = templates.map((e) => 
       {      
              if(e.nombre === this.state.user && this.state.flag === true)
              {
                this.state.selectedTemplate = e;
                this.state.flag = false; 
                this.state.tags = e.tags;
              } 
         }
         ); 

         //console.warn(this.state.selectedTemplate);
         //console.warn(this.state.tags);

      return(
         <View>
            <Picker 
                  selectedValue = {this.state.user} 
                  onValueChange= {this.updateUser}  
                  style={styles.picker} 
                  itemStyle={styles.text}>
                  
                  {listaTemplates} 
                  {this.updateUser}
            </Picker>
            <View>
               <Fragment>
                  <Text style = {styles.text}> {''+this.state.selectedTemplate.nombre}</Text>
                  <Text style = {styles.text}>TAGS:</Text> 
                  {this.showTag(this.state.tags)}
               </Fragment>
            </View>
            
         </View>
    
      )}
}

export default TemplateLoader

const styles = StyleSheet.create({
   text: {
      fontSize: 30,
      alignSelf: 'center',
      color: 'red'
   },
   picker: {
      alignSelf: 'center',
      marginTop: 200,
      width: 200,
      backgroundColor: '#1111',
      borderColor: 'black',
      borderWidth: 5
   }
})