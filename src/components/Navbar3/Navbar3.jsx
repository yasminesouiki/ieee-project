import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const pages = [
  { label: 'HOME' },
  {
    label: 'PARTICIPATION',
    submenu: [
      'PROGRAM',
      'FOR AUTHORS',
      'CALL FOR PAPERS',
      'REGISTRATION',
      'SOCIAL EVENTS',
      'CONTACT'
    ]
  },
  {
    label: 'PRESENTATION',
    submenu: [
      'KEYNOTES',
      'TOPICS',
      'TECHNICAL TUTORIALS',
      'STUDENT CONTEST',
      'EXHIBITORS'
    ]
  },
  { label: 'COMMITTEES' },
  { label: 'SPONSORS' },
  {
    label: 'VENUE',
    submenu: ['HOTEL AND TRAVEL']
  },
  { label: 'VIDEOS & PHOTOS' },
  { label: 'SUMMER SCHOOL' },
];

function Navbar3() {
  const [hovered, setHovered] = React.useState(null);

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: '#00629b',
        color: 'white',
        height: '40px',
        zIndex: 1000,
      }}
    >
      <Container maxWidth="xl" sx={{ height: '100%' }}>
        <Toolbar
          disableGutters
          sx={{
            justifyContent: 'center',
            gap: 4,
            height: '100%',
            minHeight: '40px !important',
            padding: '0 !important',
            position: 'relative',
          }}
        >
          {pages.map((page, index) => (
            <Box
              key={page.label}
              onMouseEnter={() => page.submenu && setHovered(page.label)}
              onMouseLeave={() => setHovered(null)}
              sx={{ position: 'relative' }}
            >
              <Typography
                component="a"
                href="#"
                sx={{
                  textDecoration: page.label === 'HOME' ? 'underline' : 'none',
                  color: 'inherit',
                  fontWeight: 'bold',
                  fontSize: '0.8rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  height: '100%',
                  px: 0.7,
                  lineHeight: '50px',
                  '&:hover': {
                    cursor: 'pointer',
                    textDecoration: page.label !== 'HOME' ? 'underline' : 'underline', // Keeps underline on hover for all
                  },
                }}
              >
                {page.label}
              </Typography>


             

              {/* Sous-menu custom (en bleu avec titres blancs) */}
              {hovered === page.label && page.submenu && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    
                    backgroundColor: '#00629b', // même bleu que navbar
                    color: 'white', // titres en blanc
                    minWidth: '180px',
                    boxShadow: '0px 2px 8px rgba(0,0,0,0.2)',
                    zIndex: 999,
                  }}
                >
                  {page.submenu.map((item, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        px: 3,
                        py: 1,
                        fontSize: '0.9rem',
                      
                        fontWeight: 500,
                        '&:hover': {
                          backgroundColor: '#005480', // plus foncé au hover
                          cursor: 'pointer',
                        },
                      }}
                    >
                      {item}
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          ))}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar3;