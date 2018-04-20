import React, { Component } from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";

import Header from "./components/Header";
import ContentCaption from "./components/ContentCaption";
import ContentDetail from "./components/ContentDetail";
import styles from "../CaiDatVaRiengTuStyle";
import ContentDetail_subTitle from "./components/ContentDetail_subTitle";
import ContentTickBox from "./components/ContentTickBox";

export default class SuDungDuLieu extends Component {
  render() {
    return (
      <View style={styles.ViewHeader}>
        <View style={styles.ViewHeader}>
          <Header
            iconName="md-arrow-back"
            iconColor="rgb(3,169,244)"
            title="Sử dụng dữ liệu"
            navigate={this.props.navigation.navigate}
            navigateDestination="Home"
          />
        </View>
        <View style={styles.ViewContent}>
          <ScrollView>
            <ContentCaption title="Hình ảnh" />
            <ContentTickBox title="Xem trước hình ảnh" />

            <ContentCaption title="Video" />
            <ContentDetail_subTitle
              title="Tự động phát video"
              subTitle="Dữ liệu di động & wifi"
            />
            <ContentDetail_subTitle
              title="Video chất lượng cao"
              subTitle="Chỉ wifi"
            />

            <ContentCaption title="Đồng bộ dữ liệu" />
            <ContentTickBox title="Đồng bộ dữ liệu" />
            <ContentDetail_subTitle
              title="Khoảng thời gian đồng bộ"
              subTitle="Hàng ngày"
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}
