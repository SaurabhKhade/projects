import styles from '../../styles/Probability/PoissonAndNormal.module.css'
import Help from './PoissonHelp'
import Input from './Input'
import {useState} from 'react'
import Table from './Table'

export default function Poisson() {
  const [values,setValues] = useState({
    n: 0,m: 1,prec: 4
  })
  const [tableValue,setTableValue] = useState({
    n: 0,m: 1,prec: 4
  })
  const [displayTable,setDisplayTable] = useState(false)
  
  function calculate() {
    let {n,m,prec} = values
    if(m<0) {
      alert('Value of m cannot be less than 0')
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
      <h2>Poisson Distribution</h2>
      <Help />
      <Input values={values} setValues={setValues} params={{a:'n',b:'m'}}/>
      <button className={styles.btn} onClick={calculate}>
        Calculate&nbsp;
        <i className="fa fa-play-circle" />
      </button>
      <Table display={displayTable} n={tableValue.n} m={tableValue.m} prec={tableValue.prec}/>
    </div>
  )
}