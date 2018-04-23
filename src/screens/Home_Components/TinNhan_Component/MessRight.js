import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import styles from './MessStyle';

export default class MessRight extends Component {
  render() {
    return (
      <View style={styles.RightView}>
        <Text style={styles.RightText}> {this.props.mess} </Text>
      </View>
    );
  }
}
