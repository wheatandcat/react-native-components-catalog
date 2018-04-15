import React, { Component } from "react";
import styled from "styled-components/primitives";
import { View } from "react-primitives";
import { Link } from "react-router-native";
import { ListItem } from "react-native-elements";
import list from "./paths";

export default class extends Component {
  state = {
    items: null,
    menus: null
  };

  async componentDidMount() {
    console.log("componentDidMount");
    const items = await list.map(item => ({
      ...item,
      menu: item.path.substr(0, item.path.indexOf("/"))
    }));

    const menus = await arrayColumn(items, "menu");

    this.setState({
      items,
      menus
    });
  }

  render() {
    if (this.state.menus === null) {
      return null;
    }

    return (
      <View>
        {this.state.menus.map((menu, i) => (
          <View key={i}>
            <Text>{menu}</Text>
            {this.state.items
              .filter(item => item.menu === menu)
              .map((item, i) => (
                <Link key={`${menu}_${i}`} to={`/${item.path}`}>
                  <ListItem key={i} title={item.title} />
                </Link>
              ))}
          </View>
        ))}
      </View>
    );
  }
}

const arrayColumn = async (items, key) => {
  if (!Array.isArray(items)) {
    throw new Error();
  }

  const cloumns = await items.map(r => r[key]);

  const result = await cloumns.filter((x, i) => cloumns.indexOf(x) === i);

  return result;
};

const Text = styled.Text`
  font-size: 25;
  color: palevioletred;
  margin-left: 15;
`;
