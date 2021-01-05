// https://www.codewars.com/kata/55f5efd21ad2b48895000040/train/javascript
function maxSumDig(nmax, maxsm) {
  let ret=[]
  for(let i=1000;i<=nmax;i++){
    let s=i+'',pass=true
    for(let j=0;j+3<s.length;j++){
      let sum=s.substring(j,j+4).split('').reduce((p,c)=>parseInt(p)+parseInt(c),0)
      if(sum>maxsm){
        pass=false
        break
      }
    }
    if(pass) ret.push(i)
  }
  const sum = ret.reduce((p,c)=>p+c,0)
  const avg = ret.length > 0 ? sum/ret.length : 0
  let mid = Math.min(...ret.map(i=>Math.abs(i-avg))) + avg
  mid = ret.indexOf(mid) > -1 ? mid : avg-mid+avg
  mid = mid > nmax ? 0 : mid
  return [ret.length, mid, sum]
}

module.exports=maxSumDig