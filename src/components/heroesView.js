'use strict'

import React, { 
  Component 
} from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

class heroesView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}> Bienvenido al heroes </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'stretch',
    padding: 30
  },
  titulo:{
    marginTop: 40,
    fontSize: 25,
    justifyContent: 'center'
  }
})

module.exports = heroesView;