import React, { Component } from "react";
import { View, Text } from "react-native";

export default class TinNhanDetail extends Component {
  constructor(props) {
    super(props);
    this.state={
      data : null
    }
  }
  componentDidMount() {
    const { data } = this.props.navigation.state.params;
    this.setState({
      data : JSON.stringify(data)
    })
  }
  render() {
    console.log("ren" + this.state.data);
    return (
      <View>
        <Text>jhgjh</Text>
      </View>
    );
  }
}
