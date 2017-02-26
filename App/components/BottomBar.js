'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} = ReactNative;

import OriginalBar from "./OriginalBar"
import ShopBar from "./ShopBar"
import CategoryBar from "./CategoryBar"
import MineBar from "./MineBar"
import LocalBar from "./LocalBar"

export default class BottomBar extends React.Component {

  render() {
    return (
      <TabBarIOS
        unselectedTintColor="darkgray"
        tintColor="gray"
        unselectedItemTintColor="gray">
        <OriginalBar state={this.state}/>
        <ShopBar/>
        <CategoryBar/>
        <MineBar/>
        <LocalBar/>
      </TabBarIOS>
    );
  }
}
