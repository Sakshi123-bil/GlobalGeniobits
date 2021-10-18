import { Avatar, Divider, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { Box } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import image from './Images/python.jpg';
import GroupOutLinedIcon from '@material-ui/icons/GroupOutlined';
import { MessageOutlined } from '@material-ui/icons';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';



const useStyles = makeStyles({

  mainContainer: {

   paddingLeft:250,
    backgroundColor: 'MintCream',
    paddingTop:20,


    '@media (max-width: 1024px)': {
      paddingLeft:0,
    }
  },
  catbtn: {
    borderRadius: 20,
    backgroundColor: 'white',
    marginRight:10,

    '@media (max-width: 1000px)': {
      marginRight:2,
    },
    '@media (min-width: 1024px)': {
     display:'inline'
    }
  },
  mainContainerCard: {
    width: 300,

    '@media (max-width: 1000px)': {
      width: '100%',
    }
  },
  btnSection:{
    marginLeft:240,
    marginTop:20,
    '@media (max-width: 1024px)': {
     marginTop:10,
     marginLeft:0,
    },
   
  },
  

});


export default function PopularInstitutesCategory() {
  const classes = useStyles();
  return (
    <Box>
      <Box >


        <Grid container spacing={0} className={classes.mainContainer}>
          <Grid xs={12} md={4} className={classes.heading}>
            <Box>
              <Typography color="textSecondary" style={{ fontSize: 10, marginBottom: -8 }}>THE LEADER IN ONLINE LEARNING</Typography>
              <Typography style={{ marginLeft: 245, backgroundColor: 'gold', width: 35, textAlign: 'center', borderRadius: '50%', color: 'white', border: '6px solid white', marginBottom: -15,fontSize:18, fontWeight:'bold',padding:2,boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
 }}>17</Typography>
              <Typography variant="h4" style={{ fontWeight: 'bold' }}>Popular Course</Typography>
            </Box>

          </Grid>
         
          <Grid xs={12} md={4} className={classes.btnSection}>
            <Button variant="contained" color="textSecondary" className={classes.catbtn}>ALL</Button>
            <Button variant="contained" color="textSecondary" className={classes.catbtn}>CSS</Button>
            <Button variant="contained" color="textSecondary" className={classes.catbtn}>Frontend</Button>
            <Button variant="contained" className={classes.catbtn}>backend</Button>
          </Grid>
       
        </Grid>


      </Box>
      <Grid container spacing={0} style={{display:'flex' ,justifyContent:'center',backgroundColor: 'MintCream', paddingTop:30}}>
        <Grid md={3} xs={12}>
          <PopularInstituteCard
          style={{marginRight:-10}}
            institutecat="FRONTEND"
            description="LMS Interactive content Program"
            name="keny white"
            studentCount="300"
            MessageCount="2"
            color="skyblue"
          ></PopularInstituteCard>
        </Grid>
        <Grid md={3} xs={12}>
          <PopularInstituteCard
            institutecat="BACKEND"
            description="Become Php master and make money"
            name="keny white"
            studentCount="300"
            MessageCount="2"
            color="skyblue"
            
          ></PopularInstituteCard>
        </Grid>
        <Grid md={2} xs={12}>
          <PopularInstituteCard
            institutecat="BACKEND"
            description="Become Php master and make money"
            name="Keny White"
            studentCount="300"
            MessageCount="2"
            color="skyblue"
          ></PopularInstituteCard>
        </Grid>


      </Grid>

    </Box>
  )
}

function PopularInstituteCard(props) {
  const classes = useStyles();
  return (
    <Card sx={{ maxWidth: 300 }} className={classes.mainContainerCard}>
      <CardMedia
        component="img"

        height="170"
        image={image}

      />
      <CardContent>
        <Button variant="outlined" style={{ color: props.color, borderRadius: 20, height: 20, fontSize: 8, width: 30 }}>{props.institutecat}</Button>
        <Typography variant="h6" color="text.secondary" style={{ fontWeight: 'bold', marginTop: 10 }}>
          {props.description}

        </Typography>
        <Box style={{ display: 'flex', marginTop: 15 }}>
          <Avatar style={{ height: 35, width: 35 }}></Avatar>
          <Typography color="textSecondary" style={{ fontSize: 13, marginTop: 6, marginLeft: 20 }}>{props.name}</Typography>
        </Box>

        <Divider style={{ marginTop: 15 }}></Divider>

        <Grid container spacing={0} style={{marginTop:10}}>
          <Grid style={{ display: 'flex' }} xs={7} md={7}>
            <GroupOutLinedIcon style={{ color: 'gray', marginRight: 6 }}></GroupOutLinedIcon>
            <Typography style={{ fontSize: 12, color: "gray", marginTop: 2, marginRight: 6 }}>{props.studentCount}</Typography>
            <MessageOutlined style={{ color: 'gray', marginRight: 6 }}></MessageOutlined>
            <Typography style={{ fontSize: 12, color: 'gray', marginTop: 2, marginRight: 6 }}>{props.MessageCount}</Typography>
          </Grid>
          <Grid xs={5} md={5}>
            <Stack spacing={1}>
              
              <Rating name="half-rating-read" defaultValue={0} precision={0.5} readOnly size="small" />
            </Stack>
          </Grid>
        </Grid>

      </CardContent>

    </Card>
  )
}