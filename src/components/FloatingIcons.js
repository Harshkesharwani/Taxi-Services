import React from 'react';
import { Box, IconButton } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const FloatingIcons = ({ handlePhoneClick, handleWhatsAppClick }) => (
  <Box sx={{ position: 'fixed', width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1000 }}>
    <IconButton
      onClick={handlePhoneClick}
      aria-label="Phone"
      sx={{
        fontSize: { xs: 30, md: 40 },
        backgroundColor: 'yellow',
        '&:hover': {
          backgroundColor: 'goldenrod',
        },
        position: 'fixed',
        bottom: 16,
        left: 16,
        pointerEvents: 'auto',
      }}
    >
      <PhoneIcon sx={{ color: 'white', fontSize: { xs: 30, md: 35 } }} />
    </IconButton>
    <IconButton
      onClick={handleWhatsAppClick}
      aria-label="WhatsApp"
      sx={{
        fontSize: { xs: 40, md: 60 },
        position: 'fixed',
        bottom: 16,
        right: 16,
        pointerEvents: 'auto',
      }}
    >
      <WhatsAppIcon sx={{ color: '#25D366', fontSize: { xs: 40, md: 60 } }} />
    </IconButton>
  </Box>
);

export default FloatingIcons;
