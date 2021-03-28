import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {

  },
}));

function SignIn() {
  const classes = useStyles();
  return (



    /*
    // Div representa o flex container
    <div className={classes.root}>
      <div className={classes.left}>
        <Typography style={{ color: "#fff", fontSize: 35, lineHeight: "45px" }}>
          <strong>Simplificando a forma de como conectar uma empresa</strong>
        </Typography>
        <Typography
          variant="body2"
          style={{
            color: "rgb(255,255,255, 0.7",
            marginTop: 30,
            fontSize: 15,
            lineHeight: "30px",
          }}
        >
          Gerenciamento de conteúdo, informações e detalhes sobre nosso dia a
          dia em uma rede corporativa.
        </Typography>
      </div>
      <div className={classes.right}>
          <form className={classes.form} > 
            <h4>Acesse</h4>
            <input type="text" />
            <input type="text" />
          </form>
      </div>
    </div> */
  );
}

export default SignIn;
