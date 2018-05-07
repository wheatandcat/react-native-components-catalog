import React, { Component } from "react";
import { View, Button, ActionSheet } from "react-native-ui-lib";

export default class ActionSheetScreen extends Component {
  state = {
    showNative: false
  };

  pickOption(index) {
    this.setState({
      pickedOption: index
    });
  }

  render() {
    return (
      <View>
        <Button
          size="small"
          text50
          marginB-10
          dark10
          label={`push action`}
          onPress={() =>
            this.setState({
              showNative: true
            })
          }
        />
        <ActionSheet
          title="Title"
          message="Message of action sheet"
          cancelButtonIndex={3}
          destructiveButtonIndex={0}
          options={[
            { label: "option 1", onPress: () => this.pickOption("option 1") },
            { label: "option 2", onPress: () => this.pickOption("option 2") },
            { label: "option 3", onPress: () => this.pickOption("option 3") },
            { label: "cancel", onPress: () => this.pickOption("cancel") }
          ]}
          visible={this.state.showNative}
          onDismiss={() => this.setState({ showNative: false })}
        />
      </View>
    );
  }
}
