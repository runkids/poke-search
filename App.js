import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import Landing from './src/Landing';
import Search from './src/Search';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS==="android" ? 24 : 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      content: 'landing'
    }
  }

  doSwitch = (content)=>{
    this.setState({
      content
    })
  }
  
  render() {

    const renderSwitch = ()=>{
      let content = this.state.content;
      if(content==='landing'){
        return (
          <Landing switchScreen={this.doSwitch}></Landing>
        )
      }
      else if(content==='search'){
        return (
          <Search></Search>
        )
      }
    }

    return (
      <View style={styles.container}>
        {renderSwitch()}
      </View>
    );
  }
}

export default App;

