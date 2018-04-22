import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./sideMenuStyle";

import IconContent from "./sideMenuComponent/IconContent";
import Content from "./sideMenuComponent/Content";
import IconBottom from "./sideMenuComponent/IconBottom";
import HeaderAvatar from './sideMenuComponent/HeaderAvatar'

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
      <View style={styles.ViewMain}>
        <View style={styles.ViewTop}>
          <HeaderAvatar
            name="Nguyen Tuan Anh"
            nickName="@nguyentuanh123"
            dangTheoDoi="81"
            nguoiTheoDoi="21"
            navigate={this.props.navigation.navigate}
            navigateDestinationAvatar="HoSo"
            navigateDestinationNguoiTheoDoi="NguoiTheoDoi"
            navigateDestinationDangTheoDoi="DangTheoDoi"
          />
        </View>
        <View style={styles.ViewHoso}>
          <IconContent
            iconName="ios-person-outline"
            textTitle="Hồ sơ"
            navigate={this.props.navigation.navigate}
            navigateDestination="HoSo"
          />
          <IconContent
            iconName="ios-list-box-outline"
            textTitle="Danh sách"
            navigate={this.props.navigation.navigate}
            navigateDestination="DanhSach"
          />
          <IconContent
            iconName="ios-bookmark-outline"
            textTitle="Dấu trang"
            navigate={this.props.navigation.navigate}
            navigateDestination="DauTrang"
          />
          <IconContent
            iconName="ios-flash-outline"
            textTitle="Khoảnh khắc"
            navigate={this.props.navigation.navigate}
            navigateDestination="KhoanhKhac"
          />
        </View>
        <View style={styles.ViewCaidat}>
          <Content
            textTitle="Cài đặt và riêng tư"
            navigate={this.props.navigation.navigate}
            navigateDestination="CaiDatVaRiengTu"
          />
          <Content
            textTitle="Trung tâm trợ giúp"
            navigate={this.props.navigation.navigate}
            navigateDestination="TrungTamTroGiup"
          />
        </View>
        <View style={styles.ViewQR}>
          <IconBottom
            iconName1="ios-moon-outline"
            iconName2="ios-qr-scanner-outline"
          />
        </View>
      </View>
    );
  }
}
