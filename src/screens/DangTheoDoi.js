import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import Header from "./CaiDatVaRiengTu_Components/components/Header";
import styles from "./CaiDatVaRiengTuStyle";

import Content from "./TheoDoi_Component/Content";
import TinNhanData from './Home_Components/TinNhan_Component/TinNhanData';

const data = TinNhanData();

export default class DangTheoiDoi extends Component {
  randomImage() {
    let a = Math.floor(Math.random() * 14 + 1);
    return a;
  }

  render() {
    return (
      <View style={styles.ViewHeader}>
        <View style={styles.ViewHeader}>
          <Header
            iconName="md-arrow-back"
            iconColor="rgb(3,169,244)"
            title="Đang theo dõi"
            navigate={this.props.navigation.navigate}
            navigateDestination="Home"
          />
        </View>
        <View style={styles.ViewContent}>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <Content
                image={this.randomImage()}
                data={item}
                role ="DangTheoiDoi"
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    );
  }
}
