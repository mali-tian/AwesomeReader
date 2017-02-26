import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import BottomComponents from "./components/BottomBar"

export default class AwesomeReader extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <BottomComponents />
      </View>
    );
  }
}
