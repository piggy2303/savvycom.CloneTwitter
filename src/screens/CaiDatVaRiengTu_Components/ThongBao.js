import React, { Component } from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";

import Header from "./components/Header";
import ContentCaption from "./components/ContentCaption";
import ContentDetail from "./components/ContentDetail";
import styles from "../CaiDatVaRiengTuStyle";
import ContentDetail_subTitle from "./components/ContentDetail_subTitle";
import ContentTickBox from "./components/ContentTickBox";

export default class ThongBao extends Component {
  render() {
    return (
      <View style={styles.ViewHeader}>
        <View style={styles.ViewHeader}>
          <Header
            iconName="md-arrow-back"
            iconColor="rgb(3,169,244)"
            title="Thông báo"
            navigate={this.props.navigation.navigate}
            navigateDestination="Home"
          />
        </View>
        <View style={styles.ViewContent}>
          <ScrollView>
            <ContentCaption title="Bộ lọc" />
            <ContentTickBox title="Bộ lọc chất lượng" />
            <ContentDetail
              title="Bộ lọc nâng cao"
              navigate={this.props.navigation.navigate}
              navigateDestination=""
            />
            <ContentDetail
              title="Từ tắt tiếng"
              navigate={this.props.navigation.navigate}
              navigateDestination=""
            />

            <ContentCaption title="Tùy chọn" />
            <ContentTickBox title="Biểu tượng tổng số thông báo" />
            <ContentDetail
              title="Thông báo đẩy"
              navigate={this.props.navigation.navigate}
              navigateDestination=""
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}
