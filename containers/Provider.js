import React, { Component, createContext } from "react";
const Context = createContext();
const { Provider } = Context;

export default class extends Component {
  state = {
    item: {
      menu: "",
      path: "",
      label: "home"
    }
  };

  setItem = item => {
    this.setState({
      item
    });
  };

  render() {
    return (
      <Provider
        value={{
          setItem: this.setItem,
          item: this.state.item
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export const Consumer = Context.Consumer;
