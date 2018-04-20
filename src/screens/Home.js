import React, { Component } from 'react';
import {  View, Text, } from 'react-native';

export default class Home extends Component {
  static navigationOptions = {
    drawerLabel: 'Trang chu',
    // drawerIcon: ({ tintColor }) => (
    //   <Image
    //     source={require('./notif-icon.png')}
    //     style={[styles.icon, {tintColor: tintColor}]}
    //   />
    // ),
  };

  render() {
    return (
      <View>
        <Text> Homesdf </Text>
      </View>
    );
  }
}
