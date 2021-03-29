import React from "react";
import { makeStyles, rgbToHex } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh'

  },
  image:{
    backgroundImage: 'url(/images/background.png)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'none'
  },
  avatar:{
    background: theme.palette.secondary.main,
    marginBottom: theme.spacing(1)
  }
}));

function SignIn() {
  const classes = useStyles();

  return(
    <Grid container className={classes.root} >
      <Grid 
        item 
        container 
        direction="column"
        justify="center"
        alignItems="center"
        md={7} 
        className={classes.image}
        >
        <Typography style={{color:'#fff', fontSize: 35, lineHeight: '45px'}} >
          <strong>Simplificando a vida de contadores e empresas</strong>
        </Typography>
        <Typography variant='body2' style={{color:'rgb(255, 255, 255, 0.7)', marginTop:30, fontSize: 15, lineHeight: '30px'}} >
          <strong>Compartilhando seu conhecimento com sua equipe é algo incrivel de se fazer</strong>
        </Typography>
      </Grid>
      <Grid item md={5} >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          m={8}
        >
          <Avatar className={classes.avatar} >
            <LockOutlinedIcon></LockOutlinedIcon>
          </Avatar>
          <Typography variant="h5" >
            Acesso
          </Typography>
          <form>
            <TextField 
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='email'
              label='E-mail'
              name='email'
              autoComplete="Email"
              autoFocus
            />
            <TextField 
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id='password'
              autoComplete="current-password"
            />
            <Button 
            fullWidth
            variant="contained"
            color="secondary"
          >
            Entrar
          </Button>
          </form>
          
        </Box>
      </Grid>
    </Grid>
  )
}

export default SignIn;