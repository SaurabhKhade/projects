import styles from '../../styles/Probability/BinomialInput.module.css'

export default function Input({values,setValues}) {
  
  function inputHandler(e) {
    let {name,value} = e.target
    setValues(old=>{
      return {...old,[name]:value};
    })
  }
  
  return (
    <div className={styles.inputBox}>
      <div>n</div>
      <div >
        <input type="number" className={styles.input} value={values.n} name="n" onChange={inputHandler}/>
      </div>
      <div>p</div>
      <div>
        <input type="number" className={styles.input} value={values.p} name="p" onChange={inputHandler}/>
      </div>
      <div className={styles.precisionMsg}>
        no of digits after decimal point
      </div>
      <div>
        <input type="number" className={styles.input} value={values.prec} name="prec" onChange={inputHandler}/>
      </div>
    </div>
  )
}