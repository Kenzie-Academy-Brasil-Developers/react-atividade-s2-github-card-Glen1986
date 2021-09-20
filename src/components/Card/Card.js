import React from 'react';
import { Grid, Paper, Button, TextField } from "@material-ui/core";
import {useStyles} from './styles'

const Cards =({ valor, setValor})=>{
  const classes = useStyles();
 // const inValue = `${users}${repos}`
  return(

  <div className={classes.root}>
    <Grid container spacing ={3} justify="center">
      <Grid item xs={11}>
        <Paper className={classes.paper} label = ""> <p className={classes.title}> GithubCards</p>
          <TextField  className={classes.Text}  label="user/repo" variant="filled"/>
          <Button onClick = {()=>console.log("click")} className={classes.button} variant="contained" color="secondary">Buscar</Button>
        </Paper>
      </Grid>
    </Grid>
    </div>
  )
}

export default Cards;
