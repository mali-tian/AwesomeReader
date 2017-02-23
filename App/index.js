import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import BottomComponents from "./components/BottomBar"

export default class DouBanReader extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <BottomComponents />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
