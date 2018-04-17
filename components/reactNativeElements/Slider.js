import React, { Component } from "react";
import { View } from "react-primitives";
import { Slider, Text } from "react-native-elements";
import Br from "../Br";

export default class extends Component {
  state = { value: 0.5 };

  render() {
    return (
      <View>
        <Br />
        <Br />
        <View
          style={{ flex: 1, alignItems: "stretch", justifyContent: "center" }}
        >
          <Slider
            value={this.state.value}
            onValueChange={value => this.setState({ value })}
          />
          <Text>Value: {this.state.value}</Text>
        </View>
      </View>
    );
  }
}
