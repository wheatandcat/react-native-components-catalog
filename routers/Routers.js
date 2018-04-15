import React, { Component } from "react";
import { View } from "react-primitives";
import { NativeRouter, Route, Link } from "react-router-native";
import { Header, ListItem, Icon } from "react-native-elements";
import list from "./paths";
import Home from "./Home";

export default class App extends Component {
  render() {
    return (
      <NativeRouter>
        <View>
          <Header
            leftComponent={
              <Link to="/">
                <Icon name="chevron-left" color="#fff" />
              </Link>
            }
            centerComponent={{ text: "MY TITLE", style: { color: "#fff" } }}
          />

          <Route exact path="/" component={Home} />
          {list.map((item, i) => (
            <Route key={i} path={`/${item.path}`} component={item.component} />
          ))}
        </View>
      </NativeRouter>
    );
  }
}
