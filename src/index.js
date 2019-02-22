module.exports = function getZerosCount(number, base) {
  let primes=[];
  for(let i=2;base>1;)
  {
    if(base%i===0)
    {
      primes.push(i);
      base=base/i;
    }
    else
    {
      if(i>2) i+=2;
      else i=3;
    }
  }
  const uniquePrimes=[...new Set(primes)];
  const countPrimes=uniquePrimes.map(function(pr){
      let answer=0;
      for(let i=1;Math.pow(pr,i)<=number;i++)
      {
        answer+=parseInt(number/Math.pow(pr,i));  
      }
      return answer;
  });
  let count = [];
  for(let i=0;i<countPrimes.length;i++)
  {
    count.push(Math.floor(countPrimes[i]/primes.filter(a=>a==uniquePrimes[i]).length));
  }
  console.log(count);
  return Math.min(...count);
}