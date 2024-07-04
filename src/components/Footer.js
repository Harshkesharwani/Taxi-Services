import React from 'react';
import { Box, Container, Grid, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
// import PhoneIcon from '@mui/icons-material/Phone';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import logo from '../assets/logo.png'

const FooterLink = styled(Typography)({
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
  },
});

const Footer = () => {
  const handleLinkClick = (url) => {
    window.open(url, '_blank');
  };

  // const handlePhoneClick = () => {
  //   window.location.href = 'tel:+1234567890'; // Replace with your phone number
  // };

  // const handleWhatsAppClick = () => {
  //   window.location.href = 'https://wa.me/1234567890'; // Replace with your WhatsApp number
  // };

  return (
    <Box sx={{ bgcolor: '#ffd700', color: 'black', py: 4 }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <img src={logo} alt="Taxi Service Logo" style={{ width: '100px', marginBottom: '16px' }} />
            <Typography>
              We Provide Best In Class Cab Services In City. We Always Provide New Condition Cabs.
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="h6" gutterBottom>
              Company
            </Typography>
            <FooterLink onClick={() => handleLinkClick('#about')}>About us</FooterLink>
            <FooterLink onClick={() => handleLinkClick('#gallery')}>Gallery</FooterLink>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Follow us
            </Typography>
            <IconButton onClick={() => handleLinkClick('https://www.facebook.com/profile.php?id=100040547139927&mibextid=ZbWKwL')} aria-label="Facebook">
              <FacebookIcon sx={{ color: 'black' }} />
            </IconButton>
            <IconButton onClick={() => handleLinkClick('https://www.instagram.com/anytime__travels?igsh=MWNiaXE5YW9rZnBhNg==')} aria-label="Instagram">
              <InstagramIcon sx={{ color: 'black' }} />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
      <Box mt={4} sx={{ bgcolor: '#151515', color: 'white', py: 5 }} display="flex" justifyContent="center" alignItems="center">
        <Typography textAlign="center">©2023. ANYTIME TRAVELS. All Rights Reserved.</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
