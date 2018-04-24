import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import styles from "./Style";

export default class Content extends Component {
  constructor(props) {
    super(props);
  }
  randomImage() {
    let a = Math.floor(Math.random() * 14 + 1);
    return a;
  }
  findImage(id) {
    switch (id) {
      case 1:
        link = require("../../../images/a1.jpeg");
        break;
      case 2:
        link = require("../../../images/a2.jpeg");
        break;
      case 3:
        link = require("../../../images/a3.jpeg");
        break;
      case 4:
        link = require("../../../images/a4.png");
        break;
      case 5:
        link = require("../../../images/a5.png");
        break;
      case 6:
        link = require("../../../images/a6.jpg");
        break;
      case 7:
        link = require("../../../images/a7.jpeg");
        break;
      case 8:
        link = require("../../../images/a8.png");
        break;
      case 9:
        link = require("../../../images/a9.png");
        break;
      case 10:
        link = require("../../../images/a10.png");
        break;
      case 11:
        link = require("../../../images/a11.png");
        break;
      case 12:
        link = require("../../../images/a12.jpeg");
        break;
      case 13:
        link = require("../../../images/a13.jpeg");
        break;
      case 14:
        link = require("../../../images/a14.png");
        break;
      default:
        link = require("../../../images/a1.jpeg");
        break;
    }
    return link;
  }
  render() {
    return (
      <View style={styles.ViewMain}>
        <View style={styles.ViewIconTwitter}>
          <Ionicons name="logo-twitter" size={30} color="rgb(3,169,244)" />
        </View>
        <View style={styles.ViewContent}>
          <View style={styles.ViewAvatar}>
            <Image
              style={styles.Avatar}
              source={this.findImage(this.randomImage())}
            />
          </View>
          <View style={styles.ViewName}>
            <Text style={styles.TextName}>{this.props.data.name1}</Text>
            <Text> đã theo dõi </Text>
            <Text style={styles.TextName}> {this.props.data.name2} </Text>
          </View>
        </View>
      </View>
    );
  }
}
