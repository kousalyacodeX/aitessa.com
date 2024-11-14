import { Typography, Container, Box, Grid, Button } from '@mui/material'
// import { styled } from '@mui/material/styles';

import AcUnitIcon from '@mui/icons-material/AcUnit';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddTaskIcon from '@mui/icons-material/AddTask';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';


import React from 'react'


const bannerBackground ={
  p:10,
  backgroundImage:"url('images/1.jpg')"
}

const itemData = [
  {
    image:<AccessibilityIcon sx={{width:50, height:50, color:"#47d7ac"}}/>,
    title:"AI / ML",
    description:"Empower your business with our AI and ML solutions. Harness data-driven insights and automation for unparalleled efficiency and growth.",
    button:<Button sx={{color:"#000", fontWeight:"bold",pr:2,pl:2, "&:hover":{backgroundColor:"#47d7ac", color:"#fff", transition:"0.5s all"}}}>Get Service</Button>
  }, 
  
  {
    image:<AccountBalanceIcon sx={{width:50, height:50, color:"#47d7ac"}}/>,
    title:"Data Science",
    description:"Transform your business with Data Science expertise. Uncover actionable insights and drive innovation through advanced analytics.",
    button:<Button sx={{color:"#000", fontWeight:"bold",pr:2,pl:2, "&:hover":{backgroundColor:"#47d7ac", color:"#fff", transition:"0.5s all"}}}>Get Service</Button>
  },  
  {
    image:<AcUnitIcon sx={{width:50, height:50, color:"#47d7ac"}}/>,
    title:"App Developement",
    description:"Elevate your business with custom App Development. Craft seamless, user-centric experiences for enhanced engagement and growth.",
    button:<Button sx={{color:"#000", fontWeight:"bold",pr:2,pl:2, "&:hover":{backgroundColor:"#47d7ac", color:"#fff", transition:"0.5s all"}}}>Get Service</Button>
  },  
  {
    image:<AccessAlarmIcon sx={{width:50, height:50, color:"#47d7ac"}}/>,
    title:"API Management",
    description:"Optimize operations with API Management. Streamline connections, enhance security, and drive efficiency for seamless integration.",
    button:<Button sx={{color:"#000", fontWeight:"bold",pr:2,pl:2, "&:hover":{backgroundColor:"#47d7ac", color:"#fff", transition:"0.5s all"}}}>Get Service</Button>
  },  
  
  
  {
    image:<AddAPhotoIcon sx={{width:50, height:50, color:"#47d7ac"}}/>,
    title:"Data Analytics",
    description:"Uncover insights with Data Analytics expertise. Drive informed decisions and unlock business potential through advanced data-driven strategies.",
    button:<Button sx={{color:"#000", fontWeight:"bold",pr:2,pl:2, "&:hover":{backgroundColor:"#47d7ac", color:"#fff", transition:"0.5s all"}}}>Get Service</Button>
  }, {
    image:<AccountCircleIcon sx={{width:50, height:50, color:"#47d7ac"}}/>,
    title:"Cloud Computing",
    description:"Unlock agility with Cloud Computing solutions. Scale, innovate, and optimize operations for a resilient and future-ready business.",
    button:<Button sx={{color:"#000", fontWeight:"bold",pr:2,pl:2, "&:hover":{backgroundColor:"#47d7ac", color:"#fff", transition:"0.5s all"}}}>Get Service</Button>
  }, 
  {
    image:<AddShoppingCartIcon sx={{width:50, height:50, color:"#47d7ac"}}/>,
    title:"CRM",
    description:"Enhance relationships with CRM solutions. Streamline customer interactions, boost sales, and foster long-lasting connections for business success.",
    button:<Button sx={{color:"#000", fontWeight:"bold",pr:2,pl:2, "&:hover":{backgroundColor:"#47d7ac", color:"#fff", transition:"0.5s all"}}}>Get Service</Button>
  }, 
  {
    image:<AddTaskIcon sx={{width:50, height:50, color:"#47d7ac"}}/>,
    title:"Buisness Consulting",
    description:"Elevate your business with expert Consulting. Gain strategic insights, optimize operations, and drive growth for sustained success.",
    button:<Button sx={{color:"#000", fontWeight:"bold",pr:2,pl:2, "&:hover":{backgroundColor:"#47d7ac", color:"#fff", transition:"0.5s all"}}}>Get Service</Button>
  }, 
  {
    image:<AddToDriveIcon sx={{width:50, height:50, color:"#47d7ac"}}/>,
    title:"Finance Consulting",
    description:"Empower your business with Finance Consulting. Gain strategic financial insights, optimize operations, and drive growth for sustained success",
    button:<Button sx={{color:"#000", fontWeight:"bold",pr:2,pl:2, "&:hover":{backgroundColor:"#47d7ac", color:"#fff", transition:"0.5s all"}}}>Get Service</Button>
  },
]

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   margin:theme.spacing(3),
//   color: theme.palette.text.secondary,
// }));

const Services = () => {
  return (
    <>
      <Box sx={bannerBackground}>
        <Grid item xs={12} md={12} lg={12}>
          <Container>
            <Typography variant="h2" sx={{textAlign:"center"}}>
              Services
            </Typography>
            <Typography variant="p" component="p" sx={{textAlign:"justify",mt:10}}>
              At the intersection of innovation and technology, our IT services pave the way for businesses to thrive. We decode complexity, crafting seamless solutions that empower growth and transformation. With every line of code, we build bridges between your aspirations and digital success. Let's collaborate to redefine what's possible.
            </Typography>
          </Container>
        </Grid>
      </Box>
      <Container>
        <Grid container sx={{textAlign:"center"}}>
          {itemData.map((item, key)=>(
            <Grid item xs={12} md={6} lg={4} key={key} sx={{mb:5}}>
             <Typography variant="h1">
              {item.image}
             </Typography>
             <Typography variant="h5">
              {item.title}
             </Typography>
             <Typography variant="p" component="p" sx={{mb:3, fontSize:14, p:3}}>
              {item.description}
             </Typography>
             {item.button}
            </Grid>
          ))}
        </Grid>
      </Container>
     
    </>
  )
}

export default Services