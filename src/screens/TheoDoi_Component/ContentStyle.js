import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  ViewMain: {
    flex: 1,
    flexDirection: "row",
    height: 70,
    borderBottomColor: "rgb(176,190,197)",
    borderBottomWidth: 0.2
  },
  ViewAvatar: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  Avatar: {
    height: 50,
    width: 50,
    borderRadius: 50
  },

  ViewName: {
    flex: 2,
    flexDirection: "column",
    marginTop: 10,
    marginLeft: 10
  },
  TextName: {
    fontSize: 17,
    color: "rgb(33,33,33)",
    fontWeight: "bold"
  },
  TextNick: {
    fontSize: 13,
    color: "rgb(120,144,156)",
    fontWeight: "normal"
  },
  ViewBtn: {
    flex: 2,
    marginTop: 10,
    marginRight: 10,
  },
  BtnOn: {
    flexDirection: 'column',
    backgroundColor: "rgb(3,169,244)",
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    width: 130,
    borderRadius: 30,
  },
  BtnTextOn: {
    fontSize: 15,
    color: "rgb(245,245,245)",
    fontWeight :"bold"
  },

  BtnOff: {
    flexDirection: 'column',
    backgroundColor: "rgb(250,250,250)",
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    width: 130,
    borderRadius: 30,
    borderColor: "rgb(3,169,244)",
    borderWidth: 1,
  },
  BtnTextOff: {
    fontSize: 15,
    color: "rgb(3,169,244)",
    fontWeight :"bold"

  }


});

export default styles;
