import styles from '/styles/Chat.module.scss';
import {BsCheckAll,BsFillPersonFill} from 'react-icons/bs';

export default function Chat(props) {
  let {name,message,time,dp} = props;
  
  function profile() {
    if(dp==='') {
      return <BsFillPersonFill className={styles.nodp}/>
    } else {
      return <img src={dp} className={styles.img}/>
    }
  }
  
  return (
  <div className={styles.chat}>
    <div className={styles.dp}>
      {profile()}
    </div>
    <div className={styles.message}>
      <div className={styles.upperStrip}>
        <p>{name}</p>
        <p>{time}</p>
      </div>
      <div className={styles.lowerStrip}>
        <BsCheckAll/>
        <p>{message}</p>
      </div>
    </div>
    <hr />
  </div>
  )
}