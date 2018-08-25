import Metrics from "./Metrics";

const type = {
  base: "Quicksand-Regular",
  medium: "Quicksand-Medium",
  bold: "Quicksand-Bold",
  seventies: "Seventies"
};

const size = {
  xxxSmall: Metrics.generatedFontSize(11),
  xxSmall: Metrics.generatedFontSize(13),
  xSmall: Metrics.generatedFontSize(14),
  small: Metrics.generatedFontSize(15),
  normal: Metrics.generatedFontSize(17),
  medium: Metrics.generatedFontSize(18),
  large: Metrics.generatedFontSize(20),
  xLarge: Metrics.generatedFontSize(24),
  xxLarge: Metrics.generatedFontSize(30),
  xxxLarge: Metrics.generatedFontSize(40)
};

export default {
  type,
  size
};
