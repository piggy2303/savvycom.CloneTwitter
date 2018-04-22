import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import HeaderHome from "./HeaderHome";

import Content from './TinNhan_Component/Content'
import styles from "../HomeStyle";

import TinNhanData from './TinNhan_Component/TinNhanData';

const data = TinNhanData();

export default class TinNhan extends Component {
  randomImage() {
    let a = Math.floor(Math.random() * 14 + 1);
    return a;
  }
  randomTime() {
    let a = Math.floor(Math.random() * 12 + 1);
    return a;
  }

  render() {
    return (
      <View style={styles.ViewMain}>
        <View style={styles.ViewHeader}>
          <HeaderHome
            title="Tin nhắn"
            navigate={this.props.navigation.navigate}
            navigateDestination="DrawerOpen"
          />
        </View>
        <View style={styles.ViewContent}>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <Content
                navigate={this.props.navigation.navigate}
                navigateDestination="TinNhanDetail"
                image={this.randomImage()}
                time={this.randomTime()}
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
