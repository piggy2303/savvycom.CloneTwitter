import React, { Component } from "react";
import { View, Text, Dimensions } from "react-native";
import { DrawerNavigator, StackNavigator } from "react-navigation";

import Home from "./screens/Home";
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

const Drawer = DrawerNavigator(
  {
    Home: { screen: Home },
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
