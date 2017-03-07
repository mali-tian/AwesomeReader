'use strick'

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image
} from 'react-native';

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
var itemWidth = width/3;

export default class CurrentMontheProduction extends Component {

  constructor(props){
    super(props);
    this.state = {
      backgroundColor: "",
      borderTopColor: "",
    }
  }
  render(){



    var style = this.props.production;
    return(
      <View style={[styles.currentMonthItem,{backgroundColor: style.backgroundColor, borderTopColor: style.borderTopColor}]}>
        <Text style={{marginTop: 10, color: "orange", fontWeight: "900"}}>本月畅销</Text>
          <View style={{flex: 1}}>
            <Image source={require('../../images/exampples/Book_03.png')} style={styles.picStyle} />
            <Text style={{marginTop: 5, fontSize: 13}}>意识的星云</Text>
            <Text style={{marginTop: 5, fontSize: 13, color: "grey"}}>门</Text>
          </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  picStyle: {
    width: 100,
    height: 125,
    marginTop: 10,
  },
  currentMonthItem: {
    height: 240,
    width: itemWidth,
    alignItems: "center",
    borderTopWidth:2,
    marginRight:1,
  },
});
