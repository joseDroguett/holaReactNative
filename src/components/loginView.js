'use strict'

import React, { 
  Component 
} from 'react';

import {
  View,
  Text,
  Image,
  TouchableHighlight,
  Alert,
  StyleSheet,
  Dimensions
} from 'react-native';

class loginView extends Component {
  render() {
    var {height, width} = Dimensions.get('window');
    return (
      <Image style={[styles.container,{width: width, height: height}]} source={require('../../assets/scarlet.jpg')}>
        <View>
          <Text style={styles.titulo}>Super Heroes</Text>
          <TouchableHighlight onPress={this.aceptar.bind(this)} style={styles.boton}>
            <Text style={styles.textoBoton}>Ingresar</Text>
          </TouchableHighlight>
        </View>
      </Image>
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
  //this.props.navigator.push para agregar
  aceptar(){
    this.props.navigator.replace({
      title: 'Dashboard',
      name: 'Dashboard',
      passProps: {}
    })
  }

  cancelar(){
    console.log('Andate a la mierda')    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    padding: 30
  },
  titulo:{
    fontSize: 35,
    fontWeight: '900',
    marginTop: 250,
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  boton:{
    width: 300,
    height: 40,
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
  },
})

module.exports = loginView;