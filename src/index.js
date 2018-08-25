// @flow
import React, { Component } from "react";
import { View, AppRegistry, NativeModules } from "react-native";
import { Actions } from "react-native-router-flux";
import { Provider } from "react-redux";

import applyConfigSettings from "./config";
import configureStore from "./store";
import AppNavigator from "./navigator";
import NetworkInfo from "./services/NetworkInfo";
import { networkInfoListener } from "./actions/NetworkInfoActions";
import { AppState, MessageBar } from "./components";

applyConfigSettings();

export default class Main extends Component {
  state = {
    isLoading: true,
    store: configureStore(() => {
      this.setState({ isLoading: false });
      // NativeModules.SplashScreen.hide();
    })
  };

  componentDidMount() {
    NetworkInfo.networkInfoListener(
      this.state.store.dispatch,
      networkInfoListener
    );
  }

  render() {
    if (this.state.isLoading) {
      return null;
    }

    return (
      <View style={{ flex: 1 }}>
        <Provider store={this.state.store}>
          <AppNavigator />
        </Provider>
        <AppState
          handleAppState={nextState => {
            if (nextState === "active") {
              console.log("Active State ");
            } else {
              //Zain
              console.log(" else postion : ", nextState);
            }
          }}
        />
      </View>
    );
  }
}
