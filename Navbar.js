import * as React  from 'react'
import { AppBar, Box, CssBaseline, IconButton, Toolbar, Typography, Button, Drawer, Divider, List, ListItem, ListItemButton, ListItemText, Container, AccordionSummary, AccordionDetails } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { ThemeProvider, createTheme, Menu, MenuItem } from '@mui/material';
import {Link} from 'react-router-dom'
import Fade from '@mui/material/Fade';
import  KeyboardArrowDownIcon  from '@mui/icons-material/KeyboardArrowDown'

import Accordion from '@mui/material/Accordion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'mui-image'

const drawerWidth=240;
// const navItems = ["Work","Method","Services","Company","Contact"]
const navItems =[
    {
        key:1,
        text:"Home",
        link:"/",
        endIcon:null
    },
    {
        key:2,
        text:"Method",
        link:"/method",
        endIcon:null
    },
    {
        key:3,
        text:"Services",
        link:"/services",
        endIcon:null
    },
    {
        key:4,
        text:"Company",
        link:null,
        endIcon:<KeyboardArrowDownIcon/>
    }
]


const theme = createTheme({
    palette:{
        primary:{
            main:"#fff"
        },
        secondary:{
            main:"#47d7ac"
        }
    }
})

// about submenu
const about = [
    {
        key:1,
        text:'Our Company',
        link:"/company"
    },
    {
        key:2,
        text:'Our Team',
        link:"/team"
    },
    {
        key:3,
        text:'Career',
        link:"/career"
    }

  ]

const Navbar = (props) => {
   
    const [mobileOpen, setMobileOpen] = React.useState(false);
    
    
    const handleDrawerToggle =()=>{
        setMobileOpen((prevState) => !prevState);
    };
    
    
    
    
    
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl)

    const handleClick = (event) => {
        // console.log("cT:- ", event.currentTarget['text'])
        if (event.currentTarget['text'] === "Company"){
          setAnchorEl(event.currentTarget);
        }
  
        if (event.currentTarget['text'] !== "Company")
        {
          setAnchorEl(null);
        }
      };

      
    const handleClose = (event) => {
        setAnchorEl(null);
      };
  
    const drawer= (
        <Box
             sx={{textAlign: "center"}}
        >
            <Typography
                variant="h6"
                sx={{my:2}}
            >
                Tesys
            </Typography>
            <Divider/>
            <List>
            <ListItem key="1" disablePadding>
                    <ListItemButton sx={{color:"#000"}} to="/">
                        <ListItemText
                            primary="Home"
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem key="2" disablePadding>
                    <ListItemButton sx={{color:"#000"}} to="/method">
                        <ListItemText
                            primary="Method"
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem key="3" disablePadding>
                    <ListItemButton sx={{ color:"#000"}} to="/services">
                        <ListItemText
                            primary="Services"
                        />
                    </ListItemButton>
                </ListItem>
                    <Accordion>
                        <AccordionSummary 
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            sx={{borderNottom:"0px"}}
                            >
                            <Typography>Company</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{backgroundColor:"#47d7ac"}}>
                        <ListItem key="4.1" disablePadding>
                                <ListItemButton sx={{ color:"#fff"}} to="/company">
                                    <ListItemText
                                        primary="Our Company"
                                        />
                                </ListItemButton>
                            </ListItem> 
                            <ListItem key="4.2" disablePadding>
                                <ListItemButton sx={{ color:"#fff"}} to="/team">
                                    <ListItemText
                                        primary="Our Team"
                                        />
                                </ListItemButton>
                            </ListItem>
                            <ListItem key="4.3" disablePadding>
                                <ListItemButton sx={{ color:"#fff"}} to="/career">
                                    <ListItemText
                                        primary="Career"
                                        />
                                </ListItemButton>
                            </ListItem>
                        </AccordionDetails>
                    </Accordion>

              
           
            </List>
        </Box>
    )

    // const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={theme}>
        <Box sx={{display:"flex"}}>
            <CssBaseline/>
            <AppBar position="static" sx={{p:2}}>
                <Container>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label='open drawer'
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{mr:2, display:{ md: 'none' }}}
                        >
                            <MenuIcon></MenuIcon>
                        </IconButton>
                        <Typography
                            variant="h5"
                            component="div"
                            sx={{flexGrow:1, display:{xs:"block", sm:"block", fontWeight:"bold"}}}
                        >
                            <Image src="/images/logo.png" width="200px"/>
                        </Typography>
                        <Box
                            sx={{display:{xs:"none",sm:"none", md:"block"}}}
                        >
                            {navItems.map((item)=>(
                                <Button 
                                    key={item.key} 
                                    sx={{color:"#13294b", mr:4}} 
                                    component={Link} 
                                    to={item.link}
                                    onClick={handleClick}>
                                    {item.text}
                                    <IconButton edge="end" aria-label={item.endIcon}>{item.endIcon}</IconButton>
                                </Button>
                            ))}
                            {/* About Submenu */}
                            <Menu
                            id="fade-menu"
                            MenuListProps={{
                                'aria-labelledby': 'fade-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            TransitionComponent={Fade}
                            
                            >
                            {about.map((item, key)=>(
                                <MenuItem 
                                key={key} 
                                component={Link} 
                                to={item.link} 
                                onClick={handleClose}
                                sx={{backgroundColor:"#47d7ac",color:"#fff",mt:-1,mb:-1,p:2,'&:hover':{backgroundColor:"#fff", color:"#000", transition:"0.5s all"}}}
                                >{item.text}</MenuItem>
                            ))}
                            </Menu>
                        </Box>
                        
                    </Toolbar>
                    
                </Container>
            </AppBar>


            <Box
                component="nav"
            >
                <Drawer
                    // container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted:true,
                    }}
                    sx={{
                        display:{xs:"block", sm:"none"},
                        '& .MuiDrawer-paper':{boxSizing: 'border-box', width:drawerWidth},
                    }}
                >
                    {drawer}
                </Drawer>

            </Box>
        </Box>
   </ThemeProvider>
  )
}

export default Navbar