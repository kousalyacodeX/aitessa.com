import React, {useState} from 'react'
import {  Card, CardContent, Button,  Typography, Grid, Box, Container, TextField } from '@mui/material'
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

// const card = ( 
// <React.Fragment>
  
//   {/* <CardActions>
//     <Button size="small">Learn More</Button>
//   </CardActions> */}
// </React.Fragment>
// );





const Contact = () => {

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');

  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidFirstName, setIsValidFirstName] = useState(true);
  const [isValidLastName, setIsValidLastName] = useState(true);
  const [isValidMessage, setIsValidMessage] = useState(true);

  const emailChange = (event)=>{
    setEmail(event.target.value)
    setIsValidEmail(true)
  }
  const firstNameChange = (event) =>{
    setFirstName(event.target.value)
    setIsValidFirstName(true)
  }
  const lastNameChange = (event) =>{
    setLastName(event.target.value)
    setIsValidLastName(true)
  }
  const messageChange = (event) => {
    setMessage(event.target.value)
    setIsValidMessage(true)
  }
  const submitRequest = () =>{}

  const checkValidation = () => {
    console.log('email = ', email)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let validationObj = {
      email: true,
      firstName: true,
      lastName:true,
      message:true
    }
    if(email.trim() === "" || !emailRegex.test(email)){
      validationObj.email = false;
    }
    if(firstName.trim() === ""){
      validationObj.firstName = false;
    }
    if(lastName.trim() === ""){
      validationObj.lastName = false;
    }
    if(message.trim() === ""){
      validationObj.message = false
    }
    if(Object.values(validationObj).indexOf(false) === -1){
      submitRequest();
    }else{
      setIsValidEmail(validationObj.email);
      setIsValidFirstName(validationObj.firstName);
      setIsValidLastName(validationObj.lastName);
      setIsValidMessage(validationObj.message);
    }
  }
  

  return (
    <Container>
    <Grid container sx={{mt:15}}>
    <Grid item xs={12} sm={12} md={6} lg={6} sx={{textAlign:"center",mt:5}}>
        
          <Typography variant='h3' component="p">
           Contact Us
          </Typography>
          {/* <Typography sx={{mt:10}} component="h1"> */}
            <ContactEmergencyIcon sx={{width:100, height:100, mt:10,mb:10, color:"#47d7ac"}}/>
          {/* </Typography> */}

      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Box sx={{ minWidth: 275 }}>
          <Card variant="outlined">
            <CardContent sx={{p:5}}>
              <Typography variant="p" sx={{textAlign:"justify"}}><Typography variant="p" omponent="p" sx={{fontSize:25}}>Tesys</Typography> value your feedback and are here to assist you. Whether you have questions, suggestions, or require support, we're just a message away. Feel free to reach out to us</Typography>
              <Grid container spacing={3} sx={{mt:2}}>
                <Grid item xs={6}>
                  <TextField 
                    label="First Name"
                    onChange={firstNameChange}
                    error={!isValidFirstName}
                    />
                </Grid>
                <Grid item xs={6}>
                  <TextField 
                    label="Last Name" 
                    onChange={lastNameChange}
                    error={!isValidLastName}
                    />
                </Grid>
                <Grid item xs={12}>
                  <TextField 
                    label="Email" 
                    onChange={emailChange}
                    error={!isValidEmail}
                    fullWidth/>
                </Grid>
                <Grid item xs={12}>
                  <TextField 
                    label="Message" 
                    required
                    multiline
                    rows={5}
                    onChange={messageChange}
                    error={!isValidMessage}
                    fullWidth/>
                </Grid>
                <Grid item xs={12}>
                  <Button sx={{color:"#47d7ac", border:"1px solid",pl:2, pr:2}} onClick={checkValidation}>Submit</Button>
                </Grid>
                
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </Grid>
    </Container>
   

  )
}

export default Contact