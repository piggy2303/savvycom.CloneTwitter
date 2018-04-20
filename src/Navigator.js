import React, { Component } from "react";
import { View, Text } from "react-native";
import { DrawerNavigator } from "react-navigation";

import Home from "./screens/Home";
import HoSo from "./screens/HoSo";
import DanhSach from "./screens/DanhSach";
import DauTrang from "./screens/DauTrang";
import KhoanhKhac from "./screens/KhoanhKhac";
import CaiDatVaRiengTu from "./screens/CaiDatVaRiengTu";
import TrungTamTroGiup from "./screens/TrungTamTroGiup";

import SideMenu from "./SideMenu";

const Drawer = DrawerNavigator(
  {
    Home: { screen: Home },
    HoSo: { screen: HoSo },
    DanhSach: { screen: DanhSach },
    DauTrang: { screen: DauTrang },
    KhoanhKhac: { screen: KhoanhKhac },
    CaiDatVaRiengTu: { screen: CaiDatVaRiengTu },
    TrungTamTroGiup: { screen: TrungTamTroGiup },
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideMenu {...props} />
  }
);

export default Drawer;
