import {View, Text, StyleSheet} from 'react-native';
import Component from './componente';

export default function App(){

return(

<View style={estilos.central}>

<Text style={estilos.titulo}>Sistema Conversor de Moedas</Text>
<Component/>

</View>

);

}

// Aqui começa os estilos

const estilos = StyleSheet.create({


  central:{
   flex:1,
   backgroundColor:'gray',
   alignItems:'center',
   justifyContent:'center'

  },

  titulo:{
    fontSize:25,
    color:'white'

  }

})