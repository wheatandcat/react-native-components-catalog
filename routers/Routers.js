import React from "react";
import {
  Animated,
  StyleSheet,
  Text,
  View,
  AppRegistry
} from "react-primitives";
import { Button } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import ModalDropdown from "react-native-modal-dropdown";
import FixedDimensions from "../components/examples/Official/HeightAndWidth/FixedDimensions";
import Drawer from "react-native-drawer";
import { Header, ListItem, Icon } from "react-native-elements";

const list = [
  {
    title: "Appointments"
  },
  {
    title: "Trips"
  }
];

export default class App extends React.Component {
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
          <Route path="/about" component={About} />
        </View>
      </NativeRouter>
    );
  }
}

const Home = () => (
  <View>
    {list.map((item, i) => (
      <Link to="/about">
        <ListItem key={i} title={item.title} />
      </Link>
    ))}
  </View>
);

const About = () => <Text style={styles.header}>About</Text>;

const styles = StyleSheet.create({
  header: {
    fontSize: 20
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  }
});
