'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} = ReactNative;

export default class ShopBar extends React.Component {
  static title = '<ShopBarIOS>';
  static description = 'ShopBar-based navigation.';
  static displayName = 'ShopBarExample';

  state = {
    selectedTab: 'originalTab',
    notifCount: 0,
    presses: 0,
  };

  _renderContent = (color: string, pageText: string) => {
    return (
      <View style={[styles.tabContent, {backgroundColor: color}]}>
        <View style={[styles.tabContent, {backgroundColor: color}]}>
          <Text style={[styles.tabContent]}>{this.state.selectedTab}</Text>
        </View>
        <Text style={[styles.tabContent]}>{this.state.selectedTab}</Text>
      </View>
    );
  };

  render() {
    return (
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
