import React, { Component } from "react";
import { ThemeContext } from './contexts/ThemeContext';

class PageContent extends Component {
  static contextType = ThemeContext;
  render() {
    const { isDarkMode } = this.context;
    console.log('DARK', isDarkMode);
    const styles = {
      backgroundColor: isDarkMode ? 'black': 'white',
      width: "100vw",
      height: "100vh"
    };
    return <div style={styles}>{this.props.children}</div>;
  }
}

export default PageContent;
