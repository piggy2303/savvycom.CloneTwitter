import React, { Component } from "react";
import { View, Text,TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import styles from "./HeaderStyle";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.ViewMain}>
        <TouchableOpacity 
        style={styles.icon}
        onPress={() => this.props.navigate(this.props.navigateDestination)}
        >
          <Ionicons
            name={this.props.iconName}
            size={30}
            color={this.props.iconColor}
          />
        </TouchableOpacity>
        <View style={styles.title}>
          <Text style={styles.titleText}>{this.props.title}</Text>
        </View>
      </View>
    );
  }
}
