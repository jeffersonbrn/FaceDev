import React,  { useState } from "react";
import { makeStyles, rgbToHex } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
import TextField from "@material-ui/core/TextField";
import { Button, Link } from "@material-ui/core";
import { useNavigate } from 'react-router-dom';

import FormHelperText from "@material-ui/core/FormHelperText";
import { useSelector, useDispatch } from 'react-redux';
import signIn from '../../actions/accountActions';

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(/images/background.png)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "none",
    padding: theme.spacing(2),
    textAlign: "center"
  },
  avatar: {
    background: theme.palette.secondary.main,
    marginBottom: theme.spacing(1),
  },
  button:{
    marginTop: theme.spacing(2)
  },
  form:{
    margin: theme.spacing(2, 4)
  },
  link:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
  linktext:{
    color: '#000000',
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
    fontSize: 15
  }
}));

function Copyright() {
  return(
    <Typography variant="body2" align="center" >
      {'Copyright @'}
      <a color="inherit" href="https://www.linkedin.com/in/brunoreisrn/" >
        Bruno Reis
      </a>{' '}
      {new Date().getFullYear()}
    </Typography>
  )
}

function SignIn() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState();
  const account = useSelector(state => state);
  const dispatch = useDispatch();
  

  async function handleSignIn() {
    // Chamada a Api nossa aplica????o
    // Se retorno ok, direciona para a home
    // sen??o direciona para usuario
    try {
      await dispatch(signIn(email, password));
      navigate('/');
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  }
  
  return (
    <Grid container className={classes.root}>
      <Grid
        item
        container
        direction="column"
        justify="center"
        alignItems="center"
        md={7}
        className={classes.image}
      >
        <Typography style={{ color: "#fff", fontSize: 35, lineHeight: "45px" }}>
          <strong>Simplificando a vida de contadores e empresas</strong>
        </Typography>
        <Typography
          variant="body2"
          style={{
            color: "rgb(255, 255, 255, 0.7)",
            marginTop: 30,
            fontSize: 15,
            lineHeight: "30px",
          }}
        >
          <strong>
            Compartilhando seu conhecimento com sua equipe ?? algo incrivel de se
            fazer
          </strong>
        </Typography>
      </Grid>
      <Grid item md={5}>
        <Box display="flex" flexDirection="column" alignItems="center" m={8}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon></LockOutlinedIcon>
          </Avatar>
          <Typography variant="h5">Acesso</Typography>
          <form className={classes.form} >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-mail"
              name="email"
              autoComplete="Email"
              autoFocus
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Button fullWidth variant="contained" color="secondary" className={classes.button} onClick={handleSignIn} >
              Entrar
            </Button>
            {
              errorMessage && 
              <FormHelperText error >
                {errorMessage}
              </FormHelperText>
            }
            <Grid container className={classes.link}>
              <Grid item>
                <Link className={classes.linktext}>Esqueceu sua senha?</Link>
              </Grid>
              <Grid item > 
                <Link className={classes.linktext} >N??o tem uma conta? Registre-se </Link>
              </Grid>
            </Grid>
          </form>
          <Copyright/>
        </Box>
      </Grid>
    </Grid>
  );
}

export default SignIn;
