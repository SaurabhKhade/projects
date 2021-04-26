import Head from '../components/Head'
import Card from '../components/Home/Card'

export default function Home() {
  return (
    <div>
      <Head title="Math-Calculator" desc="Get calculators to calculate probability of binomial distribution, poisson distribution, normal distribution as well as binary arithmatics and many more..." keys="probability,binomial,poisson,normal,distribution,binary,arithmatics" />
      <Card title="Probability" img="/img/probability.webp" desc="Get calculators to calculate probability of binomial distribution, poisson distribution and normal distribution." path="/probability" />
      <Card extra="coming soon..." title="Binary Calculator" img="/img/binary.webp" desc="Get calculators to calculate addition, subtraction, division and multiplication of binary numbers." path='/binary' />
    </div>
  )
}
