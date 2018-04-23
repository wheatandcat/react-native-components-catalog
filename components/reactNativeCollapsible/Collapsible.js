import React, { Component } from "react";
import { View } from "react-primitives";
import Collapsible from "react-native-collapsible";
import { Text, Button } from "react-native-elements";
import Br from "../Br";

export default class extends Component {
  state = { isCollapsed: true };

  onPress = () => {
    this.setState({
      isCollapsed: !this.state.isCollapsed
    });
  };

  render() {
    return (
      <View>
        <Br />
        <Br />
        <Collapsible collapsed={this.state.isCollapsed}>
          <View>
            <Text>fooo</Text>
            <Text>fooo</Text>
            <Text>fooo</Text>
          </View>
        </Collapsible>

        <Button
          onPress={this.onPress}
          title={this.state.isCollapsed ? "open" : "close"}
        />
      </View>
    );
  }
}
