import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  ViewMain: {
    flex: 1,
    flexDirection: "row",
    borderBottomColor: "rgb(189,189,189)",
    borderBottomWidth: 1,
  },
  icon: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    // alignItems: "center"
    marginLeft: 20,
  },
  title: {
    flex: 6,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: 15,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "rgb(33,33,33)"
  }
});

export default styles;
