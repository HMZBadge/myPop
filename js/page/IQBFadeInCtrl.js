

import React, { Component } from 'react';
import {
  Animated,
  View,
  StyleSheet,
  Text
} from 'react-native';

import PropTypes from 'prop-types';
import FadeInView from './FadeInView';

export default class IQBFadeInCtrl extends Component {
  constructor(props) {
    super(props);

  }

  
  render() {
    return (
      <FadeInView style={{width: 250, height: 50, top: 150, backgroundColor: 'powderblue'}}>
        <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
      </FadeInView>
    );
  }
}

