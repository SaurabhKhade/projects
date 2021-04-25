import Head from '../components/Head'
import Binomial from '../components/Probability/Binomial'
import styles from '../styles/Probability/Page.module.css'

export default function probability() {
  return (
  <div className={styles.containerr}>
    <Head title="Calculate probability of binomial, poisson and normal distribution" desc="using our calculators, calculate probability of binomial distribution, poisson distribution and normal distribution very easily." keys="probability,binomial,poisson,normal,distribution,calculators" />
    <Binomial />
  </div>
  )
}