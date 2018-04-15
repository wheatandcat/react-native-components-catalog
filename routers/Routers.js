import React, { Component } from "react";
import { View } from "react-primitives";
import styled from "styled-components/primitives";
import { NativeRouter, Route, Link } from "react-router-native";
import { Header, ListItem, Icon, Divider } from "react-native-elements";
import Provider, { Consumer } from "../containers/Provider";
import list from "./paths";
import Home from "./Home";

export default class App extends Component {
  render() {
    return (
      <Provider>
        <NativeRouter>
          <View>
            <AppHeader />

            <Route exact path="/" component={Home} />
            {list.map((item, i) => (
              <Route
                key={i}
                path={`/${item.path}`}
                component={item.component}
              />
            ))}
          </View>
        </NativeRouter>
      </Provider>
    );
  }
}

const AppHeader = () => (
  <Consumer>
    {({ item, setItem }) => (
      <View>
        <Header
          leftComponent={
            <Link
              to="/"
              onPress={() =>
                setItem({
                  menu: "home",
                  path: "",
                  label: ""
                })
              }
            >
              <Icon name="chevron-left" color="#fff" />
            </Link>
          }
          centerComponent={{ text: item.menu, style: { color: "#fff" } }}
        />
        {item.label !== "" ? (
          <View>
            <Text>{item.label}</Text>
            <Divider style={{ backgroundColor: "#ccc", marginBottom: 10 }} />
          </View>
        ) : null}
      </View>
    )}
  </Consumer>
);

const Text = styled.Text`
  font-size: 30;
  color: palevioletred;
  margin-left: 15;
  margin-top: 5;
  margin-bottom: 5;
`;
