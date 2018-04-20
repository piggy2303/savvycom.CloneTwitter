import React, { Component } from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";

import Header from "./components/Header";
import ContentCaption from "./components/ContentCaption";
import ContentDetail from "./components/ContentDetail";
import styles from "../CaiDatVaRiengTuStyle";
import ContentDetail_subTitle from "./components/ContentDetail_subTitle";
import ContentTickBox from "./components/ContentTickBox";

export default class HienThiVaAmThanh extends Component {
  render() {
    return (
      <View style={styles.ViewHeader}>
        <View style={styles.ViewHeader}>
          <Header
            iconName="md-arrow-back"
            iconColor="rgb(3,169,244)"
            title="Hiển thị và âm thanh"
            navigate={this.props.navigation.navigate}
            navigateDestination="Home"
          />
        </View>
        <View style={styles.ViewContent}>
          <ScrollView>
            <ContentCaption title="Hiển thị" />
            <ContentDetail_subTitle title="Chế độ ban đêm" subTitle="Tắt" navigate={this.props.navigation.navigate}
              navigateDestination=""/>

            <ContentCaption title="Âm thanh" />
            <ContentTickBox title="Hiệu ứng âm thanh"/>

            <ContentCaption title="Trình duyệt web" />
            <ContentTickBox title="Dùng trình duyệt web trong ứng dụng"/>
          </ScrollView>
        </View>
      </View>
    );
  }
}
