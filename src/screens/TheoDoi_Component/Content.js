import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./ContentStyle";

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTouch: true
    };
  }
  componentDidMount(){
    if (this.props.role == "NguoiTheoiDoi") {
      this.setState({
        isTouch: false
      });
    }
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
    const btn = this.state.isTouch ? (
      <View style={styles.BtnOn}>
        <Text style={styles.BtnTextOn}>Đang theo dõi</Text>
      </View>
    ) : (
      <View style={styles.BtnOff}>
        <Text style={styles.BtnTextOff}>Theo dõi</Text>
      </View>
    );

    return (
      <View style={styles.ViewMain}>
        <View style={styles.ViewAvatar}>
          <Image
            style={styles.Avatar}
            source={this.findImage(this.props.image)}
          />
        </View>

        <View style={styles.ViewName}>
          <Text style={styles.TextName}>{this.props.data.name}</Text>
          <Text style={styles.TextNick}>@{this.props.data.nick}</Text>
        </View>

        <View style={styles.ViewBtn}>
          <TouchableOpacity
          onPress={() => {
            this.setState({
              isTouch: ! this.state.isTouch
            });
          }}
          >
            {/* <View style={styles.BtnOn}>
              <Text style={styles.BtnTextOn}>Đang theo dõi</Text>
            </View> */}
            {btn}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
