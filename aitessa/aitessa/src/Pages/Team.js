import React from 'react'
import { Container, Typography, Grid, Avatar, IconButton } from '@mui/material'


import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const team = [
  {
    key:1,
    avatarAlt:"Shubham Singh",
    avatarImage:"/images/shubham.png",
    name:"Shubham Singh",
    title:"Machine Learning Engineer",
    about:"Hey there, I'm the Chief Brainiac and Founder of Neural Web! As a machine learning engineer, I'm the wizard behind the algorithms, turning data into pure magic. With a dash of humor and a sprinkle of code, I bring AI to life. From neural networks to deep learning, I've got the tech tricks up my sleeve. Let's turn your wildest data dreams into reality!",
    instagram:"https://www.instagram.com/s.sam_singh/",
    linkedIn:"https://www.linkedin.com/in/shubh94/",
    twitter:"https://x.com/"
  },
  {
    key:2,
    avatarAlt:"Tessa Parmar",
    avatarImage:"/images/tessa.jpg",
    name:"Tessa Parmar",
    title:"Full Stack Developer",
    about:"In a world where data is the new gold, I'm a prospector, extracting insights and patterns that remain hidden to the untrained eye. My code is a symphony of algorithms, playing in harmony to decipher the secrets within the data. Each line I write carries the promise of discovery, empowering machines to evolve and innovate.",
    instagram:"https://www.instagram.com/coding_girl_official/",
    linkedIn:"https://www.linkedin.com/in/tessa-parmar01/",
    twitter:"https://x.com/01tesa"
  },
  
]




const Team = () => {
  
  return (
   <>
    <Container>
      <Typography variant="h4" sx={{textAlign:"center", mt:10, color:"#47d7ac"}}>Meet Our Dynamic Duo</Typography>
      <Typography variant="p" component="p" sx={{textAlign:"center", mt:5}}>At AiTessa, we believe in the power of a focused, two-person team. With a lean and agile approach, we're able to provide you with a level of personalized attention and expertise that larger firms simply can't match. Our team members bring complementary skills and a shared passion for excellence to every project. Together, we're committed to delivering innovative solutions that exceed your expectations.</Typography>
      <Grid container sx={{ textAlign:"center"}}>
        {team.map((item)=>(

        <Grid item xs={12} sm={12} md={6} lg={6} sx={{p:10}} key={item.key}>
          <center>
            <Avatar alt={item.avatarAlt} src={item.avatarImage} sx={{width:200, height:200, }}/>
          </center>
          <Typography variant="h4" sx={{mt:3}}>{item.name}</Typography>
          <Typography variant="h6" sx={{mb:3}}>{item.title}</Typography>
          <Typography variant="p" sx={{fontSize:12}}>{item.about}</Typography>
          <Typography sx={{mt:2}}>
            <IconButton href={item.twitter} target="_blank"><TwitterIcon sx={{color:"#47d7ac"}}/></IconButton>
            <IconButton href={item.instagram} target="_blank"><InstagramIcon sx={{color:"#47d7ac"}}/></IconButton>
            <IconButton href={item.linkedIn} target="_blank"><LinkedInIcon sx={{color:"#47d7ac"}}/></IconButton>
          </Typography>
        </Grid>

        ))}
      </Grid>
    </Container>
   </>
  )
}

export default Team