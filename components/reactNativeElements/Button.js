import React from "react";
import { View, Text } from "react-primitives";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import Br from "../Br";

export default () => (
  <View>
    <Button title="BUTTON" />
    <Br />
    <Button
      icon={<Icon name="arrow-right" size={15} color="white" />}
      title="BUTTON WITH ICON"
    />

    <Br />
    <Button
      icon={<Icon name="arrow-right" size={15} color="white" />}
      iconRight
      title="BUTTON WITH RIGHT ICON"
    />
    <Br />
    <Button
      title="LOADING BUTTON"
      loading
      loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
      titleStyle={{ fontWeight: "700" }}
      buttonStyle={{
        backgroundColor: "rgba(92, 99,216, 1)",
        width: 300,
        height: 45,
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 5
      }}
      containerStyle={{ marginTop: 20 }}
    />
  </View>
);
