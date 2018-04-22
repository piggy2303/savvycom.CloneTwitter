import { StyleSheet } from "react-native";
import Content from "./Content";

const styles = StyleSheet.create({
  TouchMain: {
    flex: 1,
    flexDirection: "row"
  },
  Icon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  ViewText: {
    flex: 4,
    justifyContent: "center",
    
  },
  Text: {
    fontSize: 20,
    color:"rgb(33,33,33)"
  },



  //content component
  ContentView:{
    justifyContent: "center",
    alignItems: "center"
  },
  ContentText:{
    fontSize: 20,
    color:"rgb(33,33,33)",
    marginLeft: 22,
  }
});

export default styles;
