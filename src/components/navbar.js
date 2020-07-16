



import React from 'react';
import { Link } from 'react-router-dom';
//import image from './images/index.jpg';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import '../App.css'


const useStyles = makeStyles((theme) => ({
  root: {
    //flexGrow: 1,
    backgroundColor:'Orange',
  },
 
  title: {
   textDecoration:'none',
   
   margin: '5px'
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" >
        <Toolbar>
      
        {/* <img  src={image} alt="Loading..."  /> */}
       
          <Typography variant="h6" className={classes.title}>

          <Link to="/" style={{textDecoration:'none' , color:'white'}}> Home </Link>
          </Typography>


          <Typography variant="h6" className={classes.title}>
          <Link to="/products" style={{textDecoration:'none' , color:'white'}}> Product </Link>
          </Typography>

         
        </Toolbar>
      </AppBar>
    </div>
  );
}
