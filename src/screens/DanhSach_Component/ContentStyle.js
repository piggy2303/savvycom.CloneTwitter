import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  ViewMain: {
    flex: 1,
    flexDirection: "row",
    height: 60,
    borderBottomColor: "rgb(176,190,197)",
    borderBottomWidth: 0.2
  },
  ViewAvatar: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  Avatar: {
    height:30,
    width: 30,
    borderRadius: 50,
  },

  ViewName: {
    flex: 4,
    flexDirection: "column",
    marginTop: 10,
    marginLeft: 10
  },
  ViewNameTop:{
    flexDirection: 'column',
  },
  ViewMess:{
    height:30
  },
  AvatarTiny: {
    height:10,
    width: 10,
    borderRadius: 10,
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


});

export default styles;
