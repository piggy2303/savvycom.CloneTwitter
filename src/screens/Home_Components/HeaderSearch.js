import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image,TextInput } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./HeaderStyle";

export default class HeaderSearch extends Component {
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
        <View style={styles.ViewTitleSearch}>
          <TextInput placeholder="Tìm kiếm Twitter"/>
        </View>
        <View style={styles.BtnAdd}>
          <Ionicons
            size={30}
            name="ios-person-add-outline"
            color="rgb(3,169,244)"
          />
        </View>
      </View>
    );
  }
}
