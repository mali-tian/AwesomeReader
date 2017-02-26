'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} = ReactNative;

export default class CategoryBar extends React.Component {
  static title = '<TabBarIOS>';
  static description = 'Tab-based navigation.';
  static displayName = 'TabBarExample';

  state = {
    selectedTab: 'redTab',
    notifCount: 0,
    presses: 0,
  };

  _renderContent = (color: string, pageText: string) => {
    return (
      <View style={[styles.tabContent, {backgroundColor: color}]}>
        <Text style={[styles.tabText]}>{this.state.selectedTab}</Text>
      </View>
    );
  };

  render() {
    return (
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
