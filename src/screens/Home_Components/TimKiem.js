import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import HeaderHome from './HeaderHome';


import styles from '../HomeStyle';

export default class TimKiem extends Component {
  render() {
    return (
      <View style={styles.ViewMain} >
        <View style= {styles.ViewHeader} >
          <HeaderHome
            title="Tìm kiếm"
            navigate={this.props.navigation.navigate}
            navigateDestination="DrawerOpen"
          />
        </View>
        <View style={styles.ViewContent}>
          <Text> Homesdf </Text>
        </View>
      </View>
    );
  }
}
