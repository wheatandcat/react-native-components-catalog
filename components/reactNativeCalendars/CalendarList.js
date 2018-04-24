import React, { Component } from "react";
import { CalendarList } from "react-native-calendars";

export default class extends Component {
  render() {
    return (
      <CalendarList
        onVisibleMonthsChange={months => {
          console.log("now these months are visible", months);
        }}
        pastScrollRange={50}
        futureScrollRange={50}
        scrollEnabled={true}
        showScrollIndicator={true}
      />
    );
  }
}
