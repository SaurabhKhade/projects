import React from 'react';

import './catGif.css'
import cat from '../images/cat.gif';

// Running cat GiF
export default function Cat() {
  return (
    <div className='cat'>
      <div className='gif'>
        <img src={cat} alt=''/>
      </div>
    </div>
  );
};