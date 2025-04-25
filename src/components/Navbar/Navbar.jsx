import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['IEEE.org', 'IEEE Xplore Digital library', 'IEEE standards', 'IEEE spectrum', 'More sites'];
const settings = ['Profil', 'Compte', 'Tableau de bord', 'Déconnexion'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

 
    return (
        <AppBar
          position="static"
          elevation={0}
          sx={{
            backgroundColor: '#e6edf4',
            borderBottom: '2px solid #00629b',
            color: '#00629b',
            fontSize: '14px',
            
          }}
        >
          <Container maxWidth="xl">
            <Toolbar
              disableGutters
              sx={{ px: 20 ,m:0}}
            >
              {pages.map((page, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography
                    component="a"
                    href="#"
                    sx={{
                      textDecoration: 'none',
                      color: '#00629b',
                      fontWeight: 'bold',
                      fontSize: '11px',
                      padding:'0',
                      margin:'0',

                      '&:hover': { textDecoration: 'underline' },
                    }}
                  >
                    {page.includes('Xplore') ? (
                      <>
                        IEEE <em>Xplore</em> Digital Library
                      </>
                    ) : (
                      page
                    )}
                  </Typography>
                  {index !== pages.length - 1 && (
                    <Typography
                      sx={{
                        mx: 1,
                        color: '#ccc',
                        fontWeight: 'normal',
                      }}
                    >
                      |
                    </Typography>
                  )}
                </Box>
              ))}
            </Toolbar>
          </Container>
        </AppBar>
  );
}

export default Navbar;
