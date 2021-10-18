import { Button, Card, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { Grid } from '@material-ui/core';


const useStyles=makeStyles({
featureNo:{
    fontWeight:'bold',
    backgroundColor:'yellow',
    width:80,
    borderTopRightRadius:28,
    borderBottomRightRadius:28,
    textAlign:'center',
    paddingTop:3,
    paddingBottom:3,
    marginTop:35,
 
},
featuresubContainer:{
marginRight:40,

boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',



'@media (max-width: 1000px)' : {
    marginRight:0,
    marginBottom:10
  },
  '@media (width:1024)':{
    marginRight:30,
  }
},

featuresMainContainer:{
  display:'flex',
  justifyContent:'center',
  padding:20,
 

    '@media (max-width: 1000px)' : {
        marginLeft:0,
      }
},
featureHeading:{
padding:10,
width:180,
paddingLeft:20,
paddingRight:20,

},
featureDescription:{
    padding:10,
    paddingLeft:20,
    paddingRight:20,
    lineHeight:1.8
    
},
centerFeature:{
marginTop:60,
'@media (max-width: 1000px)' : {
    marginTop:0
  }
}

});
export  function FeatureCard(props){
    const classes=useStyles();
return(
    <Card className={classes.featuresubContainer} border={1} variant={"elevation"}>
     
       <Typography variant="h4" className={classes.featureNo} style={{backgroundColor:props.color,color:'white'}}>{props.number}</Typography>
       <Typography variant="h6" style={{fontWeight:'bold'}} className={classes.featureHeading} >{props.heading}</Typography>
       <Typography color="textSecondary" style={{fontSize:10}} className={classes.featureDescription}>{props.description}</Typography>
       <Button variant="text" style={{fontSize:10,marginBottom:30,paddingLeft:20}}>view More</Button>
   </Card>
)
}

export default function FeatureCardList(){
    const classes=useStyles();
    return(
      
<Grid container spacing={0} className={classes.featuresMainContainer}>
    <Grid xs={12} md={3}>
        <FeatureCard
        color="LightSalmon"
        number="01"
        heading="Best Industry Leaders"
      
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam"
        ></FeatureCard>
    </Grid>
    
    <Grid xs={12} md={3}>
    <div className={classes.centerFeature}>
    <FeatureCard
       color="yellow"
        number="02"
        heading="Learn Course Online"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam"
       
        ></FeatureCard>
         </div>
    </Grid>
   
    <Grid xs={12} md={3}>
    <FeatureCard
     color="DimGray"
        number="03"
        heading="Book Lirary & Store"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam"
        ></FeatureCard>
    </Grid>
</Grid>
    );
}