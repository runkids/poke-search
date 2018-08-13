import React ,{Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, Item, Icon, Input, Button} from 'native-base';
import axios from 'axios';
import Loader from './PokeLoader';
import SearchBody from './SearchBody';

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    width: '100%'
  }
});

class Search extends Component{

  state = {
    inputValue: '',
    onCall: true,
    data: null,
  }

  searchPoke = ()=>{
    if(!this.state.inputValue) return;
    
    this.setState({
      onCall: true
    },this.getData);
    
  }
  
  getData = ()=>{
    let that = this;
    axios.get(`http://pokeapi.co/api/v2/pokemon/${this.state.inputValue.toLowerCase()}`)
    .then(resolve=>{
      that.setState({
        onCall: false,
        data: resolve.data
      });
    })
    .catch(rej=>{
      console.log(rej);
    })
  }

  render(){
    const renderBody = ()=>{
      if(this.state.onCall){
        return (
          <Loader></Loader>
        )
      }
      else{
        return (
          <SearchBody data={this.state.data}></SearchBody>
        )
      }
    }

    return (
      <View style={styles.contain}>
        <Header 
          searchBar 
          rounded
        >
          <Item>
            <Icon name="ios-search" onPress = {this.searchPoke}/>
            <Input
              value = {this.state.inputValue}
              placeholder = "Search Pokemon"
              onEndEditing = {this.searchPoke}
              onChangeText = {(text)=>this.setState({inputValue:text})}
            />
          </Item>
        </Header>
        {renderBody()}
      </View>
    )
  }
}

export default Search;