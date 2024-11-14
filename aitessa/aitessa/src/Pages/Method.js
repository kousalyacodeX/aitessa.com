import React from 'react'
import { ThemeProvider,Box, Grid, createTheme, Typography, Button, Paper } from '@mui/material'
import { Container } from '@mui/system'
import Image from 'mui-image'

import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

const theme = createTheme({
  palette:{
    primary:{
      main:"#fff"
    }
  }
})


const itemData=[
  {
    key:1,
    imageSrcLeft:"/images/methods/planning.jpg",
    stepRight:'Step - 1',
    stepHeadingRight:'Planning and Research',
    stepDetailsRight:'AITessa ensures seamless collaboration by providing clients with a meticulously crafted web sample. This serves as a visual roadmap, aligning both parties on the styling and design direction, fostering clear communication and shared vision',
    imageSrcRight:"/images/methods/designing.jpg",
    stepLeft:"Step - 2",
    stepHeadingLeft:'Design',
    stepDetailsLeft:"Our IT services excel in strategic project planning. We meticulously craft detailed roadmaps, ensuring precision in execution. This approach, coupled with industry insights, guarantees on-time, on-budget solutions that consistently surpass expectations"
  },
  {
    key:2,
    imageSrcLeft:"/images/methods/developement.jpg",
    stepRight:'Step - 3',
    stepHeadingRight:'Developement',
    stepDetailsRight:"AI Tessa stands at the forefront of technological innovation, offering a spectrum of IT services that redefine excellence. From seamless integration to unleashing the power of AI, we craft solutions that transcend code. Every line we write, every byte we handle, is engineered for success. With AI Tessa, you're not just getting a service provider, but a dedicated partner in shaping a smarter, more connected future.",
    imageSrcRight:"/images/methods/devops.jpg",
    stepLeft:"Step - 4",
    stepHeadingLeft:'Deployement',
    stepDetailsLeft:"AI Tessa Deployment: Where Precision Meets Progress. Our seamless deployment strategies ensure your solutions go live with unmatched precision. Every step, from testing to launch, is meticulously orchestrated for a future-ready digital landscape. With AI Tessa, your deployment isn't just a milestone; it's a testament to our commitment to your success."
  },
  {
    key:3,
    imageSrcLeft:"/images/methods/testing.jpg",
    stepRight:'Step - 5',
    stepHeadingRight:'Testing',
    stepDetailsRight:"Ensuring Excellence, Every Line of Code. Our rigorous testing protocols guarantee impeccable performance and reliability. From unit tests to comprehensive QA, we leave no stone unturned. With AI Tessa, your solutions are not just robust; they're a testament to our unwavering pursuit of excellence",
    imageSrcRight:"/images/methods/performance.jpg",
    stepLeft:"Step - 6",
    stepHeadingLeft:'Monitoring Performance',
    stepDetailsLeft:"AI Tessa Performance Mastery: Elevating Excellence, Every Operation. Our vigilant monitoring ensures your systems perform flawlessly. We fine-tune resources, track vital metrics, and respond swiftly to any deviations. With AI Tessa, performance isn't just measured; it's elevated to the pinnacle of operational excellence"
  },
  
  
]


const Method = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Container sx={{mt:15}}>
          {itemData.map((item)=>(
            <Grid container rowSpacing={2} key={item.key} sx={{mb:15}}>

              <Grid item xs={12} md={6}>
              <ParallaxProvider>
                <Parallax translateX={[-30, 30]}>
                  <center>
                    <Paper elevation={24} sx={{mt:5,mr:7}}>
                      <Image alt="Image1" src={item.imageSrcLeft}></Image>
                    </Paper>
                  </center>
                </Parallax>
              </ParallaxProvider>
              </Grid>

                <Grid item xs={12} md={6}>
                  <Container sx={{ml:5,mt:3,mr:3, '@media screen and (min-width: 10em)':{p:2, ml:0}}}>
                    <Typography variant="h5" sx={{mt:5, textAlign:"center", color:"#47d7ac", fontWeight:"bold"}}>{item.stepRight}</Typography>
                    <Typography variant='h4' sx={{textAlign:"center", color:"#13294b",mb:5}}>{item.stepHeadingRight}</Typography>
                    <Typography component="p" sx={{textAlign:"center"}}>{item.stepDetailsRight}</Typography>
                    <Typography sx={{textAlign:"center"}}>
                      <Button variant="outlined" sx={{color:"#47d7ac", border:"1px solid", fontWeight:"bold", letterSpacing:5, borderRadius:5,mt:5}}>Explore</Button>
                      </Typography>
                  </Container>
                </Grid>
                
                {/* Right div */}
                 <Grid item xs={12} md={6} sx={{mt:15}}>
                    <Container sx={{mr:5,mt:3, '@media screen and (min-width: 10em)':{p:2}}}>
                    <Typography variant="h5" sx={{mt:5, textAlign:"center", color:"#47d7ac", fontWeight:"bold"}}>{item.stepLeft}</Typography>
                    <Typography variant='h4' sx={{textAlign:"center", color:"#13294b",mb:5}}>{item.stepHeadingLeft}</Typography>
                    <Typography component="p" sx={{mt:2, textAlign:"center"}}>{item.stepDetailsLeft}</Typography>
                    <Typography sx={{textAlign:"center"}}>
                      <Button variant="outlined" sx={{color:"#47d7ac", border:"1px solid", fontWeight:"bold", letterSpacing:5, borderRadius:5,mt:5}}>Explore</Button>
                      </Typography>
                  </Container>
                </Grid>
                <Grid item xs={12} md={6} sx={{mt:15}}>
                
                  <center>
                      <Paper elevation={24} sx={{mt:5,ml:3}}>
                        <Image alt="Image1" src={item.imageSrcRight}></Image>
                        </Paper>
                      </center>
                </Grid>            
            </Grid>
          ))}
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default Method