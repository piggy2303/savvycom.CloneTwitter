import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./ContentDetailStyle";

export default class ContentDetail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.Viewmain}>
        <TouchableOpacity
          onPress={() => this.props.navigate(this.props.navigateDestination)}
        >
          <Text style={styles.titleText}> {this.props.title} </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
