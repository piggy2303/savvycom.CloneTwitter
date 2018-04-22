import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./Style";

export default class Content extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity 
      style={styles.TouchMain}
      onPress={() => this.props.navigate(this.props.navigateDestination)}
      >
        <View style={styles.ContentView}>
          <Text style={styles.ContentText}>{this.props.textTitle}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
