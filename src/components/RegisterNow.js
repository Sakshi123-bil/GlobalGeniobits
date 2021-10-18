import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Grid } from '@material-ui/core';
import { Box } from '@mui/system';
import { Divider } from '@material-ui/core';
import Image from "./Images/registerNow.jpg";
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';



const useStyles=makeStyles({
LeftSection:{
    height:350,
    width:1300,
   backgroundImage:`url(${Image})`,
   imageResolution: '300dpi',
   backgroundSize:'cover'
   
},
Timer:{
    display:'flex',
    justifyContent:'center',

     '@media (max-width: 280px)': {
       marginLeft:0,
      

      }
   
},

time:{
    margin:10,
    paddingRight:20,
    
    '@media (max-width: 280px)': {
        marginRight:3,
        padding:8
      }
},
heading:{
  marginLeft:80,
  marginBottom:30,
  '@media (max-width: 1024px)': {
  marginLeft:2
  }
},

registerForm:{
    width:400,
    padding:25,
    backgroundColor:'LightSalmon',
    color:'white',
    marginTop:-60,
    marginLeft:30,
   
    '@media (max-width: 1023px)': {
        width:'100%',
        marginTop:10,
        marginLeft:0,
        }
},
textfield:{
    width:250,
    borderBottom:'2px solid white',
    '@media (max-width: 1024px)': {
        width:'100%',
       
        },
        '@media (min-width: 1270px)': {
            width:'90%',
           
            },
    },
    mainContainer:{
                paddingTop:50,
                backgroundColor:'white',
                paddingLeft:20,
                '@media (max-width: 1024px)': {
                    paddingLeft:0
                   
                    },
    }

});

export default function RegisterNow(){
    const classes=useStyles();
    return(
            <Box className={classes.mainContainer}>
                <Box className={classes.heading}>
                        <Typography style={{fontWeight:'bold',marginBottom:10,color:'DimGray'}} variant="h5">REGISTER NOW</Typography>
                        <Typography style={{fontSize:10,color:'gray'}}>GET 100S OF ONLINE COURSES FOR FREE</Typography>
                </Box>
                <Grid container spacing={0}>

                    <Grid  xs={12} md={8} className={classes.LeftSection}>

                    <Box className={classes.Timer} style={{display:'flex',marginTop:180}}>
                          <Box style={{width:50,backgroundColor:'white'}} className={classes.time}>
                              <Typography style={{textAlign:'center',fontWeight:'bold',marginLeft:4}} variant="h4">00</Typography>
                              <Typography style={{fontSize:10,color:'gray',textAlign:'center',marginLeft:10}}>DAYS</Typography>
                              <Divider style={{marginTop:10}}  className={classes.divider}></Divider>
                          </Box>
                          <Box style={{width:50,backgroundColor:'white'}} className={classes.time}>
                              <Typography style={{textAlign:'center',fontWeight:'bold',marginLeft:4}} variant="h4">00</Typography>
                              <Typography style={{fontSize:10,color:'gray',textAlign:'center',marginLeft:6}}>HOURS</Typography>
                              <Divider style={{marginTop:10}} className={classes.divider}></Divider>
                          </Box>
                          <Box style={{width:50,backgroundColor:'white'}} className={classes.time}>
                              <Typography style={{textAlign:'center',fontWeight:'bold',marginLeft:4}} variant="h4">00</Typography>
                              <Typography style={{fontSize:10,color:'gray',textAlign:'center'}}>MINUTES</Typography>
                              <Divider style={{marginTop:10}}  className={classes.divider}></Divider>
                          </Box>
                          <Box style={{width:50,backgroundColor:'white'}} className={classes.time}>
                              <Typography style={{textAlign:'center',fontWeight:'bold',marginLeft:4}} variant="h4">00</Typography>
                              <Typography style={{fontSize:10,color:'gray',textAlign:'center'}}>SECONDS</Typography>
                              <Divider style={{marginTop:10}}  className={classes.divider}></Divider>
                          </Box>
                    </Box>
                    </Grid>
                    <Grid xs={12} md={3} className={classes.registerForm}>
                          <Typography style={{fontWeight:'bold',marginTop:30}}>Create your free account now and get immediate access to 100s of online courses.</Typography>
                          <Typography style={{marginTop:15,opacity:0.7,marginBottom:-10,color:'white'}}>Your Name*</Typography>
                          <TextField id="standard-basic"  variant="standard" className={classes.textfield}/>
                          <Typography style={{marginTop:15,opacity:0.7,marginBottom:-10,color:'white'}}>Email*</Typography>
                          <TextField id="standard-basic"  variant="standard" className={classes.textfield}/>
                          <Typography style={{marginTop:15,opacity:0.7,marginBottom:-10,color:'white'}}>Phone*</Typography>
                          <TextField id="standard-basic"  variant="standard" className={classes.textfield}/>
                          <Typography style={{marginTop:15,opacity:0.7,marginBottom:-10,color:'white'}}>Address*</Typography>
                          <TextField id="standard-basic"  variant="standard" className={classes.textfield}/>
                          <br></br>
                          <Button variant="outlined" style={{color:'white',border:'2px solid white',borderRadius:20,marginTop:20}}>Get It Now</Button>
                    </Grid>
                </Grid>
            </Box>
    );
}