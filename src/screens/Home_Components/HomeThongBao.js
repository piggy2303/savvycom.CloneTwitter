import React, { Component } from "react";
import { View, Text,FlatList } from "react-native";
import HeaderHome from "./HeaderHome";
import styles from "../HomeStyle";

import Content from "./ThongBao_Component/Content";
import ThongBaoData from "./ThongBao_Component/ThongBaoData";

const dataThongBaoData = ThongBaoData();

export default class HomeThongBao extends Component {
  render() {
    return (
      <View style={styles.ViewMain}>
        <View style={styles.ViewHeader}>
          <HeaderHome
            title="Thông báo"
            navigate={this.props.navigation.navigate}
            navigateDestination="DrawerOpen"
          />
        </View>
        <View style={styles.ViewContent}>
          <FlatList
            data={dataThongBaoData}
            renderItem={({ item }) => <Content data={item} />}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    );
  }
}
