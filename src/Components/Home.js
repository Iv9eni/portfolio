// Dependencies and Component Imports

import React from 'react'
import ProjectList from './ProjectList'

// Styling Imports

import './home.css'

// Material UI Imports

import { Button, Container, Stack, Typography } from '@mui/material';

const Home = () => {
  return (
    <div className="home">
        <Container className="intro">
          <h3>Ivgeni Darinski</h3>
          <Typography>Welcome to my Project Archive</Typography>
          <Stack 
            direction="row" 
            justifyContent="center"
            spacing={1}
            className="introButtons">
            <Button variant="contained" size="small">Resume</Button>
            <Button variant="outlined" size="small">Contact</Button>
          </Stack>
        </Container>
        <ProjectList />
    </div>
  )
}

export default Home