import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import styles from "./HeaderAvatarStyle";
export default class HeaderAvatar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const link = this.props.link;
    return (
      <View style={styles.ViewMain}>
        <TouchableOpacity
          style={styles.ViewTop}
          onPress={() =>
            this.props.navigate(this.props.navigateDestinationAvatar)
          }
        >
          <Image
            style={styles.Avatar}
            source={require("../images/avatar.jpg")}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.ViewMiddle}
          onPress={() =>
            this.props.navigate(this.props.navigateDestinationAvatar)
          }
        >
          <Text style={styles.TextName}>{this.props.name}</Text>
          <Text style={styles.TextText}>{this.props.nickName}</Text>
        </TouchableOpacity>

        <View style={styles.ViewBottom}>
          <TouchableOpacity
            style={styles.ViewDangTheoDoi}
            onPress={() =>
              this.props.navigate(this.props.navigateDestinationDangTheoDoi)
            }
          >
            <Text style={styles.TextNumber}>{this.props.dangTheoDoi}</Text>
            <Text style={styles.TextText}> Đang theo dõi</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              this.props.navigate(this.props.navigateDestinationNguoiTheoDoi)
            }
            style={styles.ViewNguoiTheoDoi}
          >
            <Text style={styles.TextNumber}>{this.props.nguoiTheoDoi}</Text>
            <Text style={styles.TextText}> Người theo dõi</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
