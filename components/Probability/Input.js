import styles from '../../styles/Probability/Input.module.css'

export default function Input({values,setValues,params}) {
  
  function inputHandler(e) {
    let {name,value} = e.target
    setValues(old=>{
      return {...old,[name]:value};
    })
  }
  
  return (
    <div className={styles.inputBox}>
      <div>{params.a}</div>
      <div >
        <input type="number" className={styles.input} value={values[params.a]} name={params.a} onChange={inputHandler}/>
      </div>
      <div>{params.b}</div>
      <div>
        <input type="number" className={styles.input} value={values[params.b]} name={params.b} onChange={inputHandler}/>
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