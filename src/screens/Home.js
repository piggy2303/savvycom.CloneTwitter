import React, { Component } from "react";
import { View, Text, FlatList, AsyncStorage } from "react-native";
import styles from "./HomeStyle";

import HomeData from "./Home_Components/HomeData";
import HeaderHome from "./Home_Components/HeaderHome";
import HomeContent from "./Home_Components/HomeContent";

const data1 = HomeData();

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReloading: false,
      data: data1
    };
  }

  pushData = () => {
    this.state.data.push(data1[1]);
    return this.state.data;
  };

  async getKey() {
    try {
      const value = await AsyncStorage.getItem("data");
      if (value !== null){
        // We have data!!
        console.log("co data"+(value));
        this.setState({
          data : JSON.parse(value)
        })
      }else{
        console.log("k co data"+value); 
      }
    } catch (error) {
      console.log("k co data" + error);
    }
  }

  componentDidMount() {
    this.getKey();
  }

  async saveKey(value) {
    try {
      await AsyncStorage.setItem("data", value);
      console.log("saved "+ value);
    } catch (error) {
      console.log("Error saving data " + error);
    }
  }
  componentDidUpdate() {
    this.saveKey(JSON.stringify(this.state.data));
  }

  handleRefesh = () => {
    console.log(this.state.data);
    this.setState({
      isReloading: false,
      data: this.pushData()
    });

    console.log(this.state.data);
  };

  render() {
    return (
      <View style={styles.ViewMain}>
        <View style={styles.ViewHeader}>
          <HeaderHome
            title="Trang chủ"
            navigate={this.props.navigation.navigate}
            navigateDestination="DrawerOpen"
          />
        </View>
        <View style={styles.ViewContent}>
          <FlatList
            refreshing={this.state.isReloading}
            onRefresh={this.handleRefesh}
            data={this.state.data}
            renderItem={({ item }) => <HomeContent data={item} />}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    );
  }
}
