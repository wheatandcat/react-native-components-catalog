import React, { Component } from "react";
import { View } from "react-primitives";
import { Overlay, Text, Button } from "react-native-elements";
import Br from "../Br";

export default class extends Component {
  state = { isVisible: false };

  onPress = () => {
    this.setState({
      isVisible: !this.state.isVisible
    });
  };

  render() {
    return (
      <View>
        <Overlay
          isVisible={this.state.isVisible}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          overlayBackgroundColor="#ccc"
          width="auto"
          height="auto"
        >
          <Text>Hello from Overlay!</Text>
        </Overlay>;
        <Button onPress={this.onPress} title="Overlay" />
      </View>
    );
  }
}
