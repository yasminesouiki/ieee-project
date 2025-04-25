import React from 'react';
import { Box, Container, Link, Typography, Stack, IconButton } from '@mui/material';
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon,
  YouTube as YouTubeIcon
} from '@mui/icons-material';
import Divider from '@mui/material/Divider';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 3, 
        px: 2, 
        backgroundColor: '#006699',
        borderTop: '1px solid #e0e0e0',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 2
        }}>
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 2,
            mb: { xs: 2, sm: 0 }
          }}>
            <Typography component="div" sx={{ fontSize: '0.6rem' }}>
              HOME
            </Typography>
            <Typography component="div" sx={{ fontSize: '0.6rem' }}>
              SITEMAP
            </Typography>
            <Typography component="div" sx={{ fontSize: '0.6rem' }}>
              ACCESSIBILITY
            </Typography>
            <Typography component="div" sx={{ fontSize: '0.6rem' }}>
              NONDISCRIMINATION POLICY
            </Typography>
            <Typography component="div" sx={{ fontSize: '0.6rem' }}>
              IEEE ETHICS REPORTING
            </Typography>
            <Typography component="div" sx={{ fontSize: '0.6rem' }}>
              IEEE PRIVACY POLICY
            </Typography>
            <Typography component="div" sx={{ fontSize: '0.6rem' }}>
              TERMS
            </Typography>
          </Box>
          
          <Stack direction="row" spacing={1}>
            <IconButton aria-label="Facebook" color="primary">
              <FacebookIcon />
            </IconButton>
            <IconButton aria-label="Twitter" color="primary">
              <TwitterIcon />
            </IconButton>
            <IconButton aria-label="LinkedIn" color="primary">
              <LinkedInIcon />
            </IconButton>
            <IconButton aria-label="Instagram" color="primary">
              <InstagramIcon />
            </IconButton>
            <IconButton aria-label="YouTube" color="primary">
              <YouTubeIcon />
            </IconButton>
          </Stack>
        </Box>
        
        <Typography variant="body2" sx={{ mb: 1, fontSize: '0.6rem' }}>
          © Copyright 2023 IEEE - All rights reserved. Use of this website signifies your agreement to the IEEE Terms and Conditions.
        </Typography>
        
        <Typography variant="body2" sx={{ mb: 1, fontSize: '0.6rem' }}>
          A public charity, IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;