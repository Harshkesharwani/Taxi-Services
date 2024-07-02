import React from 'react';
import { Container, Typography, Box, TextField, Button } from '@mui/material';
// import Image from 'next/image'; // If you are using Next.js, else use 'img' tag or other methods to include the image.

const ContactUs = () => {
  return (
    <Box sx={{ backgroundColor: '#1c1c1c', color: '#fff', py: 12 }}>
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 4 }}>
          <Box sx={{ width: 100, height: 100, borderRadius: '50%', overflow: 'hidden' }}>
            <img src="https://cdn.dribbble.com/users/1716464/screenshots/4904233/loop_taxi_800x600_dribbble.gif" alt="Contact Us" width={100} height={100} layout="responsive" />
          </Box>
        </Box>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="subtitle1">
            We Would Love To Hear From You. Feel Free To Reach Out Using The Below Details.
          </Typography>
        </Box>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { my: 2, width: '100%', '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white',
              },
              '&:hover fieldset': {
                borderColor: 'white',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white',
              },
            }},
            maxWidth: 600,
            mx: 'auto',
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            id="name"
            label="Name"
            variant="outlined"
            InputLabelProps={{
              style: { color: 'white' },
            }}
            InputProps={{
              style: { color: 'white' },
              placeholder: "Enter your name",
            }}
          />
          <TextField
            required
            id="email"
            label="Email"
            variant="outlined"
            InputLabelProps={{
              style: { color: 'white' },
            }}
            InputProps={{
              style: { color: 'white' },
              placeholder: "Enter your email",
            }}
          />
          <TextField
            required
            id="message"
            label="Message"
            multiline
            rows={4}
            variant="outlined"
            InputLabelProps={{
              style: { color: 'white' },
            }}
            InputProps={{
              style: { color: 'white' },
              placeholder: "Enter your message",
            }}
          />
          <Button variant="contained" color="primary" type="submit" fullWidth>Submit</Button>
        </Box>
      </Container>
    </Box>
  );
}

export default ContactUs;
