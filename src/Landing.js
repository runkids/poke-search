import React, { Component } from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import {Button} from 'native-base';

const bgcImg = require('../assets/landing.jpg');

const styles = StyleSheet.create({
  backgroundImage:{
    width: '100%',
    height: '100%',
  },
  innerView:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    color: 'blue',
    fontSize: 30,
  },
  button:{
    margin: 20,
  },
  buttonText:{
    color: 'white',
  }
});


class Landing extends Component {
  render(){
    return (
      <ImageBackground source = {bgcImg} style = {styles.backgroundImage} >
        <View style = {styles.innerView} >
          <Text style = {styles.title} >Welcome to PokeSearch</Text>
          <Button
            block
            style = {styles.button}
            onPress = {()=> this.props.switchScreen('search')}
          >
            <Text style = {styles.buttonText} >Star Search</Text>
          </Button>
        </View>
      </ImageBackground>
    )
  }
}

export default Landing;