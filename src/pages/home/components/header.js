import React from "react";
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Bell } from 'react-feather';
import Avatar from '@material-ui/core/Avatar';
// import '../style.css'

const useStyle = makeStyles({
  appBar:{
    boxShadow: 'none',
  },
  img:{
    maxHeight: 55,
  },
  grow:{
    flexGrow: 1
  },
  userSection:{
    display: 'flex',
    alignItems: 'center'
  },
  buttonRight:{
    marginRight: 10,
  }, 
  bell:{
    marginRight: 10,
  }
});

function Header() {
  const classes = useStyle();
  return (
    <AppBar position="fixed" color="inherit" className={classes.appBar} >
      <Toolbar>
        <img className={classes.img} src="/images/logo.bmp" alt="Logo"/>
        <div className={classes.grow} ></div>
        <div className={classes.userSection} >
          <Button position="contained" color="primary" className={classes.buttonRight} >
            Novo Post
          </Button>
          <SvgIcon className={classes.bell} >
            <Bell></Bell>
          </SvgIcon>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </div>

      </Toolbar>
    </AppBar>
  )
}

export default Header;