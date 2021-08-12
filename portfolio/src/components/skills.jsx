import React from 'react';

import PythonLogo from './python';
import HTMLLogo from './html';
import CSSLogo from './css';
import JSLogo from './javascript';
import ReactLogo from './react';
import './skills.css';

export default function Skills() {
  return (
    <div className='skills' id='skills'>
      <p>My Skills</p>
      <div className='logo-wrapper'>
        <div className='logo'>
          <HTMLLogo/>
        </div>
        <div className='logo'>
          <CSSLogo/>
        </div>
        <div className='logo'>
          <JSLogo/>
        </div>
        <div className='logo'>
          <ReactLogo/>
        </div>
        <div className='logo'>
          <PythonLogo/>
        </div>
      </div>
    </div>
  );
};