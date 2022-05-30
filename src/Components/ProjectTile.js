// Dependencies and Component Imports

import React, { useState, useEffect } from 'react'
import CardIcon from './CardIcon'
import useImage from './useImage'

// Styling Imports


// Material UI Imports

import { 
  Card, 
  CardContent, 
  CardMedia, 
  CardActionArea, 
  Typography } from '@mui/material';

const ProjectTile = (props) => {

  const goToPage = () => {
    const origin = window.location.origin;
    const link = document.createElement("a");
    link.href = origin + "/project/" + props.projectPage;
    link.click();
  }

  const { loading, error, image } = useImage(props.cardImg)

  return (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea onClick={goToPage}>
          <CardMedia
            component="img"
            height="180"
            image={image}
            alt={error}
          />
          <CardContent>
            <Typography variant="h6" gutterBottom component="div">
              {props.projectName}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {props.description}
            </Typography>
            <CardIcon icons={props.icons} />
          </CardContent>
        </CardActionArea>
      </Card>
  )
}

export default ProjectTile