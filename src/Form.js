import React from "react";
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
  MenuItem,
  CssBaseline
} from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import formStyles from "./styles/FormStyle";

const Form = () => {
  const classes = formStyles();
  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography variant='h5'>Sign In</Typography>
        <Select value={'english'}>
          <MenuItem value={'english'}>English</MenuItem>
          <MenuItem value={'french'}>French</MenuItem>
          <MenuItem value={'spanish'}>Spanish</MenuItem>
        </Select>
        <form className={classes.form}>
          <FormControl margin='normal' fullWidth required>
            <InputLabel htmlFor='email'>Email</InputLabel>
            <Input id='email' name='email' autoFocus />
          </FormControl>
          <FormControl margin='normal' fullWidth required>
            <InputLabel htmlFor='password'>Password</InputLabel>
            <Input id='password' name='password' autoFocus />
          </FormControl>
          <FormControlLabel
            label='Remember Me'
            control={<Checkbox color='primary' />}
          />
          <Button variant='contained' type='submit' fullWidth color='primary' className={classes.submit}>Sign In</Button>
        </form>
      </Paper>
    </main>
  );
};

export default Form;
