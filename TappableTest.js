'use strict';

const React = require('react');
const ReactNative = require('react-native');
const {
  AlertIOS,
  NavigatorIOS,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} = ReactNative;


export default class TappableTest extends React.Component {
  _onPressButton() {
    console.log("You tapped the button!");
  }

  render() {
    return (
      <TouchableHighlight onPress={this._onPressButton}>
        <Text>Button</Text>
      </TouchableHighlight>
    );
  }
}
