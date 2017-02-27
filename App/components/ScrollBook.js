import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image
} from 'react-native';

// 引入Dimensions库
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

// 获取json中的数据
var imageData = require('../data/ImageData.json');

// 视图
var CustomScrollView = React.createClass({
    // 先初始化页码,确定初始化后显示哪个页面
    getInitialState(){
        return{
            // 初始化当前页码
            currentPage:0
        }
    },

    render(){
        return(
            <View style={styles.container}>
                {/* 实例化ScrollView */}
                <ScrollView style={styles.scrollViewStyle}
                            horizontal={true}   // 水平方向
                            showsHorizontalScrollIndicator={false}  // 隐藏水平指示器
                            showsVerticalScrollIndicator={false}    // 隐藏垂直指示器
                            pagingEnabled={true}    // 开启分页功能
                            onMomentumScrollEnd={this.onAnimationEnd}   // 当一帧滚动完毕的时候调用
                >
                    {/* 实例化内部子视图 */}
                    {this.renderItem()}
                </ScrollView>

                {/* 实例化分页指示器 */}
                <View style={styles.pagingIndicatorStyle}>
                    {this.renderPagingIndicator()}
                </View>
            </View>
        );
    },

    // 监听滚动
    onAnimationEnd(e){
        // 求出水平方向上的偏移量
        var offSetX = e.nativeEvent.contentOffset.x;
        // 计算当前页码
        var currentPage = offSetX / width;
        // 重新绘制UI
        this.setState({
            currentPage:currentPage
        });
    },

    // 分页指示器
    renderPagingIndicator() {
        var itemAry = [], autoColor;

        // 获取json中图片
        var  imgAry = imageData.data;

        // 根据json数据实例化视图
        for (var i = 0; i<imgAry.length; i++) {
            // 取出单个对象
            var item = imgAry[i];

            // 跟随当前页改变对应 点 的颜色
            autoColor = (this.state.currentPage === i) ? {color:'gray'} : {color:'gainsboro'}

            // 将子视图放进 itemAry
            itemAry.push(
                // 实例化视图
                <Text key={i} style={[{fontSize:25}, autoColor]}>&bull;</Text>
            )
        }

        // 返回数组
        return itemAry;
    },

    // scrollView子视图
    renderItem() {
        var itemAry = [];

        // 获取json中图片
        var imgAry = imageData.data;

        // 根据json数据实例化视图
        for (var i = 0; i<imgAry.length; i++) {
            // 取出单个对象
            var item = imgAry[i];
            // 将子视图放进 itemAry
            itemAry.push(
                // 实例化子视图
                <View key={i} style={styles.topLiterature}>
                  <View style={styles.itemStyle}>
                    <View style={{marginTop: 10}}></View>
                    <Image style={styles.picStyle} source={require('../images/exampples/Book_00.png')} />
                    <View style={{paddingLeft: 6}}>
                      <Text style={{color: "black"}}>至正枭雄传</Text>
                      <Text style={{color: "gray"}}>丁忑</Text>
                    </View>
                  </View>
                  <View style={styles.itemStyle}>
                    <View style={{marginTop: 10}}></View>
                    <Image style={styles.picStyle} source={require('../images/exampples/Book_01.png')} />
                      <View style={{paddingLeft: 6}}>
                        <Text style={{color: "black"}}>一天</Text>
                        <Text style={{color: "gray"}}>芈易</Text>
                      </View>
                  </View>
                  <View style={styles.itemStyle}>
                    <View style={{marginTop: 10}}></View>
                    <Image style={styles.picStyle} source={require('../images/exampples/Book_02.png')} />
                      <View style={{paddingLeft: 6}}>
                        <Text style={{color: "black"}}>均值回归</Text>
                        <Text style={{color: "gray"}}>小菌子</Text>
                      </View>
                  </View>
                  </View>
            )
        }

        // 返回数组
        return itemAry;
    },
});

// 样式
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

    itemStyle: {
      flex: 1,
      marginLeft:1.5,
      marginRight: 1.5,
      height: 125,
      width: 125
    },

    picStyle: {
      // 尺寸
      width: 100,
      height:145,
      // 图片等比例拉伸
      resizeMode:'contain',
      alignItems: "center",
      marginTop: 10,
      marginLeft: 9,
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
