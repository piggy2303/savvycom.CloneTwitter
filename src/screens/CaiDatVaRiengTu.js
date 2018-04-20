import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import Header from "./CaiDatVaRiengTu_Components/components/Header";

import styles from './CaiDatVaRiengTuStyle';

export default class CaiDatVaRiengTu extends Component {
  render() {
    return (
      <View style={styles.ViewHeader}>
        <View style={styles.ViewHeader}>
          <Header
            iconName="md-arrow-back"
            iconColor="rgb(3,169,244)"
            title="Cài đặt và riêng tư"
          />
        </View>
        <View style={styles.ViewContent}>
          <Text>content</Text>
        </View>
      </View>
    );
  }
}
