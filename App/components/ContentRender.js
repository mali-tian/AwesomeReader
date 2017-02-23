'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} = ReactNative;

export default class ContentRender extends React.Component {
  constructor(props) {
        super(props);
    }

    renderContent (color: string, pageText: string, num?: number) {
      return (
        <View style={[styles.tabContent, {backgroundColor: color}]}>
          <Text style={[styles.tabText, {color: "black"}]}>{pageText}</Text>
          <Text style={styles.tabText, {color: "black"}}>{num} re-renders of the {pageText}</Text>
        </View>
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
