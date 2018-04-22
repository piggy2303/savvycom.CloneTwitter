import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  ViewMain: {
    flex: 1
  },
  ViewTop: {
    marginLeft: 20,
    marginTop: 10,
    flex: 3
  },
  Avatar:{

    height: 70,
    borderRadius: 50,
    width: 70
  },
  ViewMiddle: {
    flex: 2,
    flexDirection: 'column',
    marginLeft: 20,
  },
  TextName:{
    fontSize:18,
    fontWeight: 'bold',
    color:"rgb(33,33,33)"
  },
  ViewBottom: {
    flex: 1,
    flexDirection: 'row',
  },
  ViewNguoiTheoDoi:{
    flex: 1,
    flexDirection: 'row',
  },
  ViewDangTheoDoi:{
    flex: 1,
    flexDirection: 'row',
    marginLeft: 20,
  },
  TextNumber:{
    fontSize: 15,
    fontWeight: 'bold',
    color:"rgb(33,33,33)"
  },
  TextText:{
    fontSize: 15,
    fontWeight: 'normal',
    color:"rgb(69,90,100)"
  }
});

export default styles;
