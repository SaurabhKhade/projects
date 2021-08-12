import {useState} from 'react'
import styles from '../../styles/Probability/Help.module.css'

export default function Help() {
  const [helpExpanded,setHelpExpanded] = useState(false)
  const msgStyle = {
    height: helpExpanded?'470px':'0px',
    padding: helpExpanded?'8px 5px':'0px 5px',
    borderWidth: helpExpanded?'1px':'0px',
    marginTop: helpExpanded?'10px':'0'
  }
  const arrowStyle = {
    transform: helpExpanded?'rotate(180deg)':'rotate(360deg)'
  }
  
  return (
  <div className={styles.helpBox}>
    <p className={styles.help} onClick={()=>setHelpExpanded(old=>!old)}>
      Help&nbsp;
      <i className={`fa fa-angle-down ${styles.icon}`} style={arrowStyle}/>
    </p>
    <div className={styles.helpmsg} style={msgStyle}>
      <p>To calculate probability of normal distribution you must provide value of mean (m) standard deviation (sd) left limit and right limit.</p>
      <p>Suppose you have weights of students of a class then</p>
      <ul className={styles.list}>
        <li>for probability of students having weights between 45kg and 60kg, left limit will be 45 and right limit will be 60</li>
        <li>for probability of students having weights below 45kg, left limit will be Inf and right limit will be 45</li>
        <li>for probability of students having weights above 60kg, left limit will be 60 and right limit will be Inf</li>
      </ul>
      <p>Here Inf corresponds to Infinite value</p><br/>
      <p>For more information visit&nbsp;<a className={styles.link} href="https://en.m.wikipedia.org/wiki/Normal_distribution" target="_blank">Wikipedia</a></p>
    </div>
  </div>
  )
}