import React from 'react'
import {createTheme, ThemeProvider } from '@mui/material'
import Image from 'mui-image'
import Carousel from 'react-material-ui-carousel'

const theme = createTheme({
    palette:{

    },
    typography:{
        fontFamily:"Figtree"
    }
})



const Item = (props) =>{
    return(
        <center>
            <Image src={props.item.image} height="600px"/>
        </center>
    )
}


const Banner = () => {

    var items = [
        {
            name: "Aisha Gupta",
            image:'/images/slider/1.jpg',
            rating:4,
            description: "This course surpassed my expectations! The hands-on approach and supportive community made learning a breeze. The instructors' passion and clear explanations made complex concepts easy to grasp. I'm eager to explore more courses from this platform, I'm excited to implement these techniques in real-world applications."
        },
        {
            name: "Rahul Patel",
            image:'/images/slider/2.jpg',
            rating: 4.5,
            description: "This course provided a solid foundation in machine learning. The progression of topics was well-structured, and the practical projects were enlightening. The instructors' expertise and the supportive community fostered an optimal learning environment. I'm excited to implement these techniques in real-world applications."
        },
        {
            name :"Priya Sharma",
            image:'/images/slider/3.jpg',
            rating:5,
            description:"I thoroughly enjoyed this machine learning course. The content was presented in a way that was both accessible and intellectually stimulating. The hands-on exercises were invaluable, allowing me to apply theory to practice. The course community provided a fantastic platform for discussions and learning from peers."
        },
        {
            name :"Ananya Mishra",
            image:'/images/slider/4.jpg',
            rating:3,
            description:"This course is a must for anyone interested in data science and machine learning. The instructors' expertise and passion for the subject matter were evident throughout. The practical projects provided valuable experience, and the course community offered a collaborative learning environment. I'm eager to explore more courses from this platform."
        },
        {
            name :"David SmitImageh",
            image:'/images/slider/5.jpg',
            rating:4.2,
            description:"This course is a must for anyone interested in data science and machine learning. The instructors' expertise and passion for the subject matter were evident throughout. The practical projects provided valuable experience, and the course community offered a collaborative learning environment. I'm eager to explore more courses from this platform."
        }
    ]

  return (
    <ThemeProvider theme={theme}>
            <Carousel animation="fade" indicators="false" >
                {
                    items.map( (item, i) => <Item key={i} item={item} /> )
                }
           
            </Carousel>
    </ThemeProvider>
  )
}

export default Banner