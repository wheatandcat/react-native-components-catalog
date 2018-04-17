import React from "react";
import { View } from "react-primitives";
import { PricingCard } from "react-native-elements";
import Br from "../Br";

export default () => (
  <View>
    <PricingCard
      color="#4f9deb"
      title="Free"
      price="$0"
      info={["1 User", "Basic Support", "All Core Features"]}
      button={{ title: "GET STARTED", icon: "flight-takeoff" }}
    />
  </View>
);
