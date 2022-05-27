// Dependencies and Component Imports

import React from 'react'
import ProjectTile from './ProjectTile'

// Styling Imports

import './home.css'
import EbayImg from '../Assets/ebay.png' 
import LaImg from '../Assets/la-bot.jpg'
import PortfolioImg from '../Assets/portfolio.png'

// Material UI Imports

import { 
  Container, 
  Stack } from '@mui/material';

const ProjectList = () => {
  return (
    <Container>
        <Stack justifyContent="center" alignItems="center" direction={{ xs: 'column', md: 'row'}} spacing={2}>
          <ProjectTile projectName="Merchant Tool" cardImg={EbayImg} html css php sql
            description="User can create, manage, edit, and delete database entries such as customers, products, and orders through a UI created with html and css. Users can also create relationships within the database between customers and orders. Users can view all the customers and edit their attributes such as the name, phone number, and location. All entries were stored on a mySQL database."
          />
          <ProjectTile projectName="Gym Booking" cardImg={LaImg} python selenium
            description="Bot that attempts to grab LA Fitness reservations as soon as they are available, this was made during COVID-19 when there was a reservation system and a very limited number of spots. The bot attempted to grab a reversation before a regular human can do it."
          />
        </Stack>

    </Container>
  )
}

export default ProjectList