import React, { Component } from 'react';
import { 
    NavigatorIOS, 
    Text, 
    View, 
    TouchableHighlight, 
    StyleSheet } from 'react-native';

import PropTypes from 'prop-types';

import IQBFadeInCtrl from './IQBFadeInCtrl'

export default class NavigatorIOSApp extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: MyScene,
          title: '首页',
        }}
        style={{flex: 1}}
      />
    );
  }
}

class MyScene extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context);
    this._onForward = this._onForward.bind(this);
    this._onBack = this._onBack.bind(this);
  }

  _onForward() {
    this.props.navigator.push({
        component:IQBFadeInCtrl,
        title: '第二页',
        rightButtonTitle: "哈哈",
        
    });
  }

  _onBack() {

  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Current Scene: { this.props.title }</Text>

        <TouchableHighlight onPress={this._onForward}>
          <Text>Tap me to load the next scene</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });