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
import { Login, Empty } from "../containers";

import styles from "./styles";
import { Images, Colors } from "../theme";
// import { TabIcon } from "../components";

const navigator = Actions.create(
  <Stack
    key="root"
    hideNavBar
    backTitle=" "
    headerTintColor={Colors.text.secondary}
    titleStyle={styles.title}
    headerStyle={styles.header}
  >
    <Scene initial key="login" component={Login} />
  </Stack>
);

export default () => <AppNavigator navigator={navigator} />;

const AppNavigator = connect()(Router);
