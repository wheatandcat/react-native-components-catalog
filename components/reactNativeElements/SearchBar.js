import React from "react";
import { View } from "react-primitives";
import { SearchBar } from "react-native-elements";
import Br from "../Br";

export default () => (
  <View>
    <Br />
    <SearchBar placeholder="Type Here..." />
    <Br />
    <SearchBar noIcon placeholder="Type Here..." />
    <Br />
    <SearchBar round placeholder="Type Here..." />
    <Br />
    <SearchBar lightTheme placeholder="Type Here..." />
    <Br />
    <SearchBar
      lightTheme
      icon={{ type: "font-awesome", name: "search" }}
      placeholder="Type Here..."
    />
    <Br />
    <SearchBar
      showLoading
      platform="ios"
      cancelButtonTitle="Cancel"
      placeholder="Search"
    />
    <Br />
    <SearchBar showLoading platform="android" placeholder="Search" />
  </View>
);
