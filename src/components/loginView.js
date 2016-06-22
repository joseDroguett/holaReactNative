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
  Dimensions,
  TextInput
} from 'react-native';

class loginView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: '',
      pass: ''
    }
  }

  render() {
    var {height, width} = Dimensions.get('window');
    return (
      <Image style={[styles.container,{width: width, height: height}]} source={require('../../assets/scarlet.jpg')}>
        <View>
          <Text style={styles.titulo}>Super Heroes</Text>
          <TextInput
            style={styles.miInput}
            value={this.state.nombre}
            onChangeText={(text) => {
              this.setState({
                nombre: text
              })
            }}
            placeholder="Nombre de usuario"
          />
          <TextInput
            style={styles.miInput}
            value={this.state.pass}
            onChangeText={(pass) => {
              this.setState({
                pass: pass
              })
            }}
            placeholder="Password"
            secureTextEntry={true}
          />
          <TouchableHighlight onPress={this.onLogin.bind(this)} style={styles.boton}>
            <Text style={styles.textoBoton}>Ingresar</Text>
          </TouchableHighlight>
        </View>
      </Image>
    );
  }

  onLogin(){
    if(this.state.nombre == 'Pepe' && this.state.pass == 'Pepe2'){
      this.aceptar()
    }else{
      Alert.alert(
        'Te equivocaste',
        'Usuario y/o constraseña incorrectas. Por favor vuelva a intentar.'
      )
    }  
  }
  //this.props.navigator.push para agregar
  aceptar(){
    this.props.navigator.replace({
      title: 'Dashboard',
      name: 'Dashboard',
      passProps: {}
    })
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
  miInput:{
    backgroundColor: 'white',
    height: 40,
    width: 300,
    borderRadius: 8,
    borderWidth: 1,
    paddingLeft: 10,
  },
})

module.exports = loginView;