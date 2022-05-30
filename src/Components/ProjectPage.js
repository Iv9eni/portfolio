// Dependencies and Component Imports

import React from 'react'
import { useHistory } from 'react-router-dom'

// Styling Imports

//import './projecttile.css'

// Material UI Imports

import { 
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography
} from '@mui/material';

const ProjectPage = () => {
  return (
    <div>
      <Box>
        <AppBar>
          <Toolbar>
            <Button>Previous</Button>
            <Button>Next</Button>
          </Toolbar>
        </AppBar>
      </Box>
      
    </div>
  )
}

export default ProjectPage