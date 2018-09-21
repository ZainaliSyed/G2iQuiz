// @flow
import { StyleSheet } from "react-native";
import { Metrics, Colors } from "../../theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.primary
  },
  questionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
    margin: Metrics.doubleBaseMargin
    // backgroundColor: "red"
  },
  buttonContainer: {
    // flex: 1,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: Metrics.doubleBaseMargin,
    marginHorizontal: Metrics.baseMargin,
    padding: Metrics.doubleBaseMargin,
    backgroundColor: "blue"
  },
  heading: {
    fontWeight: "bold",
    color: "black",
    fontSize: 20
  },
  renderItem: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
    margin: 50
    // backgroundColor: "red"
  }
});
