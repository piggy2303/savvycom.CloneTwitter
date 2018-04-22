import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  ViewMain: {
    flex: 1,
    flexDirection: "row",
    borderBottomWidth: 0.3,
    borderColor: "rgb(84,110,122)",
  },
  ViewAvatar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Avatar: {
    height: 30,
    width: 30,
    borderRadius: 50
  },

  ViewTitle: {
    flex: 4,
    justifyContent: 'center',
  },
  TextTitle: {
    fontSize: 20,
    color: "black",
    fontWeight: 'bold',
  }




  
});

export default styles;
