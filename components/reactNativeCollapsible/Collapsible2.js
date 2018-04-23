import React, { Component } from "react";
import styled from "styled-components/primitives";
import { View } from "react-primitives";
import Collapsible from "react-native-collapsible";
import { Text, Button } from "react-native-elements";
import Br from "../Br";

const SECTIONS = [
  {
    title: "First",
    content: "Lorem ipsum..."
  },
  {
    title: "Second",
    content: "Lorem ipsum..."
  }
];

export default class extends Component {
  state = { opens: [] };

  onPress = async index => {
    let opens = await this.state.opens;

    if (this.state.opens.indexOf(index) === -1) {
      opens = await [...this.state.opens, index];
    } else {
      opens = await opens.filter(item => item !== index);
    }

    this.setState({
      opens
    });
  };

  render() {
    return (
      <View>
        <Br />
        <Br />
        {SECTIONS.map((item, index) => (
          <View key={index}>
            <Button onPress={() => this.onPress(index)} title={item.title} />
            <Collapsible
              collapsed={this.state.opens.indexOf(index) === -1 ? true : false}
            >
              <Content>
                <Text>{item.content}</Text>
              </Content>
            </Collapsible>
          </View>
        ))}
      </View>
    );
  }
}

const Content = styled.View`
  padding-left: 20;
  padding-top: 20;
  padding-right: 20;
  padding-bottom: 20;
`;
