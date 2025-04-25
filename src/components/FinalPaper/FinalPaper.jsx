import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';

const FinalPaper = () => {
  return (
    <Paper elevation={3} sx={{ p: 4, border: '2px solid #00cfe8', textAlign: 'center', maxWidth: 400, mx: 'auto' }}>
      
      <Box sx={{ backgroundColor: '#00cfe8', py: 1, mb: 2 }}>
        <Typography variant="h5" fontWeight="bold" color="white">
          Final Paper Submission
        </Typography>
      </Box>

      <Typography variant="subtitle1" fontWeight="bold" color="primary" gutterBottom>
        The deadline for revising accepted papers is
      </Typography>

      <Typography variant="h6" color="error" gutterBottom>
        24 March 2025
      </Typography>

      <Button 
        variant="contained" 
        sx={{ 
          mt: 3, 
          backgroundColor: 'green', 
          '&:hover': { backgroundColor: 'darkgreen' }, 
          color: 'blue', 
          fontWeight: 'bold',
          px: 4,
          py: 2,
          fontSize: '1rem',
          borderRadius: 2,
          textTransform: 'none'
        }}
      >
        Submit a revision of an accepted paper
      </Button>

    </Paper>
  );
};

export default FinalPaper;