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
  heading: {
    fontWeight: "bold",
    color: "black",
    fontSize: 30
  },
  textContainer: {
    flex: 1,
    marginHorizontal: 30
  },
  text: {
    color: "gray",
    fontSize: 20
  },
  playAgain: { flex: 1, justifyContent: "flex-end" }
});
