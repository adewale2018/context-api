import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { Switch } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./styles/NavBarStyle";
import { ThemeContext } from "./contexts/ThemeContext";

import france from "./img/1.png";
import spain from "./img/2.png";
import english from "./img/3.png";

export default function NavBar(props) {
  const classes = useStyles();
  const { isDarkMode, toggleColor } = useContext(ThemeContext);
  return (
    <div className={classes.root}>
      <AppBar position='static' color={isDarkMode ? "primary" : "default"}>
        <Toolbar>
          <IconButton className={classes.menuButton} color='inherit'>
            <span>
              <img src={english} alt={"flag"} className={classes.img} />
            </span>
          </IconButton>
          <Typography className={classes.title} variant='h6' color='inherit'>
            DEV-PRO
          </Typography>
          <Switch onChange={toggleColor} />
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder='Search...'
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
// NavBar.contextType = ThemeContext;
