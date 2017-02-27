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
  Button,
} = ReactNative;

var Dimensions = require('Dimensions');

var {width, height} = Dimensions.get('window');
var itemWidth = width/3;

export default class CurrentMonth extends React.Component {
  render (){
    return(
      <View style={styles.currentMonth}>
        <View style={[styles.currentMonthItem,{backgroundColor: "blanchedalmond", borderTopColor: "orange"}]}>
          <Text style={{marginTop: 10, color: "orange", fontWeight: "900"}}>本月畅销</Text>
            <View style={{flex: 1}}>
              <Image source={require('../images/exampples/Book_03.png')} style={styles.picStyle} />
              <Text style={{marginTop: 5, fontSize: 13}}>意识的星云</Text>
              <Text style={{marginTop: 5, fontSize: 13, color: "grey"}}>门</Text>
            </View>
        </View>
        <View style={[styles.currentMonthItem,{backgroundColor: "palegreen", borderTopColor: "limegreen"}]}>
          <Text style={{marginTop: 10, color: "limegreen", fontWeight: "900"}}>本月好评</Text>
          <View style={{flex: 1}}>
            <Image source={require('../images/exampples/Book_04.png')} style={styles.picStyle} />
            <Text style={{marginTop: 5, fontSize: 13}}>神在密林中安眠</Text>
            <Text style={{marginTop: 5, fontSize: 13, color: "grey"}}>睁木</Text>
          </View>

        </View>
        <View style={[styles.currentMonthItem,{backgroundColor: "powderblue", borderTopColor: "dodgerblue"}]}>
          <Text style={{marginTop: 10, color: "dodgerblue", fontWeight: "900"}}>本月新作</Text>
            <View style={{flex: 1}}>
              <Image source={require('../images/exampples/Book_05.png')} style={styles.picStyle} />
              <Text style={{marginTop: 5, fontSize: 13}}>血色粒子</Text>
              <Text style={{marginTop: 5, fontSize: 13, color: "grey"}}>Jason Sanford</Text>
            </View>

        </View>

      </View>

    );
  }
}

var styles = StyleSheet.create({
  currentMonth: {
    marginTop: 20,
    backgroundColor: 'white',
    flexDirection:'row',
    height: 250,
    width: width,
    borderBottomWidth: 0.1,
    borderBottomColor: "darkgrey",
  },
  picStyle: {
    width: 100,
    height: 125,
    marginTop: 10,
  },
  currentMonthItem: {
    height: 240,
    width: itemWidth,
    alignItems: "center",
    borderTopWidth:2,
    marginRight:1,
  },
});
