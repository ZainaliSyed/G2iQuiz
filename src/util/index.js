import { Platform } from "react-native";

class Util {
  keyExtractor = (item, index) => index;
  getPlatform = () => Platform.OS;
  isPlatformAndroid = () => Platform.OS === "android";
}

export default new Util();
