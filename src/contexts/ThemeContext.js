import React, { Component, createContext } from "react";

const ThemeContext = createContext();

class ThemeProvider extends Component {
  constructor(props) {
    super(props);

    this.state = { isDarkMode: true };
    this.toggleColor = this.toggleColor.bind(this);
  }
  toggleColor() {
    this.setState({ isDarkMode: !this.state.isDarkMode });
  }
  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state, toggleColor: this.toggleColor }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export { ThemeContext, ThemeProvider };
