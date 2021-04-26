import {useState} from 'react'
import styles from '../../styles/Probability/Help.module.css'

export default function Help() {
  const [helpExpanded,setHelpExpanded] = useState(false)
  const msgStyle = {
    height: helpExpanded?'290px':'0px',
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
      <p>To calculate probability of binomial distribution you must provide value of n (number of independent experiments) and p (probability of success). If you don't have n or p you can calculate it using following formulae</p>
      <ul className={styles.list}>
        <li>p = 1-q (probability of failure)</li>
        <li>np = m (mean)</li>
        <li>npq = v (variance)</li>
      </ul>
      <p>For more information visit&nbsp;<a className={styles.link} href="https://en.m.wikipedia.org/wiki/Binomial_distribution" target="_blank">Wikipedia</a></p>
    </div>
  </div>
  )
}