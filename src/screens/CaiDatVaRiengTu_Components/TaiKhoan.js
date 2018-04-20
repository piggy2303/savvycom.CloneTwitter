import React, { Component } from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";

import Header from "./components/Header";
import ContentCaption from "./components/ContentCaption";
import ContentDetail from "./components/ContentDetail";
import styles from "../CaiDatVaRiengTuStyle";
import ContentDetail_subTitle from "./components/ContentDetail_subTitle";

export default class TaiKhoan extends Component {
  render() {
    return (
      <View style={styles.ViewHeader}>
        <View style={styles.ViewHeader}>
          <Header
            iconName="md-arrow-back"
            iconColor="rgb(3,169,244)"
            title="Tài khoản"
            navigate={this.props.navigation.navigate}
            navigateDestination="Home"
          />
        </View>
        <View style={styles.ViewContent}>
          <ScrollView>
            <ContentCaption title="Đăng nhập và bảo mật" />

            <ContentDetail_subTitle
              title="Tên người dùng"
              subTitle="NguyenTuanAnh"
              navigate={this.props.navigation.navigate}
              navigateDestination=""
            />
            <ContentDetail_subTitle
              title="Số điện thoại"
              subTitle="+84 167 331 6903"
              navigate={this.props.navigation.navigate}
              navigateDestination=""
            />

            <ContentDetail_subTitle
              title="Email"
              subTitle="nguyentuananh111@gmail.com(Đang chờ)"
              navigate={this.props.navigation.navigate}
              navigateDestination=""
            />
            <ContentDetail
              title="Mật Khẩu"
              navigate={this.props.navigation.navigate}
              navigateDestination=""
            />

            <ContentDetail
              title="Bảo mật"
              navigate={this.props.navigation.navigate}
              navigateDestination=""
            />

            <ContentCaption title="Dữ liệu và sự cho phép" />
            <ContentDetail_subTitle
               title="Quốc gia"
              subTitle="Việt Nam"
              navigate={this.props.navigation.navigate}
              navigateDestination=""
            />
            <ContentDetail
              title="Dữ liệu Twitter của bạn"
              navigate={this.props.navigation.navigate}
              navigateDestination=""
            />
            <ContentDetail
              title="Đăng xuất"
              navigate={this.props.navigation.navigate}
              navigateDestination=""
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}
