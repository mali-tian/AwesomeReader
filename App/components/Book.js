'use strict'

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class Book extends React.Component {

  render (){
    return (
      <View style={styles.itemStyle}>
        <Image style={styles.picStyle} source={{uri: this.props.pic}} />
        <BookContent bookName={this.props.bookName} author={this.props.author} />
      </View>
    );
  }
}

class BookContent extends React.Component {
  render() {
    return (
      <View style={{paddingLeft: 6}}>
        <Text style={styles.contentStyle}>{this.props.bookName}</Text>
        <Text style={styles.authorStyle}>{this.props.author}</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({

    itemStyle: {
      flex: 1,
      marginLeft:1.5,
      marginRight: 1.5,
      height: 125,
      width: 125,
      marginTop: 10
    },

    picStyle: {
      width: 100,
      height:145,
      resizeMode:'contain',
      alignItems: "center",
      marginTop: 10,
      marginLeft: 9,
    },

    contentStyle: {
      color: "black",
      fontSize: 12
    },

    authorStyle: {
      color: "gray",
      fontSize: 10
    }
});
