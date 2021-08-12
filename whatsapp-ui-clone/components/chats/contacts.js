import styles from '/styles/Chat.module.scss';
import {BiLeftArrowAlt} from 'react-icons/bi';
import {AiOutlineSearch} from "react-icons/ai";
import {HiDotsVertical} from "react-icons/hi";

export default function Contacts({states}) {
  const [isOpen,setIsOpen] = states;
  const style = {
    left: isOpen?"0":"100%"
  }
  
  return (
  <div style={style} className={styles.contactPage}>
    <div className={styles.headrow}>
      <BiLeftArrowAlt />
      <div>
        <p>Select Contact</p>
        <p>11 contacts</p>
      </div>
      <AiOutlineSearch />
      <HiDotsVertical />
    </div>
  </div>
  );
}