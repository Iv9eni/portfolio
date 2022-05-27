// Dependencies and Component Imports

import React from 'react'

// Styling Imports

import './projecttile.css'

// Material UI Imports

import { 
  Icon,
  Card, 
  CardContent, 
  CardMedia, 
  CardActionArea, 
  Typography } from '@mui/material';

import {ImHtmlFive} from 'react-icons/im';
import {SiPhp, SiJavascript, SiSelenium} from 'react-icons/si';
import {DiCss3Full, DiPython} from 'react-icons/di';
import {AiOutlineConsoleSql} from 'react-icons/ai'
import {FaReact} from 'react-icons/fa'

const ProjectTile = (props) => {
  return (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="180"
            image={props.cardImg}
            alt="project image"
          />
          <CardContent>
            <Typography variant="h6" gutterBottom component="div">
              {props.projectName}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {props.description}
            </Typography>
            <div className="langIcons" >
              { props.html ? <ImHtmlFive size={24} color="#fc7b03"/> : false }
              { props.css ? <DiCss3Full size={24} color="#264de4" /> : false }
              { props.php ? <SiPhp size={24} color="#645cff" /> : false }
              { props.js ? <SiJavascript size={24} color="#f0db4f" /> : false }
              { props.sql ? <AiOutlineConsoleSql size={24} color="#ed3e6f" /> : false }
              { props.python ? <DiPython size={24} color="#ffd43b" /> : false }
              { props.selenium ? <SiSelenium size={24} color="#7d7d7d" /> : false }
              { props.reactjs ? <FaReact size={24} color="#61dbfb" /> : false}
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
  )
}

export default ProjectTile