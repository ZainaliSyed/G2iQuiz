// @flow
import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { Text as RNText, StyleSheet } from "react-native";
import { Fonts, Colors, Metrics } from "../../theme";

export default class Text extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
    style: RNText.propTypes.style,
    color: PropTypes.oneOf(_.keys(Colors.text)),
    textAlign: PropTypes.oneOf(["left", "center", "right"]),
    size: PropTypes.oneOfType([
      PropTypes.oneOf(_.keys(Fonts.size)),
      PropTypes.number
    ]),
    type: PropTypes.oneOf(_.keys(Fonts.type))
    // adjustsFontSizeToFit: PropTypes.bool,
    // minimumFontScale: PropTypes.number
  };

  static defaultProps = {
    title: "\t",
    size: "normal",
    type: "base",
    color: "primary",
    textAlign: "center",
    style: RNText.defaultProps.style,
    children: RNText.defaultProps.children
    // adjustsFontSizeToFit: true,
    // minimumFontScale: Metrics.ratio
  };

  render() {
    const {
      title,
      type,
      size,
      style,
      color,
      children,
      textAlign,
      ...rest
    } = this.props;

    const textStyle = StyleSheet.flatten([
      {
        textAlign,
        fontFamily: Fonts.type[type],
        fontSize: Metrics.generatedFontSize(
          typeof size === "number" ? size : Fonts.size[size]
        ),
        color: Colors.text[color],
        backgroundColor: Colors.transparent
      },
      style
    ]);

    return (
      <RNText style={textStyle} {...rest}>
        {children || title}
      </RNText>
    );
  }
}
