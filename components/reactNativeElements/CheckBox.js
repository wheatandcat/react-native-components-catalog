import React from "react";
import { View } from "react-primitives";
import { CheckBox } from "react-native-elements";
import Br from "../Br";

export default () => (
  <View>
    <CheckBox title="Click Here" />
    <Br />

    <CheckBox center title="Click Here" />
    <Br />
    <CheckBox
      center
      title="Click Here"
      checkedIcon="dot-circle-o"
      uncheckedIcon="circle-o"
    />
    <Br />
    <CheckBox
      center
      title="Click Here to Remove This Item"
      iconRight
      iconType="material"
      checkedIcon="clear"
      uncheckedIcon="add"
      checkedColor="red"
    />
    <Br />
  </View>
);
