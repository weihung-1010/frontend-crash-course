// Practices 5
// 1. Declare a arrow function called sEven, should pass a number variable and should return the result if is even return true
const sEven = (x) => {
  if (x % 2 === 0) {
    return true
  } else {
    return false
  }
}
console.log(sEven(2))

// 2. Declare a arrow function called isLeapYear, should pass a number variable and should return the result if is leap year return true
const isLeapYear = (x) => {
  if (x % 4 === 0) {
    return true
  } else {
    return false
  }
}
console.log(isLeapYear(1992))

// 3. Declare a arrow function called isPrime, should pass a number variable and should return the result if is prime number return true
const isPrime = (x) => {
  if (x <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(2));

// 4. Declare a arrow function called findMax, should pass 3 number variables and should return the max number of them.
const findMax = (num1, num2, num3) => {
  if (num1 > num2 && num1 > num3) {
    return num1 + '最大'
  } else if (num2 > num1 && num2 > num3) {
    return num2 + '最大'
  } else if (num3 > num1 && num3 > num2) {
    return num3 + '最大'
  }
}
console.log(findMax(1, 3, 8))