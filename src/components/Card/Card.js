import React from 'react';
import { Grid, Paper, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme)=>({
  root: {
    flexGrow: 1,
     height:"100vh",
     marginTop: "1rem"
  },
  paper: {
    height:"10rem",
    backgroundColor:"#2b50a7",
    color:"#ddd",
    padding:"1rem 0 4rem 0"
  },
  title: {
    marginTop:"2rem",
    fontWeight:"bold",
    fontSize:"25px"
  },
  button:{
    marginTop:"2rem",
    width:"180px",
    height:"3.5rem",
    borderRadius:"0 10px 10px 0"
  },
  Text:{
    marginTop:"2rem",
    width:"180px",
    backgroundColor:"white",
    borderRadius:"10px 0 0 10px",
  }
}))

const Cards =()=>{
  const classes = useStyles();
  return(

  <div className={classes.root}>
    <Grid container spacing ={3} justify="center">
      <Grid item xs={11}>
        <Paper className={classes.paper} label = ""> <p className={classes.title}> GithubCards</p>
          <TextField className={classes.Text}  label="user/repo" variant="filled"/>
          <Button className={classes.button} variant="contained" color="secondary">adicionarFavoritos</Button>
        </Paper>
      </Grid>
    </Grid>
    </div>
  )
}

export default Cards;
