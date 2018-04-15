import React, { Component } from "react";
import { View } from "react-primitives";
import { NativeRouter, Route, Link } from "react-router-native";
import { Header, ListItem, Icon } from "react-native-elements";
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
      <Header
        leftComponent={
          <Link
            to="/"
            onPress={() =>
              setItem({
                menu: "",
                path: "",
                label: "home"
              })
            }
          >
            <Icon name="chevron-left" color="#fff" />
          </Link>
        }
        centerComponent={{ text: item.label, style: { color: "#fff" } }}
      />
    )}
  </Consumer>
);
