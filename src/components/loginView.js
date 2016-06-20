'use strict'

import React, { 
  Component 
} from 'react';

import {
  View,
  Text,
  TouchableHighlight,
  Alert,
  StyleSheet
} from 'react-native';

class loginView extends Component {
  render() {
    return (
      <View>
        <TouchableHighlight onPress={this.onLogin.bind(this)} style={styles.boton}>
          <Text style={styles.textoBoton}>Login</Text>
        </TouchableHighlight>
      </View>
    );
  }

  onLogin(){
    Alert.alert(
      'Acceso',
      'Te logeaste ctm!!!',
      [
        {
          text: 'Aceptar', 
          onPress: (this.aceptar.bind(this))
        },
        {
          text: 'Cancelar', 
          onPress: (this.cancelar.bind(this)) 
        }
      ]
    )
  }

  aceptar(){
    console.log('Aceptaste ctm')
  }

  cancelar(){
    console.log('Andate a la mierda')    
  }
}

const styles = StyleSheet.create({
  boton:{
    width: 300,
    height: 30,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1
  },
  textoBoton:{
    color: 'white'
  }
})

module.exports = loginView;