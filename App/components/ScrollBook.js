import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image
} from 'react-native';

import Book from "./Book";

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
var bookUrls = ['https://api.douban.com/v2/book/1220560', 'https://api.douban.com/v2/book/1220561',
                'https://api.douban.com/v2/book/1220562','https://api.douban.com/v2/book/1220563',
                'https://api.douban.com/v2/book/1220564', 'https://api.douban.com/v2/book/1220565',
                'https://api.douban.com/v2/book/1220566', 'https://api.douban.com/v2/book/1220567',
                'https://api.douban.com/v2/book/1220568', 'https://api.douban.com/v2/book/1220569'];

var CustomScrollView = React.createClass({

    getInitialState(){
        return{
            currentPage:0,
            bookList:[],
        }
    },

    componentWillMount(){
      for(var i = 0; i<bookUrls.length; i++){
        this.fetchData(bookUrls[i]);
      }
    },

    render(){
        return(
            <View style={styles.container}>
                <ScrollView style={styles.scrollViewStyle}
                            horizontal={true}   // 水平方向
                            showsHorizontalScrollIndicator={false}  // 隐藏水平指示器
                            showsVerticalScrollIndicator={false}    // 隐藏垂直指示器
                            pagingEnabled={true}    // 开启分页功能
                            onMomentumScrollEnd={this.onAnimationEnd} // 当一帧滚动完毕的时候调用
                            automaticallyAdjustContentInsets={false}>
                            {this.renderItem()}
                </ScrollView>
                <View style={styles.pagingIndicatorStyle}>
                    {this.renderPagingIndicator()}
                </View>
            </View>
        );
    },

    fetchData(url) {
      var request = new XMLHttpRequest();
      request.onreadystatechange = (e) => {
        if (request.readyState !== 4) {
          return;
        }
        if (request.status === 200) {
          var book = this.state.bookList;
          book.push(JSON.parse(request.responseText));
          this.setState(
            {bookList: book}
          );
        } else {
          console.warn('error');
        }
      };
      request.open('GET', url);
      request.send();
    },

    onAnimationEnd(e){
        var offSetX = e.nativeEvent.contentOffset.x;
        var currentPage = offSetX / width;
        this.setState({
            currentPage:currentPage
        });
    },

    renderItem() {
        var itemAry = [];
        var imgAry = this.state.bookList;
        console.log("this is the book list: ", imgAry);
        for (var i = 0; i<imgAry.length-2; i=i+2) {
            var item = imgAry[i];
            itemAry.push(
              <View key={i} style={styles.topLiterature}>
                <Book bookName={imgAry[i].title} author={imgAry[i].author}  pic={imgAry[i].image}/>
                <Book bookName={imgAry[i+1].title} author={imgAry[i+1].author} pic={imgAry[i+1].image} />
                <Book bookName={imgAry[i+2].title} author={imgAry[i+2].author} pic={imgAry[i+2].image} />
              </View>
            )
        }
        return itemAry;
    },

    renderPagingIndicator() {
        var itemAry = [], autoColor;
        var  imgAry = this.state.bookList;
        for (var i = 0; i<Math.ceil(imgAry.length / 3) ; i++) {
            var item = imgAry[i];
            autoColor = (this.state.currentPage === i) ? {color:'gray'} : {color:'gainsboro'};
            itemAry.push(
                <Text key={i} style={[{fontSize:25}, autoColor]}>&bull;</Text>
            )
        }
        return itemAry;
    },
});

var styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        height: 205
    },

    scrollViewStyle: {
        // 背景色
        backgroundColor:'white',
        // 上边距
        marginTop:3
    },
    pagingIndicatorStyle: {
        // 背景色(使背景色为全透明)
        backgroundColor:'rgba(255,255,255,0.0)',
        // 尺寸
        width:width,
        // 主轴方向与对齐方式
        flexDirection:'row',
        justifyContent:'center',
        // 绝对定位,使页码指示器盖在scrollView上面
        position:'absolute',
        bottom:0
    },

    topLiterature: {
      alignItems: "center",
      flexDirection:'row',
      height: 100,
      width: width,
    },
});

module.exports = CustomScrollView;
