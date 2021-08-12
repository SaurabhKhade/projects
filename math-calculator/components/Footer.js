import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.container}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(35, 47, 62)" fillOpacity="1" d="M0,128L30,154.7C60,181,120,235,180,229.3C240,224,300,160,360,117.3C420,75,480,53,540,69.3C600,85,660,139,720,170.7C780,203,840,213,900,197.3C960,181,1020,139,1080,133.3C1140,128,1200,160,1260,176C1320,192,1380,192,1410,192L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
      <div className={styles.box}>
        <h2>Saurabh Khade</h2>
        <hr className={styles.hr} />
        <div className={styles.social}>
          <a href="https://www.instagram.com/__saurabh_khade__/" target="_blank">
            <i className={`fa fa-instagram ${styles.icon}`} />
          </a>
          <a href="https://www.linkedin.com/in/saurabh-khade-2a44681b0" target="_blank">
            <i className={`fa fa-linkedin-square ${styles.icon}`} />
          </a>
          <a href="https://github.com/SaurabhKhade" target="_blank">
            <i className={`fa fa-github-square ${styles.icon}`} />
          </a>
          <a href="https://saurabhkhade.github.io" target="_blank">
            <i className={`fa fa-globe ${styles.icon}`} />
          </a>
        </div>
        <hr className={styles.hr} />
        <p><strong>v1.0.0</strong></p>
      </div>
    </footer>
  )
}