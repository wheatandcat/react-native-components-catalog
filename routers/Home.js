import React, { Component } from "react";
import styled from "styled-components/primitives";
import { View } from "react-primitives";
import { StyleSheet, ScrollView } from "react-native";
import { Link } from "react-router-native";
import { ListItem, Divider } from "react-native-elements";
import { Consumer } from "../containers/Provider";
import list from "./paths";

export default class extends Component {
  state = {
    items: null,
    menus: null
  };

  async componentDidMount() {
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
        <Consumer>
          {({ setItem }) => (
            <View>
              <ScrollView contentContainerStyle={styles.contentContainer}>
                {this.state.menus.map((menu, i) => (
                  <View key={i}>
                    <Text>{menu}</Text>
                    <Divider style={{ backgroundColor: "#ccc" }} />
                    {this.state.items
                      .filter(item => item.menu === menu)
                      .map((item, i) => (
                        <Link
                          key={`${menu}_${i}`}
                          to={`/${item.path}`}
                          onPress={() => setItem(item)}
                        >
                          <View>
                            <ListItem
                              key={i}
                              title={item.label}
                              rightIcon={{ name: "chevron-right" }}
                            />
                            <Divider style={{ backgroundColor: "#ccc" }} />
                          </View>
                        </Link>
                      ))}
                    <Divider style={{ backgroundColor: "#ddd", height: 15 }} />
                  </View>
                ))}
                <View style={{ height: 150, backgroundColor: "#ddd" }} />
              </ScrollView>
            </View>
          )}
        </Consumer>
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

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20
  }
});

const Text = styled.Text`
  font-size: 30;
  color: palevioletred;
  margin-left: 15;
  margin-top: 5;
  margin-bottom: 5;
`;
