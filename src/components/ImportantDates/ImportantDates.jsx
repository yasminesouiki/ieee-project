import React from 'react';
import { Box, Typography, Stack } from '@mui/material';

const ImportantDates = () => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Important Dates
      </Typography>

      <Stack spacing={2}>
        <Typography>
          Submission Deadline: <span style={{ fontWeight: 'bold' }}>Extended to 17 December 2024</span>
        </Typography>

        <Typography>
          Notification of Acceptance: <span style={{ fontWeight: 'bold', color: 'red' }}>4 February 2025</span>
        </Typography>

        <Typography>
          Registration Open: <span style={{ fontWeight: 'bold' }}>11 February 2025</span>
        </Typography>

        <Typography>
          Author Registration Deadline: <span style={{ fontWeight: 'bold' }}>24 Mars 2025</span>
        </Typography>

        <Typography>
          Early Registration Deadline: <span style={{ fontWeight: 'bold' }}>11 April 2025</span>
        </Typography>
      </Stack>

      <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
        <img
          src="src/assets/callforPapers.jpg"
          alt="Call for Papers"
          style={{ width: '70%', objectFit: 'cover' }}
        />
        
      </Box>
    </Box>
  );
};

export default ImportantDates;