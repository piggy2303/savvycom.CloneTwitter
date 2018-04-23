import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import MessLeft from "./MessLeft";
import MessRight from "./MessRight";
import Header from "../../CaiDatVaRiengTu_Components/components/Header";
import styles from "./TinNhanDetailStyle";

export default class TinNhanDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mess1: "mess"
    };
  }

  componentDidMount() {
    const { dataMess } = this.props.navigation.state.params;
    console.log(dataMess.mess1);
    this.setState({
      mess1: dataMess.mess1,
      mess2: dataMess.mess2,
      mess3: dataMess.mess3,
      mess4: dataMess.mess4,
      mess5: dataMess.mess5,
      mess6: dataMess.mess6,
      mess7: dataMess.mess7,
      mess8: dataMess.mess8,
      mess9: dataMess.mess9,
      mess10: dataMess.mess10,
      mess11: dataMess.mess11,
      mess12: dataMess.mess12,
      mess13: dataMess.mess13,
      mess14: dataMess.mess14,
      mess15: dataMess.mess15,
      mess16: dataMess.mess16,
      mess17: dataMess.mess17,
      mess18: dataMess.mess18,
      mess19: dataMess.mess19,
      mess20: dataMess.mess20
    });
    console.log(this.state.mess1);
  }
  render() {
    // console.log(this.state.mess1);

    return (
      <View style={styles.ViewMain}>
        <View style={styles.ViewHeader}>
          <Header
            iconName="md-arrow-back"
            iconColor="rgb(3,169,244)"
            title="Tin nhắn"
            navigate={this.props.navigation.navigate}
            navigateDestination="Home"
          />
        </View>
        <View style={styles.ViewContent}>
          <ScrollView>
            <MessLeft mess={this.state.mess1} />
            <MessRight mess={this.state.mess2} />
            <MessLeft mess={this.state.mess3} />
            <MessRight mess={this.state.mess4} />
            <MessLeft mess={this.state.mess5} />
            <MessRight mess={this.state.mess6} />
            <MessLeft mess={this.state.mess7} />
            <MessRight mess={this.state.mess8} />
            <MessLeft mess={this.state.mess9} />
            <MessRight mess={this.state.mess10} />
            <MessLeft mess={this.state.mess11} />
            <MessRight mess={this.state.mess12} />
            <MessLeft mess={this.state.mess13} />
            <MessRight mess={this.state.mess14} />
            <MessLeft mess={this.state.mess15} />
            <MessRight mess={this.state.mess16} />
            <MessLeft mess={this.state.mess17} />
            <MessRight mess={this.state.mess18} />
            <MessLeft mess={this.state.mess19} />
            <MessRight mess={this.state.mess20} />
          </ScrollView>
        </View>
      </View>
    );
  }
}
