import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./ContentTickBoxStyle";
import Ionicons from "react-native-vector-icons/Ionicons";

export default class ContentTickBox extends Component {
  constructor(props) {
    super(props);
    this.state={
      isCheck : false
    }
  }
  componentDidMount(){
    var x = Math.floor((Math.random() * 2) + 1);
    if (x == 1) {
      this.setState({
        isCheck : true
      })
    } else {
      this.setState({
        isCheck : false
      })
    }
  }

  render() {
    return (
      <View style={styles.Viewmain}>
        <TouchableOpacity 
        style={styles.Touchmain}
        onPress={() => {
          this.setState({
            isCheck : !this.state.isCheck
          })
        }}>
          <View style={styles.ViewTitle}>
            <Text style={styles.titleText}> {this.props.title} </Text>
          </View>
          <View style={styles.ViewBox}>
            <Ionicons size={25} color="rgb(3,169,244)" name={this.state.isCheck ? ("md-checkbox"):("md-square-outline")}/>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
