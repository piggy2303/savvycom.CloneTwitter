import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./HomeStyle";

import HomeData from "./Home_Components/HomeData";
import HeaderHome from "./Home_Components/HeaderHome";
import HomeContent from "./Home_Components/HomeContent";

const data = HomeData();

export default class Home extends Component {
  render() {
    return (
      <View style={styles.ViewMain}>
        <View style={styles.ViewHeader}>
          <HeaderHome
            title="Trang chủ"
            navigate={this.props.navigation.navigate}
            navigateDestination="DrawerOpen"
          />
        </View>
        <View style={styles.ViewContent}>
          
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <HomeContent
                data={item}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    );
  }
}
