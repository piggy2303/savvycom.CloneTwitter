import React, { Component } from "react";
import { View, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import styles from "./HeaderStyle";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.ViewMain}>
        <View style={styles.icon}>
          <Ionicons
            name={this.props.iconName}
            size={30}
            color={this.props.iconColor}
          />
        </View>
        <View style={styles.title}>
          <Text style={styles.titleText}>{this.props.title}</Text>
        </View>
      </View>
    );
  }
}
