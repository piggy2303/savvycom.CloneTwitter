import React, { Component } from "react";
import { View, Text } from "react-native";
import Header from "./CaiDatVaRiengTu_Components/components/Header";
import styles from "./CaiDatVaRiengTuStyle";

export default class DauTrang extends Component {
  render() {
    return (
      <View style={styles.ViewHeader}>
        <View style={styles.ViewHeader}>
          <Header
            iconName="md-arrow-back"
            iconColor="rgb(3,169,244)"
            title="Dấu trang"
            navigate={this.props.navigation.navigate}
            navigateDestination="Home"
          />
        </View>
        <View style={styles.ViewContent}>
          <View style={styles.ViewText}>
            <Text style={styles.TextMain}>Bạn chưa thêm bất kỳ Tweet</Text>
            <Text style={styles.TextMain}>nào vào Dấu trang</Text>
            <Text style={styles.TextSub}>
              khi bạn thêm chúng sẽ xuất hiện ra ở đây
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
