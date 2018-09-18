// @flow
import React from "react";
import { connect } from "react-redux";
import { Keyboard } from "react-native";
import {
  Stack,
  Scene,
  Router,
  Actions,
  ActionConst
} from "react-native-router-flux";
import { Quiz, Empty, Home } from "../containers";

import styles from "./styles";
import { Colors } from "../theme";

const navigator = Actions.create(
  <Stack
    key="root"
    hideNavBar
    backTitle=" "
    headerTintColor={Colors.text.secondary}
    titleStyle={styles.title}
    headerStyle={styles.header}
  >
    <Scene initial key="home" component={Home} />
    <Scene key="quiz" component={Quiz} />
  </Stack>
);

export default () => <AppNavigator navigator={navigator} />;

const AppNavigator = connect()(Router);
