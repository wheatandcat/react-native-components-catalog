import FixedDimensions from "../components/official/HeightAndWidth/FixedDimensions";
import AnimatedFadeAnim from "../components/official/Animated/FadeAnim";
import AnimatedFadeHeight from "../components/official/Animated/Height";

import ReactNativeElementsAvatar from "../components/reactNativeElements/Avatar";
import ReactNativeElementsBadge from "../components/reactNativeElements/Badge";
import ReactNativeElementsButton from "../components/reactNativeElements/Button";
import ReactNativeElementsButtonGroup from "../components/reactNativeElements/ButtonGroup";
import ReactNativeElementsCard from "../components/reactNativeElements/Card";
import ReactNativeElementsCheckBox from "../components/reactNativeElements/CheckBox";
import ReactNativeElementsIcon from "../components/reactNativeElements/Icon";
import ReactNativeElementsInput from "../components/reactNativeElements/Input";
import ReactNativeElementsListItem from "../components/reactNativeElements/ListItem";

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
  },
  {
    label: "Button",
    path: "react-native-elements/Button",
    component: ReactNativeElementsButton
  },
  {
    label: "ButtonGroup",
    path: "react-native-elements/ButtonGroup",
    component: ReactNativeElementsButtonGroup
  },
  {
    label: "Card",
    path: "react-native-elements/Card",
    component: ReactNativeElementsCard
  },
  {
    label: "CheckBox",
    path: "react-native-elements/CheckBox",
    component: ReactNativeElementsCheckBox
  },
  {
    label: "Icon",
    path: "react-native-elements/Icon",
    component: ReactNativeElementsIcon
  },
  {
    label: "Input",
    path: "react-native-elements/Input",
    component: ReactNativeElementsInput
  },
  {
    label: "ListItem",
    path: "react-native-elements/ListItem",
    component: ReactNativeElementsListItem
  }
];
