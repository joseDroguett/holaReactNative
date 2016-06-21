'use strict'

import React, { 
  Component 
} from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

class dashboardView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}> Bienvenido al dashboard </Text>
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

module.exports = dashboardView;