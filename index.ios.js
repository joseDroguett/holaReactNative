'use strict'

import React, { 
  Component 
} from 'react';

import {
  AppRegistry,
  Navigator,
  Text,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

let NavigatorBarRouteMapper = {
  LeftButton: function(route,navigator,index){
    if(index == 0) return null;
    return(
      <TouchableHighlight onPress={() =>{
        if(index>0){
          navigator.pop()
        }
      }}>
        <Text style={styles.atras}>Atras</Text>
      </TouchableHighlight>
    )
  },
  RightButton: function(route,navigator,index){
    return null;
  },
  Title: function(route,navigator,index){
    if(route.name == 'Login' || route.name == 'Dashboard') return null;
    return (
      <Text style={styles.title}>
        {route.title}
      </Text>
    );
  }
}

const Login = require('./src/components/loginView.js')
const Tabs = require('./src/components/tabs.ios.js')
const Details = require('./src/components/comicDetailView.js')

class holaMundo extends Component {

  renderScene(route,navigator){
    switch(route.name){
      case 'Login':
        return(
          <Login navigator={navigator} route={route}/>
        );
      case 'Dashboard':
        return(
          <Tabs navigator={navigator} route={route}/>
        );
      case 'Detalles':
        return(
          <Details navigator={navigator} route={route}/>
        );
    }
  }

  render() {
    return (
      <Navigator style={styles.navi} 
        initialRoute={{name: 'Login'}}
        renderScene={this.renderScene}
        cofigureScene={(route) => {
          if(route.sceneConfig){
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromRight
        }}
        navigationBar={
          <Navigator.NavigationBar 
            routeMapper={NavigatorBarRouteMapper} 
          />
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  atras: {
    marginTop:10,
    marginLeft:20,
    color:'#007AFF'
  },
  title: {
    marginTop:10,
    color:'#007AFF'
  },
})

AppRegistry.registerComponent('holaMundo', () => holaMundo);