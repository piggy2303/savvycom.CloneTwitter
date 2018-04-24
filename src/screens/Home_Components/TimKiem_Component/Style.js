import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  ViewMain: {
    flexDirection: "row",
    borderBottomWidth: 0.2,
    borderColor: "rgb(84,110,122)"
  },
  ViewNumber: {
    flex: 1,
    marginTop: 10,
    marginLeft: 10
  },
  TextNumber: {
    fontSize: 20
  },
  ViewContent: {
    marginTop: 10,
    marginBottom: 15,
    flex: 5.5
  },
  TextName: {
    color: "rgb(33,33,33)",
    fontSize: 18
  },
  TextNameNumber: {
    color: "rgb(158,158,158)",
    fontSize: 15
  },

  ViewImageLink:{
    flexDirection: 'row',
    height : 90,
    marginTop: 5,
    marginRight: 20,
    borderWidth: 0.2,
    borderRadius: 2,
    borderColor: "rgb(84,110,122)",
  },
  ViewLink:{
    marginTop: 3,
    marginLeft: 3,
    flex: 1.7,
  },
  ViewImage:{
    flex: 1,
  },
  ImageRight:{
    height:100,
    width:100
  }
});

export default styles;
