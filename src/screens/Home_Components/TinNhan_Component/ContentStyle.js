import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  ViewMain: {
    flex: 1,
    flexDirection: "row",
    borderBottomWidth: 0.3,
    borderColor: "rgb(84,110,122)",
    height: 80
  },
  ViewAvatar: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center"
  },
  Avatar: {
    height: 50,
    width: 50,
    borderRadius: 50
  },
  ViewMess: {
    marginTop: 5,
    marginLeft: 5,
    flex: 4,
    flexDirection: "column"
  },
  ViewTime:{
    marginTop: 5,
    marginRight: 15,
    flex: 0.7,
    alignItems:"flex-end",

    // backgroundColor: "red",
  },
  ViewNameNick: {
    flex: 1,
    flexDirection: "row"
  },
  ViewMessText:{
    marginTop: 10,
    flex:3,
  },
  TextName: {
    fontWeight: "bold",
    color: "rgb(33,33,33)"
  }
});

export default styles;
