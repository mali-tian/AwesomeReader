'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} = ReactNative;

export default class BottomBar extends React.Component {
  static title = '<TabBarIOS>';
  static description = 'Tab-based navigation.';
  static displayName = 'TabBarExample';

  state = {
    selectedTab: 'redTab',
    notifCount: 0,
    presses: 0,
  };

  _renderContent = (color: string, pageText: string, num?: number) => {
    return (
      <View style={[styles.tabContent, {backgroundColor: color}]}>
        <Text style={[styles.tabText, {color: "black"}]}>{pageText}</Text>
        <Text style={styles.tabText, {color: "black"}}>{num} re-renders of the {pageText}</Text>
      </View>
    );
  };

  render() {
    return (
      <TabBarIOS
        unselectedTintColor="darkgray"
        tintColor="gray"
        unselectedItemTintColor="gray">
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
        <TabBarIOS.Item
          title="Shop"
          icon={require ('../images/bottom-bar/shop-30.png')}
          selectedIcon={require('../images/bottom-bar/shop-black-30.png')}
          selected={this.state.selectedTab === 'shopTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'shopTab',
            });
          }}>
          {this._renderContent('white', 'This is shop')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Category"
          icon={require ('../images/bottom-bar/category-30.png')}
          selectedIcon={require('../images/bottom-bar/category-black-30.png')}
          selected={this.state.selectedTab === 'categoryTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'categoryTab',
            });
          }}>
          {this._renderContent('white', 'This is Categories')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Mine"
          icon={require ('../images/bottom-bar/person-30.png')}
          selectedIcon={require('../images/bottom-bar/person-black-30.png')}
          selected={this.state.selectedTab === 'mineTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'mineTab',
            });
          }}>
          {this._renderContent('white', 'This is Mine')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Local"
          icon={require ('../images/bottom-bar/local-30.png')}
          selectedIcon={require('../images/bottom-bar/local-black-30.png')}
          selected={this.state.selectedTab === 'localTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'localTab',
            });
          }}>
          {this._renderContent('white', 'This is Local')}
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});
