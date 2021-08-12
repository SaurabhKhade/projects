import React from 'react';
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link} from "react-scroll";

import './home.css';


// home component with title and links to contact component and next component

export default function Home () {
  let style = {
    height: `${window.innerHeight-75}px`
  }
  
  return (
    <div className="home" id='home' style={style}>
      <p>Web Developer</p>
      <h2>Bring Your Dreams To Life</h2>
      <Link
        to="contact"
        spy={true}
        smooth={true}
        offset={-75}
        duration={700}>
        <Button className='btn-contact'>
          Contact
        </Button>
      </Link>
      <Link
        to="portfolio"
        spy={true}
        smooth={true}
        offset={-75}
        duration={700}
        className='btn-link'>
        <Button className='btn-down'>
          <ArrowForwardIosIcon className='btn-icon'/>
        </Button>
      </Link>
    </div>
  );
};