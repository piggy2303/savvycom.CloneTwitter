import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./Style";

export default class IconContent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity 
      style={styles.TouchMain}
      onPress={() => this.props.navigate(this.props.navigateDestination)}
      >
        <View style={styles.Icon}>
          <Ionicons
            size={30}
            name={this.props.iconName}
            color="rgb(69,90,100)"
          />
        </View>
        <View style={styles.ViewText}>
          <Text style={styles.Text}>{this.props.textTitle}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
