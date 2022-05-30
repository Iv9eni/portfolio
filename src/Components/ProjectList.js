// Dependencies and Component Imports

import React from 'react'
import ProjectTile from './ProjectTile'

import { projectData } from '../Assets/data'

// Styling Imports

import './home.css'

// Material UI Imports

import { 
  Container, 
  Stack } from '@mui/material';

const ProjectList = () => {

  return (
    <Container>
        <Stack 
        justifyContent="center" 
        alignItems="center" 
        direction={{ xs: 'column', md: 'row'}} 
        spacing={3.5}>
          {projectData.map((data, key) => {
            return(
              <ProjectTile projectName={data.projName} projectPage={data.page} cardImg={data.projImg} icons={data.icons} description={data.projDescription} />
            )
          })}
        </Stack>
    </Container>
  )
}

export default ProjectList