import React,{useState} from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import './contact.css';
import 'font-awesome/css/font-awesome.min.css';
import firebase from '../firebase';


// Contact componet to handle contact submission and display adress and email and links to social media accounts

export default function Contact() {
  const reset={
    name:'',
    email:'',
    message:''
  }
  
  let [form,setForm]=useState(reset);
  
  const change = e =>{
    let name=e.target.name;
    let value=e.target.value;
    setForm(old=>({...old,[name]:value}));
  };
  
  const submit = e =>{
    e.preventDefault();
    firebase.addData(form.name,form.email,form.message)
    .then(()=>{
      alert('Submitted Successfully');
      setForm(reset);
    });
  };
  
  return (
    <div className='contact' id='contact'>
      <p>Contact</p>
      <form className='form' onSubmit={submit}>
        <input type='text' className='input'
          placeholder='Name' name='name'
          onChange={change} value={form.name}/>
        <input type='email' className='input'
          placeholder='Email' name='email'
          onChange={change} value={form.email}/>
        <textarea className='input'
          rows='8' name='message'
          placeholder='Say Something...'
          onChange={change} value={form.message}/>
        <input type='submit' className='input submit'/>
      </form>
      <div className='info'>
        <div className='icon-box'>
          <LocationOnIcon className='icon'/>
        </div>
        <div>
          <p>A/P : Kagani/Kalkundri</p>
          <p>Chandagad,Kolhapur,Maharashtra</p>
          <p>416 508, India</p>
        </div>
      </div>
      <div className='info'>
        <div className='icon-box'>
          <MailOutlineIcon className='icon'/>
        </div>
        <div>
          <p>khadesaurabh055@gmail.com</p>
        </div>
      </div>
      <div className='social-icons'>
        <a href='https://www.facebook.com/saurabh.khade.9889' target='_blank' rel="noreferrer">
          <i className="fa fa-facebook icon"/>
        </a>
        <a href='https://www.linkedin.com/in/saurabh-khade-2a44681b0' target='_blank' rel="noreferrer">
          <i className="fa fa-linkedin icon"></i>
        </a>
        <a href='https://github.com/SaurabhKhade' target='_blank' rel="noreferrer">
          <i className="fa fa-github icon"></i>
        </a>
        <a href='https://www.instagram.com/__saurabh_khade__/' target='_blank' rel="noreferrer">
          <i className="fa fa-instagram icon"></i>
        </a>
      </div>
    </div>
  );
};