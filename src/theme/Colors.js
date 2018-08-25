const white = "#FFFFFF";
const black = "#000000";
const red = "#f6323d";
const pink = "#ed4585";
const blue = "#37aeff";

const grey = "#f7f7f7";
const darkGrey = "#a5a8af";
const lightGrey = "#dddddd";
const darkestGrey = "#3f3f3f";
const whiteSmoke = "#f6f6f6";
const azure = "#007aff";

const transparent = "rgba(0,0,0,0)";

const primary = white;
const secondary = black;
const tertiary = red;
const quaternary = blue;

const background = {
  primary,
  secondary: grey,
  tertiary,
  quaternary
};

const text = {
  azure,
  primary: darkGrey,
  secondary,
  tertiary: primary,
  quaternary: blue,
  darkestGrey,
  pink
};

const navbar = {
  background: primary,
  text: text.secondary
};

const border = lightGrey;
const separator = lightGrey;

const error = red;
const success = text.quaternary;
const normal = text.primary;

const windowTint = "rgba(0, 0, 0, 0.4)";

export default {
  white,
  black,
  grey,
  pink,
  darkGrey,
  lightGrey,
  transparent,
  whiteSmoke,

  red,
  primary,
  secondary,
  tertiary,
  quaternary,

  background,
  navbar,
  text,

  border,
  separator,
  windowTint,

  error,
  success,
  normal,

  facebook: "#39579a"
};
