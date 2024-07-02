import React from 'react';
import { Box, Container, Grid, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

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

  const handlePhoneClick = () => {
    window.location.href = 'tel:+1234567890'; // Replace with your phone number
  };

  const handleWhatsAppClick = () => {
    window.location.href = 'https://wa.me/1234567890'; // Replace with your WhatsApp number
  };

  return (
    <Box sx={{ bgcolor: '#ffd700', color: 'black', py: 4 }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <img src="/path/to/logo.png" alt="Taxi Service Logo" style={{ width: '100px', marginBottom: '16px' }} />
            <Typography>
              We Provide Best In Class Taxi Cab Service In City. We Always Provide New Condition Taxi Cab.
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
            <IconButton onClick={() => handleLinkClick('https://www.facebook.com')} aria-label="Facebook">
              <FacebookIcon sx={{ color: 'black' }} />
            </IconButton>
            <IconButton onClick={() => handleLinkClick('https://www.instagram.com')} aria-label="Instagram">
              <InstagramIcon sx={{ color: 'black' }} />
            </IconButton>
          </Grid>
          <Grid item xs={12} md={4} display="flex" justifyContent={{ xs: 'center', md: 'flex-end' }} alignItems="center">
            <IconButton onClick={handlePhoneClick} aria-label="Phone" sx={{ fontSize: { xs: 40, md: 60 } }}>
              <PhoneIcon sx={{ color: 'white', fontSize: { xs: 40, md: 60 } }} />
            </IconButton>
            <IconButton onClick={handleWhatsAppClick} aria-label="WhatsApp" sx={{ fontSize: { xs: 40, md: 60 } }}>
              <WhatsAppIcon sx={{ color: '#25D366', fontSize: { xs: 40, md: 60 } }} />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
      <Box mt={4} sx={{ bgcolor: '#151515', color: 'white', py: 5 }} display="flex" justifyContent="center" alignItems="center">
        <Typography textAlign="center">©2023. Ashish Taxi Service. All Rights Reserved.</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
