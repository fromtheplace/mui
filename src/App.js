import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function App() {
  return (
    <Container maxWidth="sm" sx={{ marginTop: 4, textAlign: 'center' }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Welcome to My Material UI Site
      </Typography>
      <Typography variant="body1" gutterBottom>
        This is a simple React app using Material UI.
      </Typography>
      <Button variant="contained" endIcon={<SendIcon />}>
        Get Started
      </Button>
    </Container>
  );
}
