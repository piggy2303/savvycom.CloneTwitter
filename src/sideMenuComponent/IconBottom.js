import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./IconBottomStyle";

export default class IconBottom extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.ViewMain}>
        <View style={styles.IconLeft}>
          <Ionicons
            size={30}
            name={this.props.iconName1}
            color="rgb(3,169,244)"
          />
        </View>
        <View style={styles.IconRight}>
          <Ionicons
            size={30}
            name={this.props.iconName2}
            color="rgb(3,169,244)"
          />
        </View>
      </View>
    );
  }
}
