'use strict';

var React = require('react');
var ScrollableTabView = require('react-native-scrollable-tab-view');
var ReactNative = require('react-native');
var {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
  Image,
} = ReactNative;

import ScrollTest from "./ScrollBook"
import CurrentMonth from "./CurrentMonth"

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

export default class OriginalBar extends React.Component {
  static title = '<OriginalBarIOS>';
  static description = 'OriginalBar-based navigation.';
  static displayName = 'OriginalBar';

  state = {
    selectedTab: 'originalTab',
    notifCount: 0,
    presses: 0,
  };

  _renderContent = (color: string, pageText: string) => {
    return (
      <View style={[styles.tabContent, {backgroundColor: color}]}>
        <View style={[styles.topSearch, {backgroundColor: color}]}/>
        <View style={styles.topLiterature}>
          <View style={{flex: 1, marginLeft: 10}}>
              <Image source={require('../images/top-literature/topTheme.png')} style={{width: 200, height: 70}} />
          </View>
          <View style={{ width: 150, padding: 30}}>
              <Text style={[styles.tabContent], {fontSize: 20}}>入围作品</Text>
              <Text style={[styles.tabContent, {color: 'red',fontSize: 20}]}>免费阅读</Text>
          </View>
        </View>
        <View>
          <ScrollTest/>
        </View>
        <View style={{height: 300}}>
          <CurrentMonth />
        </View>
      </View>
    );
  };

  render() {
    return (
      <TabBarIOS.Item
        title="Original Literature"
        icon={require ('../images/bottom-bar/main-30.png')}
        selectedIcon={require('../images/bottom-bar/main-black-30.png')}
        selected={this.state.selectedTab === 'originalTab'}
        onPress={() => {
          this.setState({
            selectedTab: 'originalTab',
          });
        }}>
        {this._renderContent('white', 'This is original literature')}
      </TabBarIOS.Item>
    );
  }
}

var styles = StyleSheet.create({
  topSearch: {
    height: 70,
  },
  topLiterature: {
    backgroundColor: 'linen',
    alignItems: "center",
    flexDirection:'row',
    height: 100,
    width: width,
  },
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'black',
    margin: 50,
    alignItems: "center",
  },
});
