import React from 'react'
import {Container, Grid, createTheme, ThemeProvider, Typography} from '@mui/material'
import Image from 'mui-image'

const theme = createTheme({
    typography:{
        fontFamily:"Segoe ui"
    }
})

const publish = [
    {
        count:"1k +",
        item:"Satisfied Customer"
    },
    {
        count:"1.5k +",
        item:"Website Developed"
    },
    {
        count:"30 +",
        item:"Technology Used"
    },
    {
        count:"20 +",
        item:"Machine Learning Project"
    },
    {
        count:"10K +",
        item:"Satisfied Customer"
    },
    {
        count:"300 +",
        item:"Website Developed"
    }
]
const About = () => {

  return (
    <ThemeProvider theme={theme}>
    <Container maxWidth="xl">
        <Grid container sx={{mt:10}}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <Container>
                    <Image src="/images/logo.png" width="200px">

                    </Image>
                    <Typography component="p" variant="p" sx={{mt:2}}>
                        Because we deliver the best & we are unbeatable.
                    </Typography>
                    <Typography component="p" variant="p" sx={{mt:2}} textAlign="justify">
                        Aitessa is a dynamic force in the IT industry, pioneering innovation across a spectrum of cutting-edge technologies. With a relentless pursuit of excellence, we've established ourselves as leaders in web development, mobile app development, and artificial intelligence technology.
                    </Typography>
                    <Typography component="p" variant="p" sx={{mt:2}} textAlign="justify">
                        Our Expertise Spans Across <Typography variant="p" sx={{fontWeight:"bold", color:"#47d7ac"}}>Web Development</Typography>, <Typography variant="p" sx={{fontWeight:"bold", color:"#47d7ac"}}>Mobile App Development</Typography> and <Typography variant="p" sx={{fontWeight:"bold", color:"#47d7ac"}}>Artificial Intelligence</Typography>
                    </Typography>
                    <Typography component="p" variant="p" sx={{mt:2}} textAlign="justify">
                        Aitessa's commitment to excellence extends beyond technology; it's about empowering businesses to thrive in the digital landscape. With a team of seasoned professionals, we deliver solutions that drive efficiency, elevate customer experiences, and unlock new opportunities.
                    </Typography>
                </Container>
            </Grid> 
            <Grid item xs={12} sm={12} md={6} lg={6}  sx={{textAlign:"center"}}>
           
                    <Grid container>
                        {publish.map((item, map)=><>
                        
                            <Grid item xs={6} sm={6} md={4} lg={4} sx={{p:5}} >
                                <Typography variant="h4" sx={{fontWeight:"bold", color:"#47d7ac"}}>{item.count}</Typography>
                                <Typography variant="p">{item.item}</Typography>
                            </Grid>
                        </>)}
                       
                    </Grid>
            </Grid>
        </Grid>
    </Container>
    
 </ThemeProvider>
  )
}

export default About



