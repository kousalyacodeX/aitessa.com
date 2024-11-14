
import { Typography, Container, Box, Card, CardContent, Button, CardActions, Grid } from '@mui/material'
import React from 'react'




const data = [
  {
    jobId:123456,
    title:"Machine Learning Engineer",
    technology:"Machine Learning",
    experiance: "3-6 years",
    salary:"9 LPA",
    jd:"Proven experience in Python, OpenAI, Machine Learning and Azure. Excellent leadership and interpersonal skills, with the ability to effectively communicate complex technical concepts to both technical and non-technical stakeholders.Strong problem-solving and analytical thinking abilities, with a track record of successfully delivering projects on time and within budget.",
  },
  {
    jobId:123456,
    title:"Full Stack Developer",
    technology:"Python",
    experiance: "3-6 years",
    salary:"9 LPA",
    jd:"Proven experience, with the ability to effectively communicate complex technical concepts to both technical and non-technical stakeholders.Strong problem-solving and analytical thinking abilities, with a track record of successfully delivering projects on time and within budget.",
  },
  {
    jobId:123456,
    title:"DevOps",
    technology:"DevOps",
    experiance: "3-6 years",
    salary:"9 LPA",
    jd:"Proven expllent leadership and interpersonal skills, with the abilityo both technical and non-technical stakeholders.Strong problem-solving and analytical thinking abilities, with a track record of successfully delivering projects on time and within budget.",
  },
  {
    jobId:123456,
    title:"Full Stack Developer",
    technology:"Java",
    experiance: "3-6 years",
    salary:"9 LPA",
    jd:"Proven experienceectively communicate complex technical concepts to both technical and non-technical stakeholders.Strong problem-solving and analytical thinking abilities, with a track record of successfully delivering projects on time and within budget.",
  },
  {
    jobId:123456,
    title:"Frontend",
    technology:"React JS",
    experiance: "3-6 years",
    salary:"9 LPA",
    jd:"Proven experience in Python, OpenAI, Machine Learning and Azure. Excellent leadership and interpersonal skills, with the ability to effectively communicate complex technical concepts to both technical and non-technical stakeholders.Strong problem-solving and analytical thinking abilities, with a track record of successfully delivering projects on time and within budget.",
  },
  {
    jobId:123456,
    title:"Backend",
    technology:"MySql",
    experiance: "3-6 years",
    salary:"9 LPA",
    jd:"Proven experience in Python, OpenAI, Machine Learning and Azure. Excellent leadership and interpersonal skills, with the ability to effectively communicate complex technical concepts to both technical and non-technical stakeholders.Strong problem-solving and analytical thinking abilities, with a track record of successfully delivering projects on time and within budget.",
  },
  
  
]


const Career = () => {
  return (
    <>
      <Typography variant="h3" sx={{textAlign:"center",mt:10,mb:10}}>
        Career
      </Typography>

      
      <Container>
      <Grid container>
  
          {data.map((data, key)=>(
              <Grid xs={6} sm={6} md={4} lg={4} align="center"> 
              <Box sx={{maxWidth:300, mb:10}}>
                <Card variant="outlined" key={key}>
                <CardContent sx={{p:2}}>
                  <Typography variant="p" component="p" align="left" sx={{xs:{fontSize:1}}}>Job Id:{data.jobId}</Typography>
                  <Typography sx={{fontSize:14}} color="text-secondry" align="left">{data.title}</Typography>
                  <Typography variant="h5" component="div" sx={{color:"#47d7ac", fontWeight:"bold"}} align="left">{data.technology}</Typography>
                  <Typography variant="p" component="p" sx={{mb:1.2}} align="left">Experiance: {data.experiance}</Typography>
                  <Typography variant="p" component="p" sx={{mb:2}} align="left">Salary {data.salary}</Typography>
                  <Typography variant="p" component="p" sx={{textAlign:"justify"}}>
                    {data.jd} 
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button>Apply</Button>
                  </CardActions>
                </Card>
              </Box>
              </Grid>
          ))}
      
      </Grid>
        
      </Container>
    </>
  )
}

export default Career