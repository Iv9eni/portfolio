// Dependencies and Component Imports

import React from 'react'

// Styling Imports

import './cardIcon.css'

// Material UI Imports

import {ImHtmlFive} from 'react-icons/im';
import {SiPhp, SiJavascript, SiSelenium} from 'react-icons/si';
import {DiCss3Full, DiPython} from 'react-icons/di';
import {AiOutlineConsoleSql} from 'react-icons/ai'
import {FaReact} from 'react-icons/fa'

const CardIcon = (props) => {
  return (
    <div className="langIcons" >
        { props.icons['html'] ? <ImHtmlFive size={24} color="#fc7b03"/> : false }
        { props.icons['css'] ? <DiCss3Full size={24} color="#264de4" /> : props.icons['css'] != NaN ? true: false  }
        { props.icons['js'] ? <SiPhp size={24} color="#645cff" /> : props.icons['php'] != NaN ? true: false  }
        { props.icons['php'] ? <SiJavascript size={24} color="#f0db4f" /> : props.icons['js'] != NaN ? true: false  }
        { props.icons['sql'] ? <AiOutlineConsoleSql size={24} color="#ed3e6f" /> : props.icons['sql'] != NaN ? true: false  }
        { props.icons['python'] ? <DiPython size={24} color="#ffd43b" /> : props.icons['python'] != NaN ? true: false  }
        { props.icons['selenium'] ? <SiSelenium size={24} color="#7d7d7d" /> : props.icons['selenium'] != NaN ? true: false  }
        { props.icons['reactjs'] ? <FaReact size={24} color="#61dbfb" /> : props.icons['reactjs'] != NaN ? true: false }
    </div>
  )
}

export default CardIcon