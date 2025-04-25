import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';

const Welcome = () => {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom>
        Welcome to JURSE 2025!
      </Typography>

      <Typography variant="h5" color="text.secondary" gutterBottom>
        4-7 May 2025, Gammarth-Tunis, Tunisia
      </Typography>

      <Paper elevation={3} sx={{ p: 2, backgroundColor: '#f8fdf4', display: 'inline-block', mb: 4 }}>
        <Typography variant="h6" fontWeight="bold" color="success.main">
          Shaping Sustainable Cities
        </Typography>
      </Paper>

      <Typography variant="body1" paragraph>
        The <Typography component="span" fontWeight="bold">Joint Urban Remote Sensing Event (JURSE)</Typography> is a forum of excellence
        where researchers, practitioners and students present, share, and discuss their latest findings and results.
      </Typography>

      <Typography variant="body1" paragraph>
        The <Typography component="span" fontWeight="bold">17th International Conference on Joint Urban Remote Sensing (JURSE 2025)</Typography>,
        hosted by the Higher School of Communication of Tunis (SUP'COM) from May 4 to 7, 2025, in Tunisia, invites you to engage in discussions
        on the future of sustainable urban development. As the first JURSE edition to be held in Africa, this event will bring together leading
        researchers, professionals, and policymakers from around the world to share insights, present cutting-edge innovations, and address the
        pressing challenges facing our cities. JURSE 2025 is proudly <Typography component="span" fontWeight="bold">technically co-sponsored</Typography> by the
        <Typography component="span" fontWeight="bold"> IEEE Geoscience and Remote Sensing Society (GRSS)</Typography>.
      </Typography>

      <Typography variant="body1" paragraph>
        JURSE 2025 focuses on exploring innovative applications of Joint Urban Remote Sensing and Earth Observation in building resilient and
        thriving urban centers. The conference delves into cutting-edge research and explores how these technologies can contribute to achieving
        the UN Sustainable Development Goals (SDGs).
      </Typography>

      <Typography variant="body1" paragraph>
        We look forward to welcoming you to Tunis and shaping together the future of sustainable cities!
      </Typography>
    </Container>
  );
};

export default Welcome;