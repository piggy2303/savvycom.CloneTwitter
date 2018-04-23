import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  //Right

  RightText:{
    fontSize: 15,
    color:"rgb(245,245,245)"
  },
  RightView:{
    backgroundColor: "rgb(3,169,244)",
    padding: 10,
    marginRight: 5,
    marginLeft: 40,
    marginTop: 3,
    marginBottom: 3,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
  },

  //Left
  LeftText:{
    fontSize: 15,
    color:"rgb(33,33,33)"
  },
  LeftView:{
    backgroundColor: "rgb(224,224,224)",
    padding: 10,
    marginLeft: 5,
    marginRight: 40,
    marginTop: 3,
    marginBottom: 3,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  }
});

export default styles;
