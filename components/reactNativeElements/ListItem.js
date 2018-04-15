import React from "react";
import { View } from "react-primitives";
import { ListItem, Divider } from "react-native-elements";
import Br from "../Br";

const list = [
  {
    name: "Amy Farha",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "Vice President",
    icon: "av-timer"
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman",
    icon: "flight-takeoff"
  }
];

export default () => (
  <View>
    {list.map((l, i) => (
      <View>
        <ListItem
          key={i}
          avatar={{ source: { uri: l.avatar_url } }}
          title={l.name}
          subtitle={l.subtitle}
          leftIcon={{ name: l.icon }}
          rightIcon={{ name: "chevron-right" }}
        />
        <Divider style={{ backgroundColor: "#ccc" }} />
      </View>
    ))}
  </View>
);
