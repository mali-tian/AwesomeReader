'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} = ReactNative;

export default class OriginalBar extends React.Component {
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
        <Text style={[styles.tabText, {color: "black"}]}>{pageText}</Text>
      </View>
    );
  };

  render() {
    return (
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
