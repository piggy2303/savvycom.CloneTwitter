import React, { Component } from 'react';
import {  View, Text,} from 'react-native';
import styles from './MessStyle';

export default class MessLeft extends Component {
  render() {
    return (
      <View style={styles.LeftView}>
        <Text style={styles.LeftText} > {this.props.mess} </Text>
      </View>
    );
  }
}

