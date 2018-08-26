// @flow
import { StyleSheet } from "react-native";
import { Metrics, Colors } from "../../theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.background.primary
  },
  textContainer: {
    flex: 1,
    marginHorizontal: 30
    // backgroundColor: "red"
  },
  heading: {
    fontWeight: "bold",
    color: "black",
    fontSize: 30
  },
  text: {
    color: "black",
    fontSize: 25
  }
});
