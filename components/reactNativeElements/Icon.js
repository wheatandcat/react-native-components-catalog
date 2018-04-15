import React from "react";
import { View } from "react-primitives";
import { Icon } from "react-native-elements";
import Br from "../Br";

export default () => (
  <View>
    <Icon name="rowing" />
    <Br />
    <Icon name="g-translate" color="#00aced" />
    <Br />
    <Icon name="sc-telegram" type="evilicon" color="#517fa4" />
    <Br />
    <Icon reverse name="ios-american-football" type="ionicon" color="#517fa4" />
    <Br />
    <Icon
      raised
      name="heartbeat"
      type="font-awesome"
      color="#f50"
      onPress={() => console.log("hello")}
    />
  </View>
);
