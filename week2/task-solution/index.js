//Fizz Buzz
for (let i = 1; i <= 100; i++) {
    console.log((i % 3 ? '' : 'fizz') + (i % 5 ? '' : 'buzz') || i)
}

//Prime Number
const printPrimeNumbers = (num) => {
    let primes = []
    for(let n=3;n<=num;n+=2) {
        if(primes.every((prime) => {return n % prime!=0})) {
            primes.push(n);
        }
    }
    primes.unshift(2);
    console.log(primes)

}
printPrimeNumbers(100)

const makeArray = (str) => {
   str = `i love algorithms but i think the ones here are too simple`

   let array = str.split(' ')

   console.log (array)

}

makeArray()