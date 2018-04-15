import React from "react";
import { View } from "react-primitives";
import { Input } from "react-native-elements";
import Br from "../Br";

export default () => (
  <View>
    <Input placeholder="BASIC INPUT" />
    <Br />
    <Input placeholder="INPUT WITH SHAKING EFFECT" shake={true} />
    <Br />
    <Input
      placeholder="INPUT WITH ERROR MESSAGE"
      errorStyle={{ color: "red" }}
      errorMessage="ENTER A VALID ERROR HERE"
    />
  </View>
);
