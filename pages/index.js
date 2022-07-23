import * as React from 'react'
import Container from '../src/components/Container'
import Header from '../src/components/Header'
import { autocompleteClasses } from '@mui/material';

export default function Index() {
  return (
    <Container sx={{
      width: 1,
      height: 
      '100vh',
      bgcolor: '#595959',
    }}>
      <Header sx={{
        width: 1,
        height: '50px',
        bgcolor: '#000000',
        display: 'flex',
        alignItems: 'center',
        p: 1
      }}/>
    </Container>
  );
}
