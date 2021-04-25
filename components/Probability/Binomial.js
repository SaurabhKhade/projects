import styles from '../../styles/Probability/Binomial.module.css'
import Table from './Table'
import Input from './Input'
import Help from './BinomialHelp'
import {useState} from 'react'

export default function Binomial() {
  const [values,setValues] = useState({
    n: 0,p: 1,prec: 4
  })
  const [tableValue,setTableValue] = useState({
    n: 0,p: 1,prec: 4
  })
  const [displayTable,setDisplayTable] = useState(false)
  
  function calculate() {
    let {n,p,prec} = values
    if(p>1 || p<0) {
      alert('Value of p should lie between 0 and 1')
    } else if(n<0) {
      alert('Value of n cannot be less than 0')
    } else if(prec<0) {
      alert("Number of digits after decimal point can't be negative")
    } else if(prec>10) {
      alert("Maximum limit of digits after decimal point is 10")
    } else {
      setTableValue(values)
      setDisplayTable(true)
    }
  }
  
  return (
  <div className={styles.container}>
    <h2 className={styles.title}>
      Binomial Distribution
    </h2>
    <Help />
    <Input values={values} setValues={setValues} params={{a:'n',b:'p'}}/>
    <button className={styles.btn} onClick={calculate}>
      Calculate&nbsp;
      <i className="fa fa-play-circle" />
    </button>
    <Table display={displayTable} n={tableValue.n} p={tableValue.p} prec={tableValue.prec}/>
  </div>
  )
}