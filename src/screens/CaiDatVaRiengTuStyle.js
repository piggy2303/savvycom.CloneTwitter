import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  ViewHeader: {
    flex: 1
  },
  ViewContent: {
    flex: 9
  },

  //Dau trang style

  ViewText: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(236,239,241)",
  },
  TextMain:{
    fontSize: 23,
    fontWeight: 'bold',
    color:"rgb(33,33,33)"

  },
  TextSub:{
    fontSize: 15,
    fontWeight: 'normal',
    color:"rgb(96,125,139)"
  }
});

export default styles;
