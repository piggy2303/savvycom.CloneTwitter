import React, { Component } from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";

import Header from "./components/Header";
import ContentCaption from "./components/ContentCaption";
import ContentDetail from "./components/ContentDetail";
import styles from "../CaiDatVaRiengTuStyle";
import ContentDetail_subTitle from "./components/ContentDetail_subTitle";
import ContentTickBox from "./components/ContentTickBox";

export default class RiengTuVaBaoMat extends Component {
  render() {
    return (
      <View style={styles.ViewHeader}>
        <View style={styles.ViewHeader}>
          <Header
            iconName="md-arrow-back"
            iconColor="rgb(3,169,244)"
            title="Riêng tư và bảo mật"
            navigate={this.props.navigation.navigate}
            navigateDestination="Home"
          />
        </View>
        <View style={styles.ViewContent}>
          <ScrollView>
            <ContentCaption title="Tweet" />
            <ContentTickBox title="Bảo vệ tweet của tôi" />
            <ContentTickBox title="Đánh dấu ảnh" />

            <ContentCaption title="Tin nhắn trực tiếp" />
            <ContentTickBox title="Nhận yêu cầu tin nhắn" />
            <ContentTickBox title="Hiện xác nhận đã đọc" />

            <ContentCaption title="Video trực tuyến" />
            <ContentTickBox title="Kết nối với Periscope" />

            <ContentCaption title="Có thể tìm thấy danh bạ" />
            <ContentDetail
              title="Tìm thấy danh bạ"
              navigate={this.props.navigation.navigate}
              navigateDestination=""
            />

            <ContentCaption title="Bảo mật" />
            <ContentTickBox title="Hiển thị phương tiện chứa nội dung nhạy cảm" />
            <ContentDetail
              title="Tài khoản bị chặn"
              navigate={this.props.navigation.navigate}
              navigateDestination=""
            />
            <ContentDetail
              title="Tài khoản bị tắt tiếng"
              navigate={this.props.navigation.navigate}
              navigateDestination=""
            />
            <ContentDetail
              title="Từ tắt tiếng"
              navigate={this.props.navigation.navigate}
              navigateDestination=""
            />

            <ContentCaption title="Cá nhận hóa và dữ liệu" />
            <ContentDetail_subTitle
              title="Cá nhận hóa và dữ liệu"
              subTitle="Cho phép một vài"
              navigate={this.props.navigation.navigate}
              navigateDestination=""
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}
