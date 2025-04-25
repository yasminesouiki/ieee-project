import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton,Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu'; // Icône exemple (hamburger)
import SearchIcon from '@mui/icons-material/Search'; // Icône exemple (recherche)

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'white',
  color: 'black',
  boxShadow: 'none',
  borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
}));

const NavbarContainer = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(2, 6), // Augmentation du padding (2=16px vertical, 6=48px horizontal)
  [theme.breakpoints.down('md')]: { // Responsive pour petits écrans
    padding: theme.spacing(2, 3),
  }
  
}));

const LeftSection = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '20px', // Espace entre les éléments
});

const RightSection = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '20px', // Espace entre les éléments
});

// Placeholder pour une image/logo
const ImagePlaceholder = styled('div')({
  width: '40px',
  height: '40px',
  backgroundColor: '#f0f0f0',
  borderRadius: '4px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#999',
  fontSize: '12px',
});

const Navbar2 = () => {
  return (
    <StyledAppBar position="static">
      <NavbarContainer>
        <LeftSection>
          
          
          {/* Placeholder pour logo/image */}
          <img src="https://2025.ieee-jurse.org/wp-content/uploads/sites/595/2024/04/small-jurse2025.png" alt="Logo" style={{ width: 80, height: 80 }} />
          
          
        </LeftSection>
        
        <RightSection>
          {/* Icône de recherche */}
          <IconButton color="inherit" aria-label="search">
            <SearchIcon />
          </IconButton>
          
          <Divider orientation="vertical" variant="middle" flexItem />


          <img src="https://2025.ieee-jurse.org/wp-content/themes/ieee-dci/images/logo-ieee.svg" alt="Logo" style={{ width: 80, height: 80 }} />

         
        </RightSection>
      </NavbarContainer>
    </StyledAppBar>
  );
};

export default Navbar2;