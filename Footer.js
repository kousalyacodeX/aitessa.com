import {Container, Typography, createTheme, ThemeProvider, Grid, Button, IconButton } from '@mui/material'

import { Box } from '@mui/system';
import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';


import {Link} from 'react-router-dom'

const theme = createTheme({
    palatte:{
        primary:{
            main:"#47d7ac"
        },
        secondary:{},
    },
    typography:{
        fontSize:12,
        h5:{
            color:'#47d7ac'
        }
    }
})

const footerItems = [
    {
        id:1,
        title:'New and Trending',
        content:[
            {
                id:1.1,
                title:'New Courses',
                component:'/'
            },
            {
                id:1.2,
                title:'Free Courses',
                component:'/about'
            },
            {
                id:1.3,
                title:'Learn Artificial Intelligence',
                component:'/hire'
            },
            {
                id:1.4,
                title:'Learn Chat GPT',
                component:'/'
            },
            {
                id:1.5,
                title:'Learn Cyber Security',
                component:'/'
            },
            {
                id:1.6,
                title:'Learn Excel',
                component:'/'
            },
            {
                id:1.7,
                title:'Learn Generative AI with Large Language Model',
                component:'/'
            },
            {
                id:1.8,
                title:'Learn Prompt Engineering for ChatGPT',
                component:'/'
            },
            {
                id:1.9,
                title:'Learn Python',
                component:'/'
            },
            {
                id:1.10,
                title:'Popular Skills & Courses',
                component:'/hire'
            }

        ]
    },
    {
        id:2,
        title:'Services',
        content:[
            {
                id:2.1,
                title:'React',
                component:'/'
            },
            {
                id:2.2,
                title:'Node',
                component:'/'
            },
            {
                id:2.3,
                title:'Express',
                component:'/'
            },
            {
                id:2.4,
                title:'MongoDB',
                component:'/'
            },
            {
                id:2.5,
                title:'Django',
                component:'/'
            },
            {
                id:2.6,
                title:'Python',
                component:'/'
            },
            {
              id:2.7,
              title:'Data Science',
              component:'/'
            },
            {
              id:2.7,
              title:'Machine Learning',
              component:'/'
            }
        ]
    },
    {
        id:3,
        title:'AiTessa',
        content:[
            {
                id:3.1,
                title:'About',
                component:'/',
            },
            {
                id:3.2,
                title:'What we Offer',
                component:'/',
            },
            {
                id:3.3,
                title:'Leadership',
                component:'/',
            },
            {
                id:3.4,
                title:'Careers',
                component:'/',
            }
        ]
    },
    {
        id:4,
        title:'More',
        content:[
            {
                id:4.1,
                title:'Terms and Condition',
                component:'/'
            },
            {
                id:4.2,
                title:'Privacy',
                component:'/'
            },
            {
                id:4.3,
                title:'Help',
                component:'/'
            },
            {
                id:4.4,
                title:'Contact',
                component:'/'
            },
            {
                id:4.5,
                title:'Articles',
                component:'/'
            }
        ]
    },
    {
        id:5,
        title:'Popular Career and Articles',
        content:[
            {
                id:5.1,
                title:'Types of Machine Learning You Should Knoe',
                component:'',
            },
            {
                id:5.2,
                title:'Deep Learning Vs Machine Learning Beginner\'s Guide',
                component:'https://www.gmail.com/',
            },
            {
                id:5.3,
                title:'Machine Learning Books for Beginner\'s',
                component:'',
            },
            {
                id:5.4,
                title:'What is Machine Learning Engineer',
                component:''
            },
            {
                id:5.5,
                title:'Best Python Libraries for Machine Learning',
                component:''
            },
            {
                id:5.6,
                title:'Populat Machine Learning Certifications',
                component:''
            },
            {
                id:5.7,
                title:'Machine Learning Vs. AI - Differences, Uses, and Benefits',
                component:''
            },
            {
                id:5.8,
                title:'Is Machine Learning Hard ? A Guide to Getting Started',
                component:''
            },
            {
                id:5.9,
                title:'Machine Learning in Finance : 10 Applications and Use Cases',
                component:''
            }
        ]
    }
]


const followUs = [
    {
        id:1,
        icon:<LinkedInIcon sx={{fontSize:"50px"}}/>,
        href:'https://www.linkedin.com/'
    },
    {
        id:2,
        icon:<GoogleIcon sx={{fontSize: "50px"}} />,
        href:'https://www.google.com/'
    },
    {
        id:3,
        icon:<InstagramIcon sx={{fontSize: "50px"}} />,
        href:'https://www.instagram.com/'
    }
]

const Footer = () => {
  return (
    <ThemeProvider theme={theme}>
        <Box bgcolor="#212529" color="white" sx={{flexGrow:1}} px={{xs:1, sm:5}} py={{xs:5, sm:10 }}>
            <Container maxWidth="xxlg" >
                <Grid container>
                   
                    {footerItems.map((items, key)=>(
                        <Grid item xs={key===4?12:6} sm={key===4?12:6} md={6} lg={key===4?4:2} key={key+100} >
                           
                                <Typography variant="h5" mb={2} mt={2} sx={{fontWeight:"bold"}}>{items.title}</Typography>
                                    {items.content.map((item2, key)=>(
                                        <Box key={key}>
                                            <Button component={Link} to={item2.component} sx={{color:"#fff" }} >{item2.title}</Button>
                                            </Box>
                                    ))}            
                           
                        </Grid>
                    ))}
                </Grid>
                
                <Grid container sx={{mt:3}}>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h4" mb={2} mt={2} sx={{fontWeight:"bold", color:"#47d7ac;"}}>Follow us on</Typography>
                        
                        {followUs.map((item, key)=><>
                            <IconButton sx={{color:"#fff",mr:2}} href={item.href} target="_blank">
                                {item.icon}
                            </IconButton>
                        </>)}
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Typography variant="h6" mb={2} mt={2} sx={{fontWeight:"bold", color:"#47d7ac;"}}>NeuralWeb Toll Free Number</Typography>
                        <Typography variant="p" component="p"><AddIcCallIcon/> &nbsp;&nbsp; +91 6232-598-017</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6" mb={2} mt={2} sx={{fontWeight:"bold", color:"#47d7ac;"}}>NeuralWeb Contact Email</Typography>
                        <Typography variant="p" component="p"><AttachEmailIcon/> &nbsp;&nbsp; contact@aitessa.com</Typography> 
                    </Grid>
                </Grid>



                {/* </Grid> */}
                <Box textAlign="center" pt={{xs:5, sm:10}} pb={{xs:5, sm:0}} sx={{fontFamily:'Figtree', fontSize:15}}>
                    <Link href="http://nuralweb.in" target="_blank" >&copy; aitessa&reg; {new Date().getFullYear()} All Right Reserved</Link>
                </Box>
            </Container>
        </Box>
    </ThemeProvider>
  )
}

export default Footer