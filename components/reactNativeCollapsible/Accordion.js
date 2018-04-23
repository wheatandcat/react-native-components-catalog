import React, { Component } from "react";
import styled from "styled-components/primitives";
import { View } from "react-primitives";
import Accordion from "react-native-collapsible/Accordion";
import { Text, Button } from "react-native-elements";

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
  _renderHeader(section) {
    return (
      <Header>
        <HeaderText>{section.title}</HeaderText>
      </Header>
    );
  }

  _renderContent(section) {
    return (
      <Content>
        <Text>{section.content}</Text>
      </Content>
    );
  }

  render() {
    return (
      <Accordion
        sections={SECTIONS}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
      />
    );
  }
}

const Content = styled.View`
  padding-left: 20;
  padding-top: 20;
  padding-right: 20;
  padding-bottom: 20;
`;

const Header = styled.View`
  background-color: #f5fcff;
  padding-left: 10;
  padding-top: 10;
  padding-right: 10;
  padding-bottom: 10;
`;

const HeaderText = styled.Text`
  text-align: center;
  font-size: 16;
  font-weight: 500;
`;
