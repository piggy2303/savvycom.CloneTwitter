import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./ContentStyle";

export default class Content extends Component {
  constructor(props) {
    super(props);
  }
  randomTime() {
    let a = Math.floor(Math.random() * 60 + 1);
    return a;
  }

  findImage(id) {
    switch (id) {
      case 1:
        link = require("../../images/a1.jpeg");
        break;
      case 2:
        link = require("../../images/a2.jpeg");
        break;
      case 3:
        link = require("../../images/a3.jpeg");
        break;
      case 4:
        link = require("../../images/a4.png");
        break;
      case 5:
        link = require("../../images/a5.png");
        break;
      case 6:
        link = require("../../images/a6.jpg");
        break;
      case 7:
        link = require("../../images/a7.jpeg");
        break;
      case 8:
        link = require("../../images/a8.png");
        break;
      case 9:
        link = require("../../images/a9.png");
        break;
      case 10:
        link = require("../../images/a10.png");
        break;
      case 11:
        link = require("../../images/a11.png");
        break;
      case 12:
        link = require("../../images/a12.jpeg");
        break;
      case 13:
        link = require("../../images/a13.jpeg");
        break;
      case 14:
        link = require("../../images/a14.png");
        break;
      default:
        link = require("../../images/a1.jpeg");
        break;
    }
    return link;
  }
  render() {
    return (
      <View style={styles.ViewMain}>
        <View style={styles.ViewAvatar}>
          <Image
            style={styles.Avatar}
            source={this.findImage(this.props.image)}
          />
        </View>
        <View style={styles.ViewName}>
          <View style={styles.ViewNameTop}>
            <Image
              style={styles.AvatarTiny}
              source={this.findImage(this.randomTime())}
            />
            <Text style={styles.TextName}> {this.props.data.name} </Text>
            <Text style={styles.TextNick}> @{this.props.data.nick} </Text>
          </View>
          <View>
            <Text>{this.props.data.mess.slice(0, 40)}...</Text>
            <Text>Đã đăng . {this.randomTime()} phút trước</Text>
          </View>
        </View>
      </View>
    );
  }
}
