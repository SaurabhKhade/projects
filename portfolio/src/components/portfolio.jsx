import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import VisibilityIcon from '@material-ui/icons/Visibility';

import Card from './card';
import blog from '../images/blog.jpg';
import calculator from '../images/calculator.jpg';
import notes from '../images/notes.jpg';
import weather from '../images/weather.jpg';
import './portfolio.css';

export default function Portfolio() {
  
  let style={
    blog : { height: 0 },
    calculator : { height: 0 },
    notes : { height: 0 },
    weather : { height: 0 }
  }
  
  const link = e =>{
    let card=e.target.id;
    if(heights[card].height===0) {
      setHeights({...style,[card]:{height:"100%"}});
    } else {
      setHeights({...style});
    }
  };
  
  let [heights,setHeights]=useState(style);
  
  let cards=[[blog,'blog','https://github.com/SaurabhKhade/VirtualProgrammer'],[calculator,'calculator','https://github.com/SaurabhKhade/myCalculator'],[weather,'weather','https://github.com/SaurabhKhade/weather'],[notes,'notes','https://github.com/SaurabhKhade/smart-keeper']];
  
  return (
    <div className='portfolio'>
      <p>Best Work</p>
      <div className='cards'>
        {cards.map(item=>(<Card src={item[0]}
          card={item[1]} style={style}
          setHeights={setHeights} 
          heights={heights}
          link={link} key={item[1]}
          href={item[2]}/>))}
      </div>
      <Button className='btn'>
        <a href='https://github.com/SaurabhKhade'
          target='_blank' rel="noreferrer">
          <VisibilityIcon className='icon'/>
          View All
        </a>
      </Button>
    </div>
  );
}