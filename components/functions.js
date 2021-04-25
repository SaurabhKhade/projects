function factorial(number) {
  let result=1
  for(let i=1; i<=number; i++) {
    result*=i
  }
  return result
}

function combinations(n,r) {
  let nFact = factorial(n)
  let rFact = factorial(r)
  let nrFact = factorial(n-r)
  return (nFact/(rFact*nrFact))
}

export function binomialProbability(n,r,p) {
  let combs = combinations(n,r)
  let success = Math.pow(p,r)
  let failure = Math.pow(1-p,n-r)
  return (combs*success*failure)
}

export function poissonProbability(m,r) {
  let exp = Math.exp(-m)
  let mx = Math.pow(m,r)
  let xfact = factorial(r)
  return (exp*mx)/xfact
}