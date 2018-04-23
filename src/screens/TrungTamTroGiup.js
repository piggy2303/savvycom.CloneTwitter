import React, { Component } from "react";
import { View, Text ,WebView} from "react-native";
import Header from "./CaiDatVaRiengTu_Components/components/Header";
import styles from "./CaiDatVaRiengTuStyle";

export default class TrungTamTroGiup extends Component {
  render() {
    return (
      <View style={styles.ViewHeader}>
        <View style={styles.ViewHeader}>
          <Header
            iconName="md-arrow-back"
            iconColor="rgb(3,169,244)"
            title="Trung tâm trợ giúp"
            navigate={this.props.navigation.navigate}
            navigateDestination="Home"
          />
        </View>
        <View style={styles.ViewContent}>
          <WebView
            source={{ uri: "https://help.twitter.com" }}
          />
        </View>
      </View>
    );
  }
}
