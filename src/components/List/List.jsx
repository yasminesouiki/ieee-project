import React from 'react';
import { Box, Typography, Grid, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';




const List = () => {
  const contributors = [
    {
      
      logo: "https://2025.ieee-jurse.org/wp-content/uploads/sites/595/2024/01/supcom-300x93.png"
    },
    {
     
        logo: "https://2025.ieee-jurse.org/wp-content/uploads/sites/595/2024/04/chapter-logo.png"
      },
      {
     
        logo: "https://2025.ieee-jurse.org/wp-content/uploads/sites/595/2024/01/AGEOS.png"
      },
      {
      
        logo: "https://2025.ieee-jurse.org/wp-content/uploads/sites/595/2024/01/COSIM.png"
      },
      {
     
        logo: "https://2025.ieee-jurse.org/wp-content/uploads/sites/595/2024/01/INNOVCOM.png"
      },
    
    {
      
      logo: "https://2025.ieee-jurse.org/wp-content/uploads/sites/595/2024/01/GRESCOM.png"
    },
    
    
   
    {
      
      logo: "https://2025.ieee-jurse.org/wp-content/uploads/sites/595/2024/01/EDTIC.png"
    },
    {
      
        logo: "https://2025.ieee-jurse.org/wp-content/uploads/sites/595/2025/02/GRSS-300x220.png"
    },
    {
     
      logo: "https://2025.ieee-jurse.org/wp-content/uploads/sites/595/2024/01/UNIVERSITE-CARTHAGE.png"
    },
    
  ];

  return (
    
    <Box sx={{
      maxWidth: '100%',
      py: 8,
      px: 10,
      backgroundColor: '#fff',
      textAlign: 'left',
      

    }}>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center',
        my: 5,
        px: 2
      }}>
        <Divider sx={{
          backgroundColor: 'black',
          height: '2px',
          width: '100%',
          maxWidth: '1100px',
          border: 'none'
        }} />
</Box>
      <Typography variant="h6" sx={{
        fontWeight: 'bold',
       
        mb: 5,
        textTransform: 'uppercase',
        marginLeft:10,
        marginBottom:0,
        padding:5,
        color:'black'
      }}>
        List of Contributors:
      </Typography>
      
      
      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 0,
        mb: 5
      }}>
        {contributors.slice(0, 4).map((contributor, index) => (
          <Box key={`top-${index}`} sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: { xs: '40%', sm: '17%' }
          }}>
            <Box
              component="img"
              src={contributor.logo}
              alt={contributor.name}
              sx={{
                height: 80,
                width: 'auto',
                maxWidth: '100%',
                objectFit: 'contain',
                transition: 'filter 0.3s ease',
                ':hover': {
                  filter: 'grayscale(100%)'
                }
              }}
            />
            <Typography variant="caption" sx={{ 
              mt: 1,
              color: '#555',
              fontSize: '0.75rem'
            }}>
              {contributor.name}
            </Typography>
          </Box>
        ))}
      </Box>
      
      {/* Deuxième ligne - 5 logos */}
      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 4
      }}>
        {contributors.slice(4, 9).map((contributor, index) => (
          <Box key={`bottom-${index}`} sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: { xs: '40%', sm: '14%' }
          }}>
            <Box
              component="img"
              src={contributor.logo}
              alt={contributor.name}
              sx={{
                height: 100,
                width: 'auto',
                maxWidth: '100%',
                objectFit: 'contain',
                transition: 'filter 0.3s ease',
                ':hover': {
                  filter: 'grayscale(100%)'
                }
              }}
            />
            <Typography variant="caption" sx={{ 
              mt: 1,
              color: '#555',
              fontSize: '0.75rem'
            }}>
              {contributor.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default List;