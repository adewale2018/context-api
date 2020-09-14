import React from "react";
import { UseTheme } from "./contexts/ThemeContext";

function PageContent({ children }) {
  const [isDarkMode] = UseTheme();
  const styles = {
    backgroundColor: isDarkMode ? "black" : "white",
    width: "100vw",
    height: "100vh",
  };
  return <div style={styles}>{children}</div>;
}

export default PageContent;
