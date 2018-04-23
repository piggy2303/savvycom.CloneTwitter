import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import styles from "./HomeContentStyle";

export default class HomeContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLike: false
    };
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
    const imageContent = this.props.data.isimage ? null : (
      <Image
        style={styles.imageContent}
        source={this.findImage(this.props.data.image + 1)}
      />
    );

    const ViewLikeBtn = this.state.isLike ? (
      <View style={styles.ViewIconLike}>
        <Ionicons size={17} name="ios-heart" color="rgb(244,67,54)" />
        <Text> {this.props.data.like+1}</Text>
      </View>
    ) : (
      <View style={styles.ViewIconLike}>
        <Ionicons size={17} name="ios-heart-outline" color="rgb(3,169,244)" />
        <Text> {this.props.data.like}</Text>
      </View>
    );

    return (
      <TouchableOpacity style={styles.ViewMain}>
        <View style={styles.ViewAvatar}>
          <Image
            style={styles.Avatar}
            source={this.findImage(this.props.data.image)}
          />
        </View>

        <View style={styles.ViewTitle}>
          <View style={styles.ViewName}>
            <Text style={styles.TextTitle}>{this.props.data.first_name} </Text>
            <Ionicons
              size={17}
              name="ios-checkmark-circle"
              color="rgb(3,169,244)"
            />
            <Text> @{this.props.data.last_name} </Text>
            <Text> . {this.props.data.time} phút</Text>
          </View>
          <View>
            <Text>{this.props.data.mess}</Text>
          </View>
          <View>{imageContent}</View>

          <View style={styles.ViewName}>
            <View style={styles.ViewIconComment}>
              <Ionicons
                size={17}
                name="ios-chatbubbles-outline"
                color="rgb(3,169,244)"
              />
              <Text> {this.props.data.comment}</Text>
            </View>
            <View style={styles.ViewIconComment}>
              <Ionicons
                size={17}
                name="ios-repeat-outline"
                color="rgb(3,169,244)"
              />
              <Text> {this.props.data.suff}</Text>
            </View>

            <TouchableOpacity
              style={{flex:1}}
              onPress={() => {
                this.setState({
                  isLike: ! this.state.isLike
                });
              }}

            >
              {ViewLikeBtn}
            </TouchableOpacity>

            <View style={styles.ViewIconComment}>
              <Ionicons
                size={17}
                name="ios-git-compare-outline"
                color="rgb(3,169,244)"
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
