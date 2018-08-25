// @flow
import { StyleSheet } from "react-native";
import { Metrics, Colors } from "@theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: Metrics.doubleBaseMargin,
    backgroundColor: Colors.background.primary
  },
  logo: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  welcome: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center"
  },
  message: {
    flex: 2,
    marginHorizontal: Metrics.baseMargin,
    justifyContent: "center",
    alignItems: "center"
  },
  facebook: {
    flex: 1,
    justifyContent: "center"
  },
  footer: {
    flex: 1,
    marginHorizontal: Metrics.doubleBaseMargin * 1.3,
    justifyContent: "center",
    alignItems: "center"
  }
});
