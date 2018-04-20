import React, { Component } from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";

import Header from "./CaiDatVaRiengTu_Components/components/Header";
import ContentCaption from "./CaiDatVaRiengTu_Components/components/ContentCaption";
import ContentDetail from "./CaiDatVaRiengTu_Components/components/ContentDetail";
import styles from "./CaiDatVaRiengTuStyle";

export default class CaiDatVaRiengTu extends Component {
  render() {
    return (
      <View style={styles.ViewHeader}>
        <View style={styles.ViewHeader}>
          <Header
            iconName="md-arrow-back"
            iconColor="rgb(3,169,244)"
            title="Cài đặt và riêng tư"
            navigate={this.props.navigation.navigate}
            navigateDestination="Home"
          />
        </View>
        <View style={styles.ViewContent}>
          <ScrollView>
            <ContentCaption title="@NguyenTuanAnh" />
            <ContentDetail
              title="Tài Khoản"
              navigate={this.props.navigation.navigate}
              navigateDestination="TaiKhoan"
            />
            <ContentDetail
              title="Riêng tư và bảo mật"
              navigate={this.props.navigation.navigate}
              navigateDestination="RiengTuVaBaoMat"
            />

            <ContentDetail
              title="Thông báo"
              navigate={this.props.navigation.navigate}
              navigateDestination="ThongBao"
            />
            <ContentDetail
              title="Tùy chọn nội dung"
              navigate={this.props.navigation.navigate}
              navigateDestination="TuyChonNoiDung"
            />

            <ContentCaption title="Chung" />
            <ContentDetail
              title="Hiển thị và âm thanh"
              navigate={this.props.navigation.navigate}
              navigateDestination="HienThiVaAmThanh"
            />
            <ContentDetail
              title="Sử dụng dữ liệu"
              navigate={this.props.navigation.navigate}
              navigateDestination="SuDungDuLieu"
            />
            <ContentDetail
              title="Khả năng truy cập"
              navigate={this.props.navigation.navigate}
              navigateDestination="KhaNangTruyCap"
            />
            <ContentDetail
              title="Vị trí và proxy"
              navigate={this.props.navigation.navigate}
              navigateDestination="ViTriVaProxy"
            />
            <ContentDetail
              title="Giới thiệu twitter"
              navigate={this.props.navigation.navigate}
              navigateDestination="GioiThieuTwitter"
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}
