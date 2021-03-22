import React from "react";
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import '../style.css'

const useStyle = makeStyles({
  appBar:{
    boxShadow: 'none',
  },
  img:{
    maxHeight: 55,
  }
});

function Header() {
  const classes = useStyle();
  return (
    <AppBar position="fixed" color="inherit" className={classes.appBar} >
      <Toolbar>
        <img className={classes.img} src="/images/logo.bmp" alt="Logo"/>

        {/* <div>
          <a href="/">FaceDev</a>
          <input type="text"/>
        </div>
        <div>
          <Button color="primary" variant="contained" >
              Novo Post
            </Button>
          <span>imag1</span>
          <span>imag2</span>
        </div> */}
      </Toolbar>
    </AppBar>
  )
}

export default Header;