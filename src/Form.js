import React, { useContext } from "react";
import {
  Avatar,
  Button,
  FormControl,
  FormControlLabel,
  Checkbox,
  Input,
  InputLabel,
  Select,
  Paper,
  Typography,
  MenuItem
} from "@material-ui/core";

import { LockOutlined } from "@material-ui/icons";
import formStyles from "./styles/FormStyle";
import { LanguageContext } from "./contexts/LanguageContext";

const Form = () => {
  const classes = formStyles();
  const { language, changeLanguage } = useContext(LanguageContext);
  const words = {
    english: {
      email: "Email",
      signIn: "Sign In",
      password: "Password",
      rememberMe: "Remember Me"
    },
    french: {
      email: "Adresse Electronique",
      signIn: "Se connecter",
      password: "Mot de Passe",
      rememberMe: "Souviens-toi De Moi"
    },
    spanish: {
      email: "Correo Elctronico",
      signIn: "Registrarse",
      password: "Contrasena",
      rememberMe: "Recuerdame"
    }
  };
  const { email, signIn, password, rememberMe } = words[language];

  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography variant='h5'>{signIn}</Typography>
        <Select value={language} onChange={changeLanguage}>
          <MenuItem value={"english"}>English</MenuItem>
          <MenuItem value={"french"}>French</MenuItem>
          <MenuItem value={"spanish"}>Spanish</MenuItem>
        </Select>
        <form className={classes.form}>
          <FormControl margin='normal' fullWidth required>
            <InputLabel htmlFor='email'>{email}</InputLabel>
            <Input id='email' name='email' autoFocus />
          </FormControl>
          <FormControl margin='normal' fullWidth required>
            <InputLabel htmlFor='password'>{password}</InputLabel>
            <Input id='password' name='password' autoFocus />
          </FormControl>
          <FormControlLabel
            label={rememberMe}
            control={<Checkbox color='primary' />}
          />
          <Button
            variant='contained'
            type='submit'
            fullWidth
            color='primary'
            className={classes.submit}
          >
            {signIn}
          </Button>
        </form>
      </Paper>
    </main>
  );
};

export default Form;
