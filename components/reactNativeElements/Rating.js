import React from "react";
import { View } from "react-primitives";
import { Rating } from "react-native-elements";
import Br from "../Br";

export default () => (
  <View>
    <Rating showRating style={{ paddingVertical: 10 }} />

    <Rating
      showRating
      type="star"
      fractions={1}
      startingValue={3.6}
      readonly
      imageSize={40}
      style={{ paddingVertical: 10 }}
    />

    <Rating
      type="heart"
      ratingCount={3}
      fractions={2}
      startingValue={1.57}
      imageSize={40}
      showRating
      style={{ paddingVertical: 10 }}
    />
  </View>
);
