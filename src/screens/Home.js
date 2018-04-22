import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from './HomeStyle';

import HomeData from './HomeData';
import HeaderHome from './Home_Components/HeaderHome';

const data = HomeData();
export default class Home extends Component {
  render() {
    return (
      <View style={styles.ViewMain} >
        <View style= {styles.ViewHeader} >
          <HeaderHome
            title="Trang chủ"
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
