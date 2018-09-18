// @flow
import { connect } from "react-redux";
import React, { Component } from "react";
import {
  View,
  Image,
  PermissionsAndroid,
  Alert,
  TouchableOpacity
} from "react-native";
import { Actions } from "react-native-router-flux";
import { Images, Metrics } from "../../theme";
import { Text } from "../../components";
import styles from "./styles";
import { success } from "../../actions/Quiz";

class Home extends Component {
  componentDidMount() {
    // this.props.request(payload);

    fetch(
      "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ loading: true });
        console.log("responseJson", responseJson.results);
        this.props.success(responseJson.results);
        // return responseJson.movies;
      })
      .catch(error => {
        console.error(error);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>Welcome to the Trivia Challenge</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            You will be presented with 10 True and false Question
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Can you Score 100%</Text>
        </View>
        <TouchableOpacity
          style={[
            styles.textContainer,
            { justifyContent: "flex-end", marginBottom: 10 }
          ]}
          onPress={() => Actions.quiz({ quizData: this.props.quiz.data , quiz : this.props.quiz })}
        >
          <Text style={styles.text}>Begin</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  networkInfo: state.networkInfo,
  quiz: state.quiz
});

const actions = { success };
export default connect(
  mapStateToProps,
  actions
)(Home);
