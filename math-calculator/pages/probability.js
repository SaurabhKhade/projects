import Head from '../components/Head'
import Binomial from '../components/Probability/Binomial'
import Poisson from '../components/Probability/Poisson'
import Normal from '../components/Probability/Normal'

export default function probability() {
  return (
  <div>
    <Head title="Calculate probability of binomial, poisson and normal distribution" desc="using our calculators, calculate probability of binomial distribution, poisson distribution and normal distribution very easily." keys="probability,binomial,poisson,normal,distribution,calculators" />
    <Binomial />
    <Poisson />
    <Normal />
  </div>
  )
}