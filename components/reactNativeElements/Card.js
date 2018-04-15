import React from "react";
import styled from "styled-components/primitives";
import { View } from "react-primitives";
import { Card, ListItem, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import Br from "../Br";

const users = [
  {
    name: "brynn",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"
  }
];

export default () => (
  <View>
    <Card title="CARD WITH DIVIDER">
      {users.map((u, i) => {
        return (
          <View key={i}>
            <Image resizeMode="cover" source={{ uri: u.avatar }} />
            <Text>{u.name}</Text>
          </View>
        );
      })}
    </Card>
  </View>
);

const Image = styled.Image`
  height: 100;
  width: 100;
`;

const Text = styled.Text`
  font-size: 20;
`;
