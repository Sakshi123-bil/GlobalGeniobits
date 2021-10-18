import React, { useState } from "react";
import Component from 'react';
import "./Carousel.css";
import { images } from "./CarouselData";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { makeStyles, Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { CardMedia } from "@material-ui/core";
import City from "./Images/city.jpg";
import Salvador from "./Images/salvador.jpg";
import { Box } from "@mui/system";
import { ArrowRight, ArrowRightAlt } from "@material-ui/icons";
import Button from '@mui/material/Button';
import {FloatingLettersTextBuilder } from 'react-animated-text-builders'



 
const useStyles = makeStyles({

    LeftConatiner: {
        marginTop: 160,
        
        '@media (max-width: 1023px)': {
            marginTop: 90,

        },
    },
    leftLineOne: {

        marginBottom: -20,
        marginLeft:200,
        '@media (min-width: 1240px)': {


        },
    },

    leftLineTwo: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        marginTop: 20,
        letterSpacing: 8,
        fontSize: 120,
        '@media (max-width: 1240px)': {

            fontSize: 50
        },
    },

    LeftLineThird: {
        width: '80%',
        textAlign: 'center',
        color: 'white',
        fontSize: 25,
        marginLeft: 70,
        display: 'flex',
        justifyContent: 'center',

        '@media (max-width: 1023px)': {
            marginLeft: 0,
            width: '100%',

        },
    },
    text: {
        '@media (max-width: 1240px)': {
            width: '50%'

        },
    },
    buytbtn: {
        display: 'flex',
        justifyContent: 'center'
    }
})

function Slider() {
    const classes = useStyles();

    const [currImg, setCurrImg] = useState(0);

    return (
        <div className="carousel">
            <div
                className="carouselInner"
            // style={{ backgroundImage: `url(${images[currImg].img})`  }}
            >
                <div
                    className="left"
                    onClick={() => {
                        currImg > 0 && setCurrImg(currImg - 1);
                    }}
                >
                    <ArrowBackIosIcon style={{ fontSize: 30 }} />
                </div>
                <Grid container spacing={0} >
                    <Grid md={6} xs={12} className={classes.LeftConatiner}>
                        
                   
                    <Typography variant="h5" style={{ color: 'white', textAlign: 'center', letterSpacing: 2 }} className={classes.leftLineOne}>
                      
                        {/* <FloatingLettersTextBuilder
                        style={{ color: 'white', textAlign: 'center', letterSpacing: 2 ,}} className={classes.leftLineOne}
                            floatingSpeed={500}
                            lettersAppearanceDelay={100}
                            animationMaxMargin={"200px"}
                            animationMinMargin={"0px"}
                          
                        >   The Best theme for </FloatingLettersTextBuilder> */}
                    </Typography>


                    <Typography variant="h1" className={classes.leftLineTwo} dataAos="fade-up">
                    <FloatingLettersTextBuilder
                            className={classes.leftLineTwo}
                            floatingSpeed={500}
                            lettersAppearanceDelay={100}
                            animationMaxMargin={"200px"}
                            animationMinMargin={"0px"}
                          
                        >  Education</FloatingLettersTextBuilder>
                       
                    </Typography>

                    <Typography className={classes.LeftLineThird}>
                    <FloatingLettersTextBuilder
                            className={classes.leftLineTwo}
                            floatingSpeed={1000}
                            lettersAppearanceDelay={10}
                            animationMaxMargin={"260px"}
                            animationMinMargin={"0px"}
                          
                        > Free online courses from the worlds leading</FloatingLettersTextBuilder>
                    </Typography>
                    
                    <Typography className={classes.LeftLineThird}>
                    <FloatingLettersTextBuilder
                            className={classes.leftLineTwo}
                            floatingSpeed={1000}
                            lettersAppearanceDelay={10}
                            animationMaxMargin={"260px"}
                            animationMinMargin={"0px"}
                          
                        >experts.join 17 millions learners today</FloatingLettersTextBuilder>
                    </Typography>

                    <Button className="Buy_btn" variant="contained" style={{ backgroundColor: 'white', color: 'black', padding: 20, borderRadius: 40, marginLeft: 210, marginTop: 20 }}><ArrowRightAlt style={{ fill: 'yellow' }} ></ArrowRightAlt>Buy eduma Now</Button>
                </Grid>
                <Grid md={4} xs={0}>
                    <img src={images[currImg].img} alt="Girl in a jacket" className="SideGirl" height="880" />
                </Grid>



            </Grid>
            <div
                className="right"
                onClick={() => {
                    currImg < images.length - 1 && setCurrImg(currImg + 1);
                }}
            >
                <ArrowForwardIosIcon style={{ fontSize: 30 }} />
            </div>
        </div>
        </div >
    );
}

export default Slider;