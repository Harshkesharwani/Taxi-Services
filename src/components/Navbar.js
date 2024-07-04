import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import logo from '../assets/favicon.png'

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar sx={{ bgcolor: '#151515', boxShadow: 'none' }}>
        <Toolbar>
          <Box
            component="img"
            src={logo}
            alt="Taxi Service Logo"
            sx={{
              width: { xs: '40px', sm: '50px' },
              height: 'auto',
            }}
          />
          <Typography variant="h6" sx={{ flexGrow: 1, color: 'white' }}>
            {/* ANYTIME TRAVELS */}
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button component={Link} to="/" sx={{ color: 'white' }}>Home</Button>
            <Button component={Link} to="/contact" sx={{ color: 'white' }}>Contact Us</Button>
          </Box>
          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ ml: 2 }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem button component={Link} to="/">
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/contact">
              <ListItemText primary="Contact Us" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;
