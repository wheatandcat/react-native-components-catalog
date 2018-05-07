import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ConnectionStatusBar, Typography, Colors } from "react-native-ui-lib"; //eslint-disable-line

// No connect check inter

ConnectionStatusBar.registerGlobalOnConnectionLost(() => {
  // console.warn('what what?!? connection has been lost');
});

export default class ConnectionStatusBarScreen extends Component {
  state = {
    isConnected: true
  };

  render() {
    console.log(this.state);
    return (
      <View>
        <ConnectionStatusBar
          onConnectionChange={isConnected => this.setState({ isConnected })}
        />

        <Text>Turn your wifi on/off to see the component in action</Text>
        <Text>
          {this.state.isConnected ? "Connected! :)" : "No connection :("}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 25
  }
});
