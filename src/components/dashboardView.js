'use strict'

import React, { 
  Component 
} from 'react';

import {
  View,
  Text,
  StyleSheet,
  ListView,
  Image,
  TouchableHighlight
} from 'react-native';

const Crypto = require('crypto-js');
const Request = "http://gateway.marvel.com:80/v1/public/characters";

class dashboardView extends Component {
  constructor(props) {
    super(props);

    this.timestamp = 1;
    this.public_key = 'a0a331b990c1e172f6e561d9aef9ee80';
    this.private_key = '3c99193e90104a7b7a43f9353953240c9bb6c2a7';

    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      loaded: false
    }
  }

  componentDidMount(){
    this.fetchData()
  }

  fetchData(){
    let hash = Crypto.MD5(this.timestamp+this.private_key+this.public_key)

    fetch(Request+'?ts='+this.timestamp+'&apikey='+this.public_key+'&hash='+hash)
      .then((response)=>response.json())
      .then((responseData)=>{
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.data.results),
          loaded: true
        })
      })
  }

  renderLoadingView(){
    return(
      <View style={styles.container}>
        <Text>Cargando comics ... </Text>
      </View>
    )
  }

  renderComic(comic){
    console.log(comic);
    return(
      <TouchableHighlight>
        <Image source={{uri: comic.thumbnail.path+'.jpg'}} style={styles.backgroundImage}>
          <View style={styles.rightContainer}>
            <Text style={styles.titleComic}>{comic.name}</Text>
            <Text style={styles.avaible}>{comic.comics.available}</Text>
          </View>
        </Image>
      </TouchableHighlight>
    )
  }

  render() {
    if(!this.state.loaded){
      return this.renderLoadingView()
    }
    return(
      <ListView 
        dataSource={this.state.dataSource}
        renderRow={this.renderComic.bind(this)}
        style={styles.listview}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 64,
  },
  backgroundImage:{
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    height: 150,
  },
  rightContainer:{
    backgroundColor:'rgba(52,52,52,0.5)',
    alignSelf: 'stretch',
    paddingTop: 30,
    height: 150,
  },
  titleComic:{
    fontSize: 27,
    marginBottom: 8,
    textAlign: 'center',
    color: '#FFFFFF',
    backgroundColor: 'rgba(52,52,52,0)',
  },
  avaible:{
    fontSize: 18,
    textAlign: 'center',
    color: '#FFFFFF',
    backgroundColor: 'rgba(52,52,52,0)',
  },
  listview:{
    marginBottom: 49,
  },
})

module.exports = dashboardView;