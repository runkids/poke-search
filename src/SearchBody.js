import React,{Component} from 'react';
import {ScrollView, Text, View, Image} from 'react-native';
import {ListItem, List} from 'native-base';
import Footer from './Footer';

const styles = {
  header:{
    fontSize: 30,
    textAlign: 'center',
    marginTop: 20,
  },
  imgView:{
    flexDirection: 'row',
  },
  img:{
    width: 200,
    height: 200,
  }
}

class SearchBody extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const data = this.props.data;
    if(!data){
      return <View></View>
    }else{
      return (
        <ScrollView style={{flex:1}}>
          <Text style={styles.header}>#{data.id} - {data.name}</Text>
          <View style={styles.imgView}>
            <Image style={styles.img} source={{uri: data.sprites.front_default}}/>
            <Image style={styles.img} source={{uri: data.sprites.back_default}}/>
          </View>

          <View>
            <ListItem itemDivider>
              <Text>Size</Text>
            </ListItem>
            <ListItem>
              <Text>Height: {data.height/10}m</Text>
            </ListItem>
            <ListItem>
              <Text>Weight: {data.weight}kg</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text>Abilities</Text>
            </ListItem>
            <List
              dataArray={data.abilities}
              renderRow={(item)=>(
                <ListItem>
                  <Text>{item.ability.name}</Text>
                </ListItem>
              )}
            >
            </List>
          </View>

          {/* <Footer></Footer> */}
        </ScrollView>
      )
    }
  }
}

export default SearchBody;