import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  ViewMain:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  IconLeft:{
    flex:1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 30,
  },
  IconRight:{
    flex:1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginRight: 30,
  }
});

export default styles;
