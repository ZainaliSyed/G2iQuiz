// @flow
import { StyleSheet, Platform } from "react-native";
import { Metrics, Fonts, Colors } from "../theme";

export default StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    shadowColor: Colors.border,
    shadowOpacity: 1,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    },
    elevation: 2,
    backgroundColor: Colors.navbar.background
  },
  title: {
    paddingHorizontal: Platform.OS === "ios" ? 70 : 56,
    fontSize: Fonts.size.large,
    fontFamily: Fonts.type.bold,
    color: Colors.navbar.text,
    fontWeight: "normal"
  },
  groov: {
    height: 30,
    resizeMode: "contain"
  },
  iconStyle: {
    width: Metrics.icons.large,
    height: Metrics.icons.large
  },
  tabBarStyle: {
    borderTopColor: Colors.border,
    borderTopWidth: Metrics.horizontalLineHeight,
    backgroundColor: Colors.navbar.background
  },
  indicatorStyle: {
    opacity: 0
  },
  rightButton: {
    flex: 1,
    paddingLeft: Metrics.baseMargin,
    paddingRight: Metrics.baseMargin
  },
  rightTitle: {
    paddingLeft: Metrics.smallMargin,
    marginRight: Metrics.smallMargin,
    color: Colors.text.secondary,
    fontFamily: Fonts.type.medium,
    fontSize: Fonts.size.normal
  }
});
