import React from "react";
import { View, Text } from "react-primitives";
import { Badge } from "react-native-elements";
import Br from "../Br";

export default () => (
  <View>
    <View style={{ width: 40 }}>
      <Badge value={3} textStyle={{ color: "orange" }} />
    </View>
    <Br />
    <View style={{ width: 80 }}>
      <Badge containerStyle={{ backgroundColor: "violet" }}>
        <Text>User 1</Text>
      </Badge>
    </View>
    <Br />
    <Badge
      onPress={() => {
        console.log("pressed");
      }}
      value="5"
    />
  </View>
);
