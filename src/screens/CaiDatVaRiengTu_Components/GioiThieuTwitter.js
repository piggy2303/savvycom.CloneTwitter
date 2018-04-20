import React, { Component } from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";

import Header from "./components/Header";
import ContentCaption from "./components/ContentCaption";
import ContentDetail from "./components/ContentDetail";
import styles from "../CaiDatVaRiengTuStyle";
import ContentDetail_subTitle from "./components/ContentDetail_subTitle";
import ContentTickBox from "./components/ContentTickBox";

export default class GioiThieuTwitter extends Component {
  render() {
    return (
      <View style={styles.ViewHeader}>
        <View style={styles.ViewHeader}>
          <Header
            iconName="md-arrow-back"
            iconColor="rgb(3,169,244)"
            title="Giới thiệu Twitter"
            navigate={this.props.navigation.navigate}
            navigateDestination="Home"
          />
        </View>
        <View style={styles.ViewContent}>
          <ScrollView>
            <ContentDetail
              title="Phiên bản 7.41.0"
              navigate={this.props.navigation.navigate}
              navigateDestination=""
            />
            <ContentCaption title="Trợ giúp" />
            <ContentDetail
              title="Trung tâm trợ giúp"
              navigate={this.props.navigation.navigate}
              navigateDestination=""
            />

            <ContentCaption title="Trợ giúp" />
            <ContentDetail
              title="Điều khoản dịch vụ"
              navigate={this.props.navigation.navigate}
              navigateDestination=""
            />
            <ContentDetail
              title="Chính sách riêng tư"
              navigate={this.props.navigation.navigate}
              navigateDestination=""
            />
            <ContentDetail
              title="Sử dụng cookie"
              navigate={this.props.navigation.navigate}
              navigateDestination=""
            />
            <ContentDetail
              title="Thông báo về pháp lý"
              navigate={this.props.navigation.navigate}
              navigateDestination=""
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}
