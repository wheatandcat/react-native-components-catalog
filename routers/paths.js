import FixedDimensions from "../components/official/HeightAndWidth/FixedDimensions";
import AnimatedFadeAnim from "../components/official/Animated/FadeAnim";
import AnimatedFadeHeight from "../components/official/Animated/Height";

import ReactNativeElementsAvatar from "../components/reactNativeElements/Avatar";
import ReactNativeElementsBadge from "../components/reactNativeElements/Badge";

export default [
  {
    label: "HeightAndWidth",
    path: "official/heightAndWidth/fixedDimensions",
    component: FixedDimensions
  },
  {
    label: "FadeAnim",
    path: "official/animated/fadeAnim",
    component: AnimatedFadeAnim
  },
  {
    label: "Height",
    path: "official/animated/Height",
    component: AnimatedFadeHeight
  },
  {
    label: "Avatar",
    path: "react-native-elements/Avatar",
    component: ReactNativeElementsAvatar
  },
  {
    label: "Badge",
    path: "react-native-elements/Badge",
    component: ReactNativeElementsBadge
  }
];
