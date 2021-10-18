
import './index.css';
import React, {Suspense} from "react";
import {createTheme, ThemeProvider} from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";


import {MuiPickersUtilsProvider} from "@material-ui/pickers";
//  import {ALL_LINKS} from "./constants";
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import FeatureCard from "./components/FeatureCard";
import PopularInstituteCategory from "./components/PopularInstitutesCategory";
import RegisterNow from "./components/RegisterNow";
// import ScrollToTop from "./components/general/ScrollToTop";
// import PrivateRoute from "./components/general/PrivateRoute";
// import Footer from "./components/general/footer";





const theme = createTheme({
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Poppins',
      '-apple-system',
      'BlinkMacSystemFont',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    allVariants: {
      color: "#111235"
    },
  },
  root: {},
  palette: {

    background: {},
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#000',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#FF261A',
      // dark: will be calculated from palette.secondary.main,
    },
    primaryLight: {
      main: '#F3F5FA',
    },
    star: {
      main: '#FF9529',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

function App() {

  // const pages = [
  //   ALL_LINKS.home,

  // ];

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <div className="App">
                  <Navbar

                  />    
                

                  

            </div>
            <Slider></Slider>
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </BrowserRouter>
       <FeatureCard></FeatureCard>
       <PopularInstituteCategory></PopularInstituteCategory>
       <RegisterNow></RegisterNow> 
     
      </>
  );
}

export default App;
