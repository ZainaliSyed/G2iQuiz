// @flow
import { connect } from "react-redux";
import React, { Component } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";
import { Metrics } from "../../theme";
import { Text, ButtonView, Button } from "../../components";
import styles from "./styles";
import { playAgain } from "../../actions/Quiz";

class Winning extends Component {
  constructor(props) {
    super(props);
    const data = props.quiz;
    this.state = {
      quizFinalResult: data.quizResult,
      correctAnswer: data.correctAnswer
    };
  }

  _renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          flex: 1
        }}
      >
        <Text style={styles.text}>{item && item.givenAnswer ? "+" : "-"}</Text>
        <Text style={styles.text}>{item.question}</Text>
      </View>
    );
  };

  render() {
    const { correctAnswer, quizFinalResult } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>You Score</Text>
          <Text style={styles.heading}>
            {correctAnswer}
            /10
          </Text>
        </View>
        <View style={{ flex: 4 }}>
          <FlatList
            style={{
              flex: 1,
              marginHorizontal: 15,
              paddingVertical: 10
            }}
            data={quizFinalResult}
            renderItem={this._renderItem}
            ItemSeparatorComponent={() => (
              <View style={{ borderColor: "gray", borderWidth: 1 }} />
            )}
            keyExtractor={(item, index) => index}
          />
        </View>
        <TouchableOpacity
          style={{ flex: 1, justifyContent: "flex-end" }}
          onPress={() => {
            this.props.playAgain();
            Actions.home({ type: "reset" });
          }}
        >
          <Text style={styles.heading}>Play Again?</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  networkInfo: state.networkInfo,
  quiz: state.quiz
});

const actions = { playAgain };
export default connect(
  mapStateToProps,
  actions
)(Winning);
