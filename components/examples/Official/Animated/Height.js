import React from "react";
import { StyleSheet, Text, View } from "react-primitives";
import { Button } from "react-native";

export default class App extends React.Component {
  state = {
    height: 0,
    setTimeout: null,
    open: false
  };

  open = () => {
    const timeout = setTimeout(
      this.state.open ? this.subHeight : this.addHeight,
      5
    );

    this.setState({
      setTimeout: timeout
    });
  };

  addHeight = () => {
    if (this.state.height >= 95) {
      clearTimeout(this.state.setTimeout);
      this.setState({
        open: true,
        height: 95
      });
      return;
    }

    const timeout = setTimeout(this.addHeight, 5);

    const height = this.state.height + 5;

    this.setState({
      height: height > 95 ? 95 : height,
      setTimeout: timeout
    });
  };

  subHeight = () => {
    if (this.state.height <= 0) {
      clearTimeout(this.state.setTimeout);
      this.setState({
        open: false,
        height: 0
      });
      return;
    }

    const timeout = setTimeout(this.subHeight, 5);

    const height = this.state.height - 5;

    this.setState({
      height: height < 0 ? 0 : height,
      setTimeout: timeout
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.open}
          title={this.state.open ? "CLOSE" : "OPEN"}
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <View
          style={{
            width: "100%",
            height: `${this.state.height}%`,
            backgroundColor: "powderblue"
          }}
        >
          <Text>aaaa</Text>
          <Text>aaaa</Text>
        </View>
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
