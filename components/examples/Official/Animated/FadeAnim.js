import React from "react";
import {
  Animated,
  StyleSheet,
  Text,
  View,
  AppRegistry
} from "react-primitives";

export default class App extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0) // Initial value for opacity: 0
  };

  componentDidMount() {
    Animated.timing(
      // Animate over time
      this.state.fadeAnim, // The animated value to drive
      {
        toValue: 1, // Animate to opacity: 1 (opaque)
        duration: 10000 // Make it take a while
      }
    ).start(); // Starts the animation
  }
  render() {
    let { fadeAnim } = this.state;

    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "powderblue",
            opacity: fadeAnim
          }}
        >
          <Text>aaaa</Text>
          <Text>aaaa</Text>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  }
});
