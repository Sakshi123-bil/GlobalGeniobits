import { Fragment, useEffect, useState } from "react";
import { alpha, makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import GroupIcon from "@material-ui/icons/Group";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import MenuIcon from "@material-ui/icons/Menu";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import InfoIcon from "@material-ui/icons/Info";
import Link from "@material-ui/core/Link";
import clsx from "clsx";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import { FormControl, InputLabel } from "@material-ui/core";
import "./Navbar.css";

import Select from "react-select";

//

import { useHistory } from "react-router-dom";
// import {handleOnclickButton, handleOnclickButtonWithParams} from "../commonFunctions";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MenuItem from "@material-ui/core/MenuItem";
import Popover from "@material-ui/core/Popover";
import {
  Business,
  BusinessCenter,
  ExitToApp,
  SearchRounded,
} from "@material-ui/icons";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  rounded: {
    marginRight: theme.spacing(1),
    backgroundColor: alpha(theme.palette.primaryLight.main, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.primaryLight.main, 0.25),
    },
  },
  links: {
    marginRight: theme.spacing(5),
    color: alpha(theme.palette.primary.main, 0.5),
    "&:hover": {
      color: alpha(theme.palette.primary.main, 0.9),
    },
  },
  icon_button: {
    marginRight: theme.spacing(3),
  },
  grow: {
    flexGrow: 1,
    marginTop: 5,
    marginRight: 5,
    marginLeft: 5,
    [theme.breakpoints.up("sm")]: {
      marginTop: 25,
      marginRight: 25,
      marginLeft: 25,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    fontWeight: 600,
    fontSize: theme.spacing(3),
    fontFamily: '"Baloo Bhai 2"',
  },
  search_mobile: {
    margin: 10,
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.primaryLight.main, 0.5),
    "&:hover": {
      backgroundColor: alpha(theme.palette.primaryLight.main, 0.9),
    },
    width: "auto",
    display: "block",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.primaryLight.main, 0.5),
    "&:hover": {
      backgroundColor: alpha(theme.palette.primaryLight.main, 0.9),
    },
    marginRight: theme.spacing(5),
    width: "100%",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
      display: "block",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 0),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(0, 2),
    },
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    fontSize: theme.spacing(1.5),
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  sectionTab: {
    display: "none",
    fontSize: theme.spacing(1.5),
    [theme.breakpoints.up("lg")]: {
      display: "block",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  hide_md: {
    display: "block",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  avatar_small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));
export const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);

