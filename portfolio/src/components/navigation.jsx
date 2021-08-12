import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import PhoneIcon from '@material-ui/icons/Phone';
import StarIcon from '@material-ui/icons/Star';
import { Link} from "react-scroll";

import './navigation.css';

export default function Navigation() {
  
  let [dropped,setDropped]=useState(false);
  
  let style= dropped ? {
    padding: '10px 0',
    height: '200px',
    borderTop: '1px solid #b8b8b8'
  } : {};
  
  return (
    <nav className='nav'>
      <div className='title'>
        <h2>Saurabh Khade</h2>
        <Button className='btn'
          onClick={()=>setDropped(!dropped)}>
          <div className='menu'>
            <div className='menu-bar'></div>
            <div className='menu-bar'></div>
            <div className='menu-bar'></div>
          </div>
        </Button>
      </div>
      <div className='links' style={style}>
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-75}
          duration={700}
          className='btn-link'>
            <HomeIcon className='icon'/>
            Home
        </Link>
        <Link
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-75}
          duration={700}
          className='btn-link'>
          <BookmarkIcon className='icon'/>
          Portfolio
        </Link>
        <Link
          to="skills"
          spy={true}
          smooth={true}
          offset={-75}
          duration={700}
          className='btn-link'>
          <StarIcon className='icon'/>
          Skills
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-75}
          duration={700}
          className='btn-link'>
          <PhoneIcon className='icon'/>
          Contact
        </Link>
        <div className='btn-link version'>
          <p>Version 1.1.0</p>
        </div>
      </div>
    </nav>
  );
}