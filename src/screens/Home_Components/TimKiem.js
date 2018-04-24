import React, { Component } from "react";
import { View, Text,FlatList } from "react-native";
import HeaderSearch from "./HeaderSearch";

import XuHuongChoBan from "./TimKiem_Component/XuHuongChoBan";
import styles from "../HomeStyle";
import ContentCaption from "../CaiDatVaRiengTu_Components/components/ContentCaption";

import XuHuongChoBan_Data from "./TimKiem_Component/XuHuongChoBan_Data";

const dataXuHuongChoBan_Data = XuHuongChoBan_Data();

export default class TimKiem extends Component {
  render() {
    return (
      <View style={styles.ViewSearch}>
        <View style={styles.ViewHeader}>
          <HeaderSearch
            navigate={this.props.navigation.navigate}
            navigateDestination="DrawerOpen"
          />
        </View>
        <View style={styles.ViewContent}>
        <ContentCaption title="Xu hướng cho bạn" />
          <FlatList
            data={dataXuHuongChoBan_Data}
            renderItem={({ item }) => <XuHuongChoBan data={item} />}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    );
  }
}
