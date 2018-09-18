// @flow
import { connect } from "react-redux";
import React, { Component } from "react";
import { View } from "react-native";
import { Actions } from "react-native-router-flux";
import { Metrics } from "../../theme";
import { Text } from "../../components";
import styles from "./styles";

let questionIndex = 0;
class Button extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     quizData: props.quizData,
  //     loading: true
  //     //loading: props.quiz.loading
  //   };
  // }
  render() {
    const { quiz } = this.props;
    return (
      <View style={styles.container}>
        <Text>Button</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  networkInfo: state.networkInfo
});

const actions = {};
export default connect(
  mapStateToProps,
  actions
)(Button);
