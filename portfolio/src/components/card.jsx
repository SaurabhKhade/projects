import React from 'react';
import LaunchIcon from '@material-ui/icons/Launch';

import './card.css';

// Card of the best works
export default function Card(props) {
  let {src,setHeights,heights,card,link,style,href} = props;
  
  return (
    <div className='card'>
      <img src={src} alt='' id={card}
        onClick={link}/>
      <div className='link' style={heights[card]}
        onClick={()=>setHeights({...style})}>
        <a href={href} target='_blank'
          rel="noreferrer">
          <LaunchIcon className='icon'/>
        </a>
      </div>
    </div>
  );
}