import styles from '../../styles/Probability/Input.module.css'

export default function Input({values,setValues}) {
  
  function inputHandler(e) {
    let {name,value} = e.target
    setValues(old=>{
      return {...old,[name]:value};
    })
  }
  
  return (
    <div className={styles.inputBox}>
      <div>m</div>
      <div >
        <input type="number" className={styles.input} value={values.m} name="m" onChange={inputHandler}/>
      </div>
      <div>sd</div>
      <div>
        <input type="number" className={styles.input} value={values.sd} name="sd" onChange={inputHandler}/>
      </div>
      <div className={styles.precisionMsg}>
        Left limit
      </div>
      <div>
        <input type="text" className={styles.input} value={values.left} name="left" onChange={inputHandler}/>
      </div>
      <div className={styles.precisionMsg}>
        Right Limit
      </div>
      <div>
        <input type="text" className={styles.input} value={values.right} name="right" onChange={inputHandler}/>
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