import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import styles from './ContentCaptionStyle';

export default class ContentCaption extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.Viewmain}>
        <Text style={styles.titleText}> {this.props.title} </Text>
      </View>
    );
  }
}
