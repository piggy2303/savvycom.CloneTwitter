import React, { Component } from "react";
import { View, Text } from "react-native";
import { StackNavigator } from "react-navigation";

import Drawer from "./Navigator";
// import Home from "./screens/Home";
// import HoSo from "./screens/HoSo";
// import DanhSach from "./screens/DanhSach";
// import DauTrang from "./screens/DauTrang";
// import KhoanhKhac from "./screens/KhoanhKhac";

import TaiKhoan from './screens/CaiDatVaRiengTu_Components/TaiKhoan';

import TrungTamTroGiup from "./screens/TrungTamTroGiup";

const AppStack = StackNavigator(
  {
    Drawer: { screen: Drawer },
    
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  }
);

export default class App extends Component {
  render() {
    return <Drawer />;
  }
}
