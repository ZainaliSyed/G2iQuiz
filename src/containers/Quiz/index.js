// @flow
import { connect } from "react-redux";
import React, { Component } from "react";
import { View, FlatList } from "react-native";
import { Actions } from "react-native-router-flux";
import { Metrics } from "../../theme";
import { Text, ButtonView, Button } from "../../components";
import styles from "./styles";

import {
  success,
  increaseQuestion,
  increaseCorrectAnswer,
  increaseWrongAnswer,
  quizResult
} from "../../actions/Quiz";

let questionIndex = 0;

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizData: props.quizData,
      loading: true,
      questionNumber: props.quiz.questionNumber,
      givenQuizResult: props.quiz.quizResult
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.quiz.questionNumber <= 9) {
      this.setState({ questionNumber: nextProps.quiz.questionNumber });
    } else {
      Actions.winning();
    }
  }

  _renderItem = (item, index) => {
    return (
      <View style={styles.renderItem}>
        <Text style={styles.heading}> {item.question} </Text>
      </View>
    );
  };

  _renderButton = (value, quiz) => {
    const { quizData, questionNumber, givenQuizResult } = this.state;
    const check = quiz.data[questionNumber].correct_answer;
    return (
      <ButtonView
        onPress={() => {
          this.props.increaseQuestion({
            questionNumber: questionNumber
          });

          if (
            (check === "False" && value === "False") ||
            (check === "True" && value === "True")
          ) {
            this.props.increaseCorrectAnswer();
            this.props.quizResult({
              ...quiz.data[questionNumber],
              givenAnswer: true
            });
          } else {
            this.props.quizResult({
              ...quiz.data[questionNumber],
              givenAnswer: false
            });
            this.props.increaseWrongAnswer();
          }
        }}
        style={styles.buttonContainer}
      >
        <Text style={{ alignSelf: "center" }}>{value}</Text>
      </ButtonView>
    );
  };

  render() {
    const { quizData, questionNumber } = this.state;
    const { quiz } = this.props;

    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }} key={questionNumber}>
          {this._renderItem(quiz.data[questionNumber], questionNumber)}
          <Text>
            Question {questionNumber + 1}
            /10
          </Text>
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {this._renderButton("True", quiz)}
            {this._renderButton("False", quiz)}
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  networkInfo: state.networkInfo,
  quiz: state.quiz
});

const actions = {
  success,
  increaseQuestion,
  increaseCorrectAnswer,
  increaseWrongAnswer,
  quizResult
};
export default connect(
  mapStateToProps,
  actions
)(Quiz);
