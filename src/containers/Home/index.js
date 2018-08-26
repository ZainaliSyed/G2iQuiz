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

class Home extends Component {
  componentDidMount() {}
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
          onPress={() => Actions.quiz()}
        >
          <Text style={styles.text}>Begin</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const actions = {};

export default Home;
