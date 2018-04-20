import React, { Component } from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";

import Header from "./components/Header";
import ContentCaption from "./components/ContentCaption";
import ContentDetail from "./components/ContentDetail";
import styles from "../CaiDatVaRiengTuStyle";
import ContentDetail_subTitle from "./components/ContentDetail_subTitle";
import ContentTickBox from "./components/ContentTickBox";

export default class TuyChonNoiDung extends Component {
  render() {
    return (
      <View style={styles.ViewHeader}>
        <View style={styles.ViewHeader}>
          <Header
            iconName="md-arrow-back"
            iconColor="rgb(3,169,244)"
            title="Tùy chọn nội dung"
            navigate={this.props.navigation.navigate}
            navigateDestination="Home"
          />
        </View>
        <View style={styles.ViewContent}>
          <ScrollView>
            <ContentCaption title="Dòng thời gian" />
            <ContentTickBox title="Hiện cho tôi các tweet hay nhất trước" />

            <ContentCaption title="Khám phá" />
            <ContentDetail
              title="Chủ đề phổ biến"
              navigate={this.props.navigation.navigate}
              navigateDestination=""
            />
            <ContentDetail
              title="Bộ lọc tìm kiếm"
              navigate={this.props.navigation.navigate}
              navigateDestination=""
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}
