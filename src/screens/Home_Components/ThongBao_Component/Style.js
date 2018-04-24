import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  ViewMain:{
    flexDirection: 'row',
    height: 70,
    borderWidth: 0.2,
    borderColor: "rgb(84,110,122)",
  },

  ViewIconTwitter:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ViewContent:{
    flex: 4,
    flexDirection: 'column',
  },
  ViewAvatar:{
    marginTop: 5,
  },
  Avatar:{
    height:30,
    width: 30,
    borderRadius: 50,
  },
  ViewName:{
    flexDirection: 'row',
    marginTop: 10,
  },
  TextName:{
    color:"rgb(33,33,33)",
    fontWeight: 'bold',
  }
});

export default styles;
