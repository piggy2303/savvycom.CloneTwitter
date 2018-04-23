import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  ViewMain: {
    flex: 1,
    flexDirection: "row",
    borderBottomWidth: 0.3,
    borderColor: "rgb(84,110,122)",
    backgroundColor: "rgb(245,245,245)",
  },
  ViewAvatar: {
    flex: 1,
    // justifyContent: 'center',
    marginTop: 10,
    alignItems: "center"
  },
  Avatar: {
    height: 50,
    width: 50,
    borderRadius: 50
  },

  ViewTitle: {
    flex: 4,
    justifyContent: "center",
    marginRight: 10,
    marginTop: 3
  },

  ViewName: {
    flexDirection: "row"
  },
  TextTitle: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold"
  },

  imageContent: {
    marginRight: 10,
    marginTop: 5,
    width: 280
  },
  ViewIconComment:{
    marginTop: 10,
    flex: 1,
    flexDirection: 'row',
    marginBottom: 7,
  },
  ViewIconLike:{
    marginTop: 10,
    flex: 1,
    flexDirection: 'row',
    marginBottom: 7,
  }
});

export default styles;
