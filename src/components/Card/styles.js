
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme)=>({
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

