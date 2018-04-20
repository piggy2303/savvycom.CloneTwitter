import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("HoSo")}>
          <Text> Ho so </Text>
        </TouchableOpacity >
        <TouchableOpacity onPress={() => this.props.navigation.navigate("DanhSach")}>
          <Text> Danh Sach </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("DauTrang")}>
          <Text> Dau Trang </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("KhoanhKhac")}>
          <Text> Khoanh Khac </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("CaiDatVaRiengTu")}>
          <Text> Cai Dat </Text>
        </TouchableOpacity >
        <TouchableOpacity onPress={() => this.props.navigation.navigate("TrungTamTroGiup")}>
          <Text> Tro Giup </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
