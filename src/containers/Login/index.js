// @flow
import { connect } from "react-redux";
import React, { Component } from "react";
import { View, Image, PermissionsAndroid, Alert } from "react-native";
import { Actions } from "react-native-router-flux";
import { Images, Metrics } from "../../theme";
import { Text, Loading } from "../../components";
import styles from "./styles";

class Login extends Component {
  componentDidMount() {
    alert("Login componentDidMount");
  }

  componentWillUnmount() {}

  render() {
    return (
      <View style={styles.container}>
        <Text>Login Container commodo minim exercitation zAIN</Text>
      </View>
    );
  }
}

// const mapStateToProps = state => ({
//   networkInfo: state.networkInfo
// });

const actions = {};

export default Login;
