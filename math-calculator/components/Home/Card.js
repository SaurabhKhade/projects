import styles from '../../styles/Home/Card.module.css'
import {useRouter} from 'next/router'

export default function Card(props) {
  let {extra,title,img,desc,path} = props
  const router = useRouter()
  
  function extraDesc() {
    if (extra) {
      return <small>{extra}</small>
    } else {
      return <></>
    }
  }
  
  return (
    <div className={styles.container} onClick={()=>router.push({pathname:path})}>
      {extraDesc()}
      <h2 className={styles.title}>{title}</h2>
      <img src={`/math-calculator${img}`} alt={title} className={styles.img}/>
      <p className={styles.desc}>{desc}</p>
    </div>
  )
}