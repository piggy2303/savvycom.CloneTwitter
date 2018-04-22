import React, { Component } from "react";
import { View, Text, Dimensions } from "react-native";
import {
  DrawerNavigator,
  StackNavigator,
  TabNavigator,
  TabBarBottom
} from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";

import HoSo from "./screens/HoSo";
import DanhSach from "./screens/DanhSach";
import DauTrang from "./screens/DauTrang";
import KhoanhKhac from "./screens/KhoanhKhac";
import TrungTamTroGiup from "./screens/TrungTamTroGiup";

import SideMenu from "./SideMenu";

import CaiDatVaRiengTu from "./screens/CaiDatVaRiengTu";
import TaiKhoan from "./screens/CaiDatVaRiengTu_Components/TaiKhoan";
import RiengTuVaBaoMat from "./screens/CaiDatVaRiengTu_Components/RiengTuVaBaoMat";
import ThongBao from "./screens/CaiDatVaRiengTu_Components/ThongBao";
import TuyChonNoiDung from "./screens/CaiDatVaRiengTu_Components/TuyChonNoiDung";
import HienThiVaAmThanh from "./screens/CaiDatVaRiengTu_Components/HienThiVaAmThanh";
import SuDungDuLieu from "./screens/CaiDatVaRiengTu_Components/SuDungDuLieu";
import KhaNangTruyCap from "./screens/CaiDatVaRiengTu_Components/KhaNangTruyCap";
import ViTriVaProxy from "./screens/CaiDatVaRiengTu_Components/ViTriVaProxy";
import GioiThieuTwitter from "./screens/CaiDatVaRiengTu_Components/GioiThieuTwitter";

import NguoiTheoDoi from "./screens/NguoiTheoDoi";
import DangTheoDoi from "./screens/DangTheoDoi";

import Home from "./screens/Home";
import HomeThongBao from "./screens/Home_Components/HomeThongBao";
import TimKiem from "./screens/Home_Components/TimKiem";
import TinNhan from "./screens/Home_Components/TinNhan";

const CaiDatVaRiengTuStack = StackNavigator(
  {
    CaiDatVaRiengTu: { screen: CaiDatVaRiengTu },
    TaiKhoan: { screen: TaiKhoan },
    RiengTuVaBaoMat: { screen: RiengTuVaBaoMat },
    ThongBao: { screen: ThongBao },
    TuyChonNoiDung: { screen: TuyChonNoiDung },
    HienThiVaAmThanh: { screen: HienThiVaAmThanh },
    SuDungDuLieu: { screen: SuDungDuLieu },
    KhaNangTruyCap: { screen: KhaNangTruyCap },
    ViTriVaProxy: { screen: ViTriVaProxy },
    GioiThieuTwitter: { screen: GioiThieuTwitter }
  },
  {
    headerMode: "none"
  }
);

const HomeTabHeader = StackNavigator({
  Home: { screen: Home }
});

const HomeTab = TabNavigator(
  {
    Home: { screen: Home },
    TimKiem: { screen: TimKiem },
    HomeThongBao: { screen: HomeThongBao },
    TinNhan: { screen: TinNhan }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = `ios-home${focused ? "" : "-outline"}`;
        } else if (routeName === "HomeThongBao") {
          iconName = `ios-notifications${focused ? "" : "-outline"}`;
        } else if (routeName === "TimKiem") {
          iconName = `ios-search${focused ? "" : "-outline"}`;
        } else if (routeName === "TinNhan") {
          iconName = focused ? "ios-mail-open" : "ios-mail-outline";
        }
        return <Ionicons name={iconName} size={30} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      style: {
        backgroundColor: "white",
        height: 50
      },
      // indicatorStyle: {
      //   backgroundColor: "rgb(3,169,244)",
      //   height: 3
      // },
      activeTintColor: "rgb(3,169,244)",
      inactiveTintColor: "rgb(96,125,139)",
      showIcon: true,
      showLabel: false,
      backgroundColor: "white"
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: "bottom",
    animationEnabled: false,
    swipeEnabled: true
  }
);

const Drawer = DrawerNavigator(
  {
    Home: { screen: HomeTab },
    HoSo: { screen: HoSo },
    DanhSach: { screen: DanhSach },
    DauTrang: { screen: DauTrang },
    KhoanhKhac: { screen: KhoanhKhac },
    CaiDatVaRiengTu: { screen: CaiDatVaRiengTuStack },
    TrungTamTroGiup: { screen: TrungTamTroGiup },
    TaiKhoan: { screen: TaiKhoan },
    NguoiTheoDoi: { screen: NguoiTheoDoi },
    DangTheoDoi: { screen: DangTheoDoi }
  },
  {
    initialRouteName: "Home",
    drawerWidth: 310,
    contentOptions: {
      activeTintColor: "#e91e63"
    },

    contentComponent: props => <SideMenu {...props} />
  }
);

export default Drawer;
