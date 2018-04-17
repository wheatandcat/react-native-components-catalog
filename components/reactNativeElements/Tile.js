import React from "react";
import { View } from "react-primitives";
import { Tile } from "react-native-elements";
import Br from "../Br";
import chikyuu from "../chikyuu.png";

export default () => (
  <View>
    <Tile
      imageSrc={chikyuu}
      title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
      featured
      caption="Some Caption Text"
    />
  </View>
);
