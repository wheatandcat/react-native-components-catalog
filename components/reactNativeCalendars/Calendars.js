import React, { Component } from "react";
import { Calendar } from "react-native-calendars";

export default class CalendarsScreen extends Component {
  render() {
    return (
      <Calendar
        current={"2012-05-01"}
        markedDates={{
          "2012-05-16": { selected: true, marked: true, selectedColor: "blue" },
          "2012-05-17": { marked: true },
          "2012-05-18": { marked: true, dotColor: "red", activeOpacity: 0 },
          "2012-05-19": { disabled: true, disableTouchEvent: true }
        }}
      />
    );
  }
}
