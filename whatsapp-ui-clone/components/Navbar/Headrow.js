import styles from '/styles/Navbar.module.scss';
import {AiOutlineSearch} from "react-icons/ai";
import {HiDotsVertical} from "react-icons/hi";

export default function Head() {
  
  return (
  <div className={styles.headrow}>
    <p>WhatsApp</p>
    <div className={styles.iconBox}>
      <AiOutlineSearch/>
      <HiDotsVertical />
    </div>
  </div>
  )
}