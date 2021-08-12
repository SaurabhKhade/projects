import styles from './style.module.scss';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

export default function Tooltip() {
  return (
  <div className={styles.container}>
    <div className={styles.iconsBox}>
      <div className={styles.wrapper} data-icon="Facebook">
        <FacebookIcon className={styles.icon}/>
      </div>
      <div className={styles.wrapper} data-icon="GitHub">
        <GitHubIcon className={styles.icon}/>
      </div>
      <div className={styles.wrapper} data-icon="Instagram">
        <InstagramIcon className={styles.icon}/>
      </div>
      <div className={styles.wrapper} data-icon="Twitter">
        <TwitterIcon className={styles.icon}/>
      </div>
      <div className={styles.wrapper}  data-icon="YouTube">
        <YouTubeIcon className={styles.icon}/>
      </div>
    </div>
  </div>
  )
}