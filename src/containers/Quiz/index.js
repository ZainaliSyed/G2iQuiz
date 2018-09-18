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
  increaseWrongAnswer
} from "../../actions/Quiz";

let questionIndex = 0;
class Quiz extends Component {
  constructor(props) {
    super(props);
    console.log("Quiz Data : ", props.quiz.questionNumber);
    // questionNumber
    this.state = {
      quizData: props.quizData,
      loading: true,
      questionNumber: props.quiz.questionNumber
      //loading: props.quiz.loading
    };
  }

  // componentDidMount() {
  //   // this.props.request(payload);

  //   fetch(
  //     "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean",
  //     {
  //       method: "GET",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json"
  //       }
  //     }
  //   )
  //     .then(response => response.json())
  //     .then(responseJson => {
  //       this.setState({ loading: true });
  //       console.log("responseJson", responseJson.results);
  //       this.props.success(responseJson.results);
  //       // return responseJson.movies;
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log(
      "UNSAFE_componentWillReceiveProps nextProps : ",
      nextProps.quiz.questionNumber
    );
    this.setState({ questionNumber: nextProps.quiz.questionNumber });
  }

  _renderItem = (item, index) => {
    console.log("questionIndex : ", item, "index : ", index);
    // console.log("ITEMS : ", item);
    // put logic on true and false and increase counter
    return (
      <View
        style={{
          flex: 2,
          justifyContent: "center",
          alignItems: "center",
          borderColor: "black",
          borderWidth: 1,
          margin: 50,
          backgroundColor: "red"
        }}
      >
        <Text style={styles.heading}> {item.question} </Text>
      </View>
    );
  };

  render() {
    const { quizData, questionNumber } = this.state;
    const { quiz } = this.props;
    console.log("Quiz Data : ", quiz.data[questionNumber]);
    console.log("questionNumber render(): ", questionNumber);
    return (
      <View style={styles.container}>
        {!this.state.loading ? (
          <Text>Loading</Text>
        ) : (
          <View style={{ flex: 1 }} key={questionNumber}>
            {this._renderItem(quiz.data[questionNumber], questionNumber)}
            <Text>Question 1/10</Text>
            <View
              style={{
                flexDirection: "row",
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <ButtonView
                onPress={() => {
                  // alert("Hello")

                  this.props.increaseQuestion({
                    questionNumber: this.state.questionNumber
                  });
                  if (quiz.data[questionNumber].correct_answer === "True") {
                    this.props.increaseCorrectAnswer();
                  } else {
                    this.props.increaseWrongAnswer();
                  }
                }}
                style={styles.buttonContainer}
              >
                <Text style={{ alignSelf: "center" }}>True</Text>
              </ButtonView>
              <ButtonView
                onPress={() => alert("Hello")}
                style={styles.buttonContainer}
              >
                <Text style={{ alignSelf: "center" }}>False</Text>
              </ButtonView>
            </View>
          </View>
        )}
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
  increaseWrongAnswer
};
export default connect(
  mapStateToProps,
  actions
)(Quiz);

// <FlatList
//             style={styles.container}
//             data={this.state.quizData}
//             refreshing={!this.state.loading}
//             stickySectionHeadersEnabled={false}
//             renderItem={this._renderItem}
//           />

// quizData.map((v, index) => {
//   return (
//     <View style={{ flex: 1 }} key={index}>
//       <Text>{v.type}</Text>
//     </View>
//   );
// })
