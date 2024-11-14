import React from 'react'
import { Container, Typography, Grid } from '@mui/material'
import Image from 'mui-image'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

const paragraph = [
    {
        id:0,
        text:"Welcome to Aitessa, a leading force in IT solutions. Our expertise spans a vast spectrum of technologies, allowing us to offer dynamic and innovative solutions tailored to your specific needs. In frontend development, we excel in crafting intuitive user interfaces using industry-leading frameworks like React and Angular. This ensures that your applications not only look visually appealing but also offer seamless user experiences, driving user engagement and satisfaction. Our team is well-versed in responsive design principles, ensuring your application functions flawlessly across various devices and screen sizes."
    },
    {
        id:1,
        text:"For robust backend solutions, we leverage the power of Node.js and Python, ensuring your applications are not only feature-rich but also built on a solid foundation. We architect scalable and secure backend systems, optimizing performance and enabling your applications to handle high traffic loads with ease. Our backend development team follows best practices in database design and management, ensuring efficient data storage and retrieval. With a focus on clean, maintainable code, we guarantee a robust foundation for your applications, setting the stage for future growth and expansion."
    },
    {
        id:2,
        text:"At Aitessa, we understand the transformative potential of AI and Machine Learning. Our dedicated team leverages these technologies to create intelligent, data-driven solutions that amplify your business operations. Whether it's predictive analytics, natural language processing, or computer vision, we harness the latest advancements in AI to deliver tangible, strategic value for your organization. We meticulously design and train machine learning models, tailoring them to your specific use cases and datasets. This enables us to provide accurate and actionable insights, empowering you to make informed business decisions."
    },
    {
        id:3,
        text:"Our AI solutions are seamlessly integrated into your existing workflows, enhancing automation and efficiency. We're experienced in deploying AI applications in various domains, from recommendation systems in e-commerce to predictive maintenance in manufacturing. We're committed to demystifying AI for our clients, ensuring a clear understanding of how these technologies can drive tangible business outcomes. With Aitessa, you're not just adopting AI; you're embracing a transformative force that propels your business towards new heights of innovation and competitiveness."
    },
    {
        id:4,
        text:"Data is at the heart of modern business strategy, and at Aitessa, we're here to help you unlock its full potential. Our Data Science experts utilize advanced techniques to extract meaningful insights from your raw data. With expertise in statistical analysis, machine learning algorithms, and data visualization, we empower you to make informed, data-driven decisions that steer your business towards sustained growth and success. We work closely with you to understand your business objectives and challenges, tailoring our data science solutions to address your specific needs."
    },
    {
        id:5,
        text:"Our team is proficient in a wide range of data analysis tools and platforms, ensuring that we choose the right technology stack for your projects. From data cleaning and preprocessing to advanced modeling and visualization, we cover every aspect of the data science lifecycle. We're experienced in working with diverse datasets, from structured databases to unstructured text and image data. Our goal is to provide you with actionable insights that drive strategic initiatives and operational improvements, ultimately leading to a competitive edge in your industry."
    },
    {
        id:6,
        text:"At Aitessa, we're not just a technology provider, but a strategic partner dedicated to your success. Our holistic approach extends beyond individual technologies; we're committed to delivering comprehensive IT solutions that drive your business forward. With a passion for innovation and a customer-centric mindset, we're here to transform your vision into reality. Let's embark on this journey together, leveraging the power of technology to shape a brighter future for your business."
    },
    {
        id:7,
        text:"We pride ourselves on open communication and collaboration, ensuring that your objectives and priorities are at the forefront of every project. Our agile development methodology allows us to adapt and iterate quickly, responding to changing requirements and market dynamics. We're not satisfied with just meeting expectations; we strive to exceed them, delivering solutions that set new industry standards. With Aitessa as your partner, you can trust that we're dedicated to the long-term success and growth of your business."
    }


]


const Company = () => {
  return (
    <>
        <Container>
            <Typography variant="h5" sx={{textAlign:"center", mt:10}}>Our Company</Typography>
            <Typography variant="h4" sx={{textAlign:"center", mt:1, mb:10}}>Let's get to know each other</Typography>
        </Container>
        <Grid container>
            <Container sx={{mb:20}}>
                <Grid item xs={12} sm={12} md={12} lg={12} >
                    <ParallaxProvider>
                        <Parallax speed={40} scaleX={20}>
                            <center>
                                <Image src="/images/ourCompany.jpg" height={600}></Image>
                            </center>
                        </Parallax>
                    </ParallaxProvider>
                    <Typography variant="h3" compoenent="h3" sx={{mt:5,color:"#47d7ac"}}>About</Typography>
                    
                    {paragraph.map((item, key)=><>
                        <Typography variant="p" component="p" sx={{mt:2, textAlign:"justify"}} id={key}>
                            {item.text}
                        </Typography>
                    </>)}
                </Grid> 
            </Container>
        </Grid>  
    </>
  )
}

export default Company