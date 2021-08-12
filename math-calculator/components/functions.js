import ztable from 'ztable'

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

export function normalProbability(left,right,sd,m,prec) {
  let prob = 0
  let rightZ = 0
  let leftZ = 0
  if(right !== Infinity) {
    rightZ = (right-m)/sd
  } 
  if(left !== Infinity) {
    leftZ = (left-m)/sd
  }
  if (left===Infinity) {
    return Number((ztable(rightZ)).toFixed(prec));
  } else if (right===Infinity) {
    return Number((1-ztable(leftZ)).toFixed(prec));
  } else {
    return Number((ztable(rightZ)-ztable(leftZ)).toFixed(prec));
  }
}