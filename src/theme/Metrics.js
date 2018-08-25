import { StyleSheet, PixelRatio, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

const screenWidth = width < height ? width : height;
const screenHeight = width < height ? height : width;

const baselineHeight = 730;

const ratio = screenHeight / baselineHeight;

// const generatedFontSize = (size: number) => +size * ratio;

const generatedFontSize = (size: number) =>
  PixelRatio.roundToNearestPixel(size);

export default {
  ratio,
  screenWidth,
  screenHeight,
  generatedFontSize,
  searchBarHeight: 50 * ratio,
  smallMargin: 8 * ratio,
  baseMargin: 16 * ratio,
  doubleBaseMargin: 20 * ratio,
  horizontalLineHeight: 1,
  navBarHeight: Platform.OS === "ios" ? 64 : 54,
  tabBarHeight: 49, // Default tab bar height in iOS 10
  borderRadius: 3 * ratio,
  defaultUIHeight: 44 * ratio,
  icons: {
    tiny: 15 * ratio,
    small: 20 * ratio,
    normal: 27 * ratio,
    medium: 30 * ratio,
    large: 38 * ratio,
    xl: 60 * ratio
  },
  images: {
    small: 20 * ratio,
    medium: 40 * ratio,
    large: (Platform.OS === "ios" ? 50 : 65) * ratio,
    xLarge: (Platform.OS === "ios" ? 95 : 125) * ratio,
    avatar: (Platform.OS === "ios" ? 85 : 100) * ratio,
    logo: 200 * ratio
  }
};
