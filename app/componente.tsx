import {Text, View, Button, TextInput, StyleSheet} from 'react-native';

import React from 'react';

 export default function Component(){

    return(
      <View style={estilos.caixa}>
 
       <Text style={estilos.ctitle}>Valor:</Text>
       <TextInput style={estilos.cinput}
       keyboardType='numeric'
       />
       <Button
       title='Converter' style={estilos.cbotao}
       />
      </View>
  
    );

}

const estilos = StyleSheet.create({
   
caixa:{
    backgroundColor:'white',
    width:'70%',
    padding:20,
    borderRadius:10,
    marginTop:20
},

ctitle:{
   fontSize:20,
   fontWeight:'bold',
   color:'#2196F3',
},

cinput:{
   width:'100%',
   borderWidth:1,
   borderColor:'#2196F3',
   marginBottom:15,
   marginTop:5,
},


})

