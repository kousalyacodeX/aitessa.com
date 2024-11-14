import React from 'react'
import { Container, Grid, Typography } from '@mui/material'
import StarsIcon from '@mui/icons-material/Stars';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const items = [
    {
        icon:<StarsIcon sx={{ borderTop:5, borderBottom:5,borderBottomColor:"#fff", borderRadius:"50% 50%", fontSize:"150px", pt:3,pb:3, color:"#47d7ac",transition:"0.5s all", '&:hover':{borderTopColor:"#fff", borderBottom:5}}}/>,
        title:'Proven Track Record',
        detail:'We have a history of delivering results for businesses of all sizes and industries.'
    },
    {
        icon:<AssuredWorkloadIcon sx={{ borderBottom:5,borderTop:5, borderTopColor:"#fff", borderRadius:"50% 50%", fontSize:"150px", pt:3,pb:3, color:"#47d7ac", transition:"0.5s all", '&:hover':{borderBottomColor:"#fff", borderTopColor:"#47d7ac"}}}/>,
        title:'Dedicated Support',
        detail:'Our team is available around the clock to address your IT needs and concerns.'
    },
    {
        icon:<Diversity3Icon sx={{ borderTop:5, borderBottom:5,borderBottomColor:"#fff", borderRadius:"50% 50%", fontSize:"150px", pt:3,pb:3, color:"#47d7ac",transition:"0.5s all", '&:hover':{borderTopColor:"#fff", borderBottom:5}}}/>,
        title:'Tailored Solutions',
        detail:'Every business is unique. We customize our services to meet your specific requirements.'
    },
    {
        icon:<MilitaryTechIcon sx={{ borderBottom:5,borderTop:5, borderTopColor:"#fff", borderRadius:"50% 50%", fontSize:"150px", pt:3,pb:3, color:"#47d7ac", transition:"0.5s all", '&:hover':{borderBottomColor:"#fff", borderTopColor:"#47d7ac"}}}/>,
        title:'Cutting-Edge Technology',
        detail:'We stay on top of the latest trends and technologies to keep your business ahead of the curve.'
    }
]

const WhyChooseUs = () => {
  return (
    <>
        <Container align="center" sx={{pt:15, pb:15}}>
            <Typography variant="h3" component="p" sx={{mb:20}}>Why Choose Us</Typography>
            <Grid container>
                {items.map((item, key)=><>
                    <Grid xs={12} sm={12} md={6} lg={3} sx={{mb:10}}>
                        <Typography variant='h2' component="h2">
                            {item.icon}
                        </Typography>
                        <Typography variant='p' sx={{mt:5,fontWeight:"bolder" }}>
                            {item.title}
                        </Typography>
                        <Typography variant="p" component="p" sx={{p:2}}>
                            {item.detail}
                        </Typography>
                    </Grid>
                </>)}
            </Grid>
        </Container>
        <Container sx={{textAlign:"center",mb:15}}>
          <Typography variant="h6" sx={{mb:4}}>
            Need Query ? Feel Free to ask at any time
          </Typography>
          <Typography variant="h4">
          <MailOutlineIcon sx={{ fontSize:25}}/><b> contact@aitessa.com</b>
          </Typography>
         
      </Container>
    </>
  )
}

export default WhyChooseUs