export default function Navbar() {
  const classes = useStyles();
  const history = useHistory();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElCart, setAnchorElCart] = useState(null);
  const [userMenuEl, setUserMenuEl] = useState(null);
  const openUserMenuEl = Boolean(userMenuEl);
  const mobileMenuId = "primary-search-account-menu-mobile";

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setMobileMoreAnchorEl(open);
  };

  const list = () => (
    <div className="header_main" role="presentation">
      <List>
        <ListItem div key={"logo"}>
          <Avatar
            variant="rounded"
            className={classes.rounded}
            src={null}
            alt="Logo"
          />
          <Typography
            className={classes.title}
            fontWeight="fontWeightBold"
            variant="h6"
            noWrap
          >
            {"GENIOBITS"}
          </Typography>
        </ListItem>
        <Divider />
        <div className={classes.search_mobile}>
          <Autocomplete
            id="combo-box-demo"
            freeSolo
            options={[]}
            getOptionLabel={(course) => course.title}
            style={{ width: 250 }}
            renderInput={(params) => (
              <TextField
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                {...params}
                label=""
                placeholder="Search..."
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <InputAdornment position="start">
                      {" "}
                      <SearchIcon />
                    </InputAdornment>
                  ),
                  disableUnderline: true,
                }}
              />
            )}
          />
        </div>
        <ListItem
          button
          key={"HOME"}
          onClick={() => {
            window.location = "/#about";
          }}
        >
          <ListItemIcon><HomeIcon  color={"primary"}/> </ListItemIcon>
          <ListItemText primary={"HOME"} />
        </ListItem>
        <ListItem
          button
          key={"INSTITUTES"}
          onClick={() => {
            window.location = "/#courses";
          }}
        >
          <ListItemIcon>
            <SchoolIcon color={"primary"} />
          </ListItemIcon>
          <ListItemText primary={"INSTITUTES"} />
        </ListItem>
        <ListItem
          button
          key={"TEACHERS"}
          onClick={() => {
            window.location = "/#author";
          }}
        >
          <ListItemIcon>
            <FeaturedPlayListIcon color={"primary"} />
          </ListItemIcon>
          <ListItemText primary={"FEATURES"} />
        </ListItem>
        <ListItem
          button
          key={"PRICES"}
          onClick={() => {
            window.location = "/#contact";
          }}
        >
          <ListItemIcon>
            <BusinessCenterIcon color={"primary"} />
          </ListItemIcon>
          <ListItemText primary={"COURSES"} />
        </ListItem>
        <Divider />
        <ListItem button key={"CONTACT US"}>
          <ListItemIcon>
            {/* <Badge badgeContent={5} color="secondary"> */}
              <ContactMailIcon color={"primary"} />
            {/* </Badge> */}
          </ListItemIcon>
          <ListItemText primary={"CONTACT US"} />
        </ListItem>
        <ListItem
          button
          key={"ABOUT US"}
          onClick={() => {
            window.location = "/#contact";
          }}
        >
          <ListItemIcon>
            <InfoIcon color={"primary"} />
          </ListItemIcon>
          <ListItemText primary={"ABOUT US"} />
        </ListItem>
        <ListItem
          button
          key={"LOGIN"}
          onClick={() => {
            window.location = "/#contact";
          }}
        >
          <ListItemIcon>
            {/* <ContactMailIcon color={"primary"} /> */}
          </ListItemIcon>
          <ListItemText primary={"LOGIN"} />
        </ListItem>
        <ListItem
          button
          key={"REGISTER"}
          onClick={() => {
            window.location = "/#contact";
          }}
        >
          <ListItemIcon>
            {/* <ContactMailIcon color={"primary"} /> */}
          </ListItemIcon>
          <ListItemText primary={"REGISTER"} />
        </ListItem>
      </List>
    </div>
  );

  const handleNotificationClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCartClick = (event) => {
    setAnchorElCart(event.currentTarget);
  };

  const handleCloseCart = () => {
    setAnchorElCart(null);
  };

  const handleUserMenu = (event) => {
    setUserMenuEl(event.currentTarget);
  };

  function handleCloseUserMenu() {
    setUserMenuEl(null);
  }

  function handleSignout() {
    // setUserToStorage({});
    // toggleDrawer(false);
    // handleCloseUserMenu();
    // handleOnclickButton(ALL_LINKS.home, history);
  }

  return (
    <div>
      <div>
        <AppBar
          position="static"
          color={"inherit"}
          elevation={0}
          className="desktop_upheader"
        >
          <Toolbar>
            <Typography className={classes.sectionTab}>
              <div className='nav_links'>
                <div >
                  <Link
                    href="/#authors"
                    className={classes.links}
                    className="upheader_element"
                  > 
                    HAVE ANY QUESTION?
                  </Link>
                  
                  <PhoneIphoneIcon style={{color:"#ffb606", fontSize:20, marginBottom:-5, }}/>
                  <Link
                    href="/#authors"
                    className={classes.links}
                    className="upheader_element"
                    style={{borderRight:"1px solid #e8e8e8"}}
                    
                  >
                    (+91)9960436653
                  </Link>
                  <MailOutlineIcon style={{color:"#ffb606", fontSize:22, marginBottom:-5,  marginLeft:13}} />
                  <Link
                    href="/#authors"
                    className={classes.links}
                    className="upheader_element"
                   
                    
                  >
                    contact@geniobits.com
                  </Link>
                </div>
               
              </div>
            </Typography>
            <div className="login_reg">
                  <Link
                    href="/#authors"
                    className={classes.links}
                    className="log_reg"
                    style={{borderRight:"1px solid #e8e8e8"}}
                  >
                    REGISTER
                   
                  </Link>
                  <Link
                    href="/#authors"
                    className={classes.links}
                    className="log_reg"
                  >
                     LOGIN
                  </Link>
                </div>
          </Toolbar>
        </AppBar>
      </div>
      <div>
        <AppBar
          position="static"
          color={"inherit"}
          elevation={0}
          className="desktop_header"
        >
          <Toolbar>
            <Typography
              className={classes.title}
              style={{ fontSize: 35, marginLeft: 30 }}
              fontWeight="fontWeightBold"
              variant="h4"
              noWrap
            >
              {"GENIOBITS"}
            </Typography>
            <div className={classes.grow} />
            <div className={classes.search}>
              {/* <Autocomplete
                            id="combo-box-demo"
                            freeSolo
                            options={ []}
                            getOptionLabel={(course) => course.title}
                            style={{width: 250}}

                            renderInput={(params) => <TextField
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                {...params} label=""
                                placeholder="Search..."
                                InputProps={{
                                    ...params.InputProps,
                                    startAdornment: (<InputAdornment position="start"> 
                                    </InputAdornment>),
                                    disableUnderline: true
                                }}/>}
                        /> */}
            </div>

            <Typography className={classes.sectionTab}>
              <Link
                href="/#about"
                className={classes.links}
                className="primary_color1"
              >
                HOME
              </Link>
              <Link
                href="/#courses"
                className={classes.links}
                className="primary_color1"
              >
                <select
                  style={{ border: "none", fontSize: 14, fontWeight: 540,  }}
                  className="dropdown"
                  name="selectList"
                  value="INSTITUTES"
                  id="selectList"
                >
                  <option style={{ border: "none" }} value="option 1">
                    INSTITUTES
                  </option>
                   
                  <option style={{ border: "none" }} value="option 1">
                    Catogories
                  </option>
                   
                  <option style={{ border: "none" }} value="option 2">
                    Education
                  </option>
                  <option style={{ border: "none" }} value="option 2">
                    Acting
                  </option>
                  <option style={{ border: "none" }} value="option 2">
                    Drama
                  </option>
                  <option style={{ border: "none" }} value="option 2">
                    Singing
                  </option>
                </select>
              </Link>
              <Link
                href="/#authors"
                className={classes.links}
                className="primary_color1"
              >
                FEATURES
              </Link>
              <Link
                href="/#authors"
                className={classes.links}
                className="primary_color1"
              >
                PRICES
              </Link>
              <Link
                href="/#authors"
                className={classes.links}
                className="primary_color1"
              >
                COURSES
              </Link>
              <Link
                href="/#authors"
                className={classes.links}
                className="primary_color1"
              >
                BLOGS
              </Link>
              <Link
                href="/#authors"
                className={classes.links}
                className="primary_color1"
              >
                CONTACT US
              </Link>
              <Link
                href="/#authors"
                className={classes.links}
                className="primary_color1"
              >
                ABOUT US
              </Link>

              <Link href="/#authors" className="search_icon">
                <SearchIcon />
              </Link>
            </Typography>
            {/* <div className={classes.sectionDesktop}>
                        <IconButton className={classes.icon_button} aria-label="Notifications"
                                    color="primary"
                                    onClick={handleNotificationClick}>
                            <Badge badgeContent={5} color="secondary">
                                <NotificationsIcon/>
                            </Badge>
                        </IconButton>
                        {true ?
                            <Fragment>
                                <IconButton
                                    style={{marginTop: 3}}
                                    className={classes.icon_button} aria-label="Cart"
                                    color="primary"
                                    onClick={handleCartClick}>
                                    <Badge badgeContent={0} color="secondary">
                                        <ShoppingCartIcon/>
                                    </Badge>
                                </IconButton>
                                <IconButton
                                    className={classes.icon_button}
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    color="inherit"
                                    onClick={handleUserMenu}
                                >
                                    <StyledBadge
                                        overlap="circular"
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'right',
                                        }}
                                        variant="dot"
                                    >
                                        <Avatar alt={"Shubham"} src={null}/>
                                    </StyledBadge>
                                </IconButton>
                            </Fragment>
                            :
                            <Fragment>
                                <Button className={classes.rounded} variant="outlined" color="primary" marginLeft={5}
                                        >
                                    Login
                                </Button>
                                < Button variant="contained" color="secondary" marginLeft={5} disableElevation
                                        >
                                    Get Started
                                </Button>
                            </Fragment>
                        }
                    </div> */}
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={toggleDrawer(true)}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          anchor={"left"}
          open={mobileMoreAnchorEl}
          onClose={toggleDrawer(false)}
        >
          {list()}
        </Drawer>
        {/*<NotificationPopover anchorEl={anchorEl} handleClose={handleClose}*/}
        {/*                     notification={notifications} setNotification={setNotifications}*/}
        {/*                     showSendNotification={false}/>*/}
        {/*<CartPopover anchorEl={anchorElCart} handleClose={handleCloseCart}*/}
        {/*             cart={cart} setCart={setCart}/>*/}
        <Popover
          id="menu-appbar"
          anchorEl={userMenuEl}
          keepMounted
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={openUserMenuEl}
          onClose={handleCloseUserMenu}
        >
          <List>
            <MenuItem
              onClick={() => {
                // handleOnclickButtonWithParams(ALL_LINKS.profile, history, user.id);
                handleCloseUserMenu();
              }}
            >
              <Typography align={"center"}>My Profile</Typography>
            </MenuItem>
            {true ? (
              <MenuItem
                onClick={() => {
                  // handleOnclickButton(ALL_LINKS.admin_panel, history)
                }}
              >
                <Typography align={"center"}>My Institute</Typography>
              </MenuItem>
            ) : null}
            <MenuItem onClick={handleSignout}>
              <Typography align={"center"}>Sign Out</Typography>
            </MenuItem>
          </List>
        </Popover>
      </div>
    </div>
  );
}
