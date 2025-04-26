import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Divider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Navbar2 = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'white',
        color: 'black',
        boxShadow: 'none',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          py: 3,
        }}
      >
        {/* Left section */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 5, px: 8 }}>
          <img
            src="https://2025.ieee-jurse.org/wp-content/uploads/sites/595/2024/04/small-jurse2025.png"
            alt="Logo"
            style={{ width: 80, height: 60 }}
          />
        </Box>

        {/* Right section */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, px: 8 }}>
          <IconButton aria-label="search" sx={{color: '#18749F'}}>
            <SearchIcon />
          </IconButton>

          <Divider orientation="vertical" flexItem />

          <img
            src="https://2025.ieee-jurse.org/wp-content/themes/ieee-dci/images/logo-ieee.svg"
            alt="IEEE Logo"
            style={{ width: 100, height: 30 }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar2;