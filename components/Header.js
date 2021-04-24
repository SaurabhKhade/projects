import styles from '../styles/Header.module.css'

export default function Header() {
  return (
  <div className={styles.container}>
    <h1 className={styles.title}>Math-Calculator</h1>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(35, 47, 62)" fillOpacity="1" d="M0,128L30,154.7C60,181,120,235,180,229.3C240,224,300,160,360,117.3C420,75,480,53,540,69.3C600,85,660,139,720,170.7C780,203,840,213,900,197.3C960,181,1020,139,1080,133.3C1140,128,1200,160,1260,176C1320,192,1380,192,1410,192L1440,192L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
  </svg>
  </div>
  )
}