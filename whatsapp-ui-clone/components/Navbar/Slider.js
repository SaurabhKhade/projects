import styles from '/styles/Navbar.module.scss';
import {FaCamera} from "react-icons/fa";
import {useState} from 'react';
import {useTab} from '../context';

export default function Slider() {
  const [tab,setTab] = useTab();
  const sliderStyle = {
    left: `${(tab-1)*33}%`
  }
  const textStyle = {
    color: "hsl(0,0%,98%)"
  }
  
  function Tab({text,number}) {
    return (
      <p style={tab===number?textStyle:{}} onClick={()=>setTab(number)}>
        {text}
      </p>
    );
  }
  
  
  return (
  <div className={styles.slider}>
    <FaCamera />
    <div className={styles.tabs}>
      <Tab text="chats" number={1} />
      <Tab text="status" number={2} />
      <Tab text="calls" number={3} />
      <hr style={sliderStyle} className={styles.activeBar} />
    </div>
  </div>
  );
}