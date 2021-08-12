import styles from '/styles/Chat.module.scss';
import Chat from './chat';
import Contacts from './contacts';
import {names,messages,time,dp} from './chatData';
import {RiChat4Fill} from 'react-icons/ri';
import {useState} from 'react';

export default function Chats() {
  const [isOpen,setIsOpen] = useState(false);
  
  return (
    <>
    {chatBoxes()}
    <div className={styles.contacts} onClick={()=>setIsOpen(old=>!old)}>
      <img src="/chat-icon.jpg" alt="" />
    </div>
    <Contacts states={[isOpen,setIsOpen]}/>
    </>
  )
}

function chatBoxes() {
  let array = [];
  for(let i=0; i<names.length; i++)
   array.push(<Chat key={i} name={names[i]} message={messages[i]} time={time[i]} dp={dp[i]}/>);
  return array;
}