import React,{Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';

const loadingGif = require('../assets/loading.gif');

const styles  = StyleSheet.create({
  contain : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class Loader extends Component{
  render(){
    return (
      <View style={styles.contain}>
        <Image source={loadingGif}></Image>
      </View>
    )
  }
}

export default Loader;