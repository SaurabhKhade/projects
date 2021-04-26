import {normalProbability} from '../functions'
import styles from '../../styles/Probability/PoissonAndNormal.module.css'
import Help from './NormalHelp'
import Input from './NormalInput'
import {useState} from 'react'

export default function Normal() {
  const [values,setValues] = useState({
    m: 0,sd: 1,prec: 4,left: 0,right:0
  })
  const [tableValue,setTableValue] = useState({
    m: 0,sd: 1,prec: 4,left: 0,right:0
  })
  const [displayResult,setDisplayResult] = useState(false)
  const [result,setResult] = useState(0)
  
  function calculate() {
    let {left,right,m,sd,prec} = values
    if(left.toLowerCase()==='inf') {
      left = Infinity
    }
    if(right.toLowerCase()==='inf') {
      right = Infinity
    }
    setResult(normalProbability(left,right,sd,m,prec))
    setDisplayResult(true)
  }
  
  let resultStyle = {
    display: displayResult?'block':'none'
  }
  
  return (
    <div className={styles.container}>
      <h2>Normal Distribution</h2>
      <Help />
      <Input values={values} setValues={setValues}/>
      <button className={styles.btn} onClick={calculate}>
        Calculate&nbsp;
        <i className="fa fa-play-circle" />
      </button>
      <div className={styles.result} style={resultStyle}>
        <p>Probability is {result}</p>
      </div>
    </div>
  )
}


