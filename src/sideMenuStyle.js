import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  ViewMain: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "rgb(245,245,245)"
  },
  ViewTop: {
    flex: 3,
    borderBottomColor: "rgb(189,189,189)",
    borderBottomWidth: 0.3
  },
  ViewHoso: {
    flex: 4,
    // backgroundColor: "red",
    borderBottomColor: "rgb(189,189,189)",
    borderBottomWidth: 0.3
  },
  ViewCaidat: {
    flex: 2,
    borderBottomColor: "rgb(189,189,189)",
    borderBottomWidth: 0.3
  },
  ViewQR: {
    flex: 1
    // backgroundColor: "red",
  }
});

export default styles;
