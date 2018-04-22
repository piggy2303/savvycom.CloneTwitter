import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./HeaderStyle";

export default class HeaderHome extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.ViewMain}>
        <TouchableOpacity
          style={styles.ViewAvatar}
          onPress={() => this.props.navigate(this.props.navigateDestination)}
        >
          <Image
            style={styles.Avatar}
            source={require("../../images/avatar.jpg")}
          />
        </TouchableOpacity>
        <View style={styles.ViewTitle}>
          <Text style={styles.TextTitle}>{this.props.title}</Text>
        </View>
      </View>
    );
  }
}
