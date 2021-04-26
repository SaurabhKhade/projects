import styles from '../../styles/Probability/Table.module.css'
import {binomialProbability,poissonProbability} from '../functions'

export default function Table (props) {
  let {display,n,p,prec,m} = props
  let probFunction=()=>{}
  
  let style={
    display: display?'block':'none'
  }
  
  if(m) {
    probFunction = poissonProbability
  } else {
    probFunction = binomialProbability
  }
  
  let rows = () =>{
    let rowArr=[]
    let commulative=0
    for(let i=0; i<=n; i++) {
      let prob
      if(m) {
        prob = Number(probFunction(m,i).toFixed(prec))
      } else {
        prob = Number(probFunction(n,i,p).toFixed(prec))
      }
      commulative = Number((commulative+prob).toFixed(prec))
      rowArr.push(
        <tr className={styles.row} key={i}>
          <td>{i}</td>
          <td>{prob}</td>
          <td>{commulative}</td>
          <td>{Number((1-commulative).toFixed(prec))}</td>
        </tr>
      )
    }
    return rowArr
  }
  
  return (
    <div className={styles.container} style={style}>
      <table className={styles.table}>
        <tbody>
        <tr className={styles.row+' '+styles.headrow}>
          <th>X</th>
          <th>P(r=X)</th>
          <th>P(r&lt;=X)</th>
          <th>P(r&gt;X)</th>
        </tr>
        {rows()}
        </tbody>
      </table>
      <p className={styles.note}>Note: Value of P({n}&lt;={n}) may slightly differ from 1 and value of P({n}&gt;{n}) may slightly differ from 0 because of precision loss in rounding of numbers.</p>
    </div>
  )
}