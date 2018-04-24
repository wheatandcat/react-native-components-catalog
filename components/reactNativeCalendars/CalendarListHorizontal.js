import React, { Component } from "react";
import { CalendarList } from "react-native-calendars";

export default class extends Component {
  render() {
    return (
      <CalendarList
        calendarWidth={320}
        horizontal={true}
        scrollEnabled={true}
      />
    );
  }
}
