import styles from './style.module.scss';
import {useState} from 'react';

export default function Form() {
  
  function submitHandler(e) {
    e.preventDefault();
  }
  
  return (
  <div className={styles.container}>
    <form className={styles.form} onSubmit={submitHandler}>
      <label>Email</label>
      <input type="email" placeholder="Email Address" className={styles.input}/>
      <label>Password</label>
      <input type="password" placeholder="Password" className={styles.input}/>
      <p>Forgot password?</p>
      <button type="submit" className={styles.button}>
        Log in
      </button>
      <div className={styles.divider}>
        <hr className={styles.hr}/>
        <p className={styles.or}>or</p>
        <hr className={styles.hr}/>
      </div>
      <div className={styles.secondary}>
        {/*Keep image in public folder*/}
        <img src="/google.png" alt="google"  className={styles.image}/>
        <p>Log in with Google</p>
      </div>
    </form>
  </div>
  );
}