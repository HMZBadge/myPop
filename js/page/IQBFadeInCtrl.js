

import React, { Component } from 'react';
import {
  Animated,
  View,
  StyleSheet,
  Text
} from 'react-native';

import PropTypes from 'prop-types';
import FadeInView from './FadeInView';
import IQBLayoutAnimation from './IQBLayoutAnimation';

export default class IQBFadeInCtrl extends Component {
  constructor(props) {
    super(props);
    this._onForward = this._onForward.bind(this);
  }

  static propTypes = {
    title: PropTypes.string,
    navigator: PropTypes.object.isRequired,
  }



  _onForward() {
    this.props.navigator.push({
        component:IQBLayoutAnimation,
        title: '第三页',
        rightButtonTitle: "哈哈",
        
    });
  }
  
  render() {
    return (
      <FadeInView style={{width: 250, height: 50, top: 150, backgroundColor: 'powderblue'}}>
        <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}
        onPress={this._onForward}
        >Fading in</Text>
      </FadeInView>
    );
  }
}

