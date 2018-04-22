import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import HeaderHome from "./HeaderHome";

import Content from './TinNhan_Component/Content'
import styles from "../HomeStyle";

const data = [
  {
    id: 1,
    name: "Elsi",
    nick: "Bonnor",
    mess: "middleware Elsi Bonnorm iddlew are Elsi Bonn ormidd leware Elsi Bonno rmidd leware Elsi"
  }, 
  {
    id: 2,
    name: "Tessa",
    nick: "McGloughlin",
    mess: "exuding McGloughlin Tessa"
  },
  {
    id: 3,
    name: "Nigel",
    nick: "Brunker",
    mess: "defect Brunker Nigel"
  },
  {
    id: 4,
    name: "Lesli",
    nick: "Greed ",
    mess: "leading Lesli Greed"
  },
  {
    id: 5,
    name: "Marlyn",
    nick: "Heningam",
    mess: "national"
  },
  {
    id: 6,
    name: "Herschel",
    nick: "Craighall",
    mess: "group"
  },
  {
    id: 7,
    name: "Gerald",
    nick: "Kingscote",
    mess: "Future-proofed"
  },
  {
    id: 8,
    name: "Demetra",
    nick: "Clemente",
    mess: "challenge"
  }
];

export default class TinNhan extends Component {
  randomImage() {
    let a = Math.floor(Math.random() * 14 + 1);
    return a;
  }
  randomTime() {
    let a = Math.floor(Math.random() * 12 + 1);
    return a;
  }

  render() {
    return (
      <View style={styles.ViewMain}>
        <View style={styles.ViewHeader}>
          <HeaderHome
            title="Tin nhắn"
            navigate={this.props.navigation.navigate}
            navigateDestination="DrawerOpen"
          />
        </View>
        <View style={styles.ViewContent}>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <Content
                image={this.randomImage()}
                time={this.randomTime()}
                data={item}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    );
  }
}
