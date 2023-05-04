// Practices 1
// 1.Declare some variable and log the result of variables arithmetic.
let a = 10
let b = 20
console.log(a + b) // Output: 30
console.log(a - b) // Output: -10
console.log(a * b) // Output: 200
console.log(a / b) // Output: 0.5

// 2.Declare some variable and assign the result of variables arithmetic to an and log it.
let calculate = 8 - 2
console.log(calculate) // Output: 6

let c = 8;
let d = 9;
let e = c + d;
console.log(e); // Output: 17

// 3.Declare some variable and log the result to variables comparison.
let f = 20
let g = 18
console.log(f !== g) // Output: true
console.log(f <= g) // Output: false

// 4.Declare some variable and log the result of variables logical convertion.
let h = 9
let i = 11
let j = 23
console.log(i > h && j > i) // Output: true
console.log(h < j || i < j) // Output: true
console.log(!(j < h)) // Output: true

// Practices 2
// 1.Declare a variable called age and show 'can vote' if age >= 18, show 'canit vote' if age < 18
let age = 21
if (age >= 18) {
  console.log('可以投票')
} else {
  console.log('不能投票')
}

// 2.Check if a number is odd or even.
let num = 113
if (num % 2 === 0) {
  console.log('偶數')
} else {
  console.log('奇數')
}

// 3.Declare two variables and check which one is big or they're equaled.
let num1 = 90;
let num2 = 30;

if (num1 > num2) {
  console.log('num1比較大')
} else if (num2 > num1) {
  console.log('num2比較大')
} else {
  console.log('兩者相等')
}

// 4.Declare three variables and check which one is big or they're equaled.
let num3 = 100
let num4 = 213
let num5 = 29

if (num3 > num4 && num3 > num5) {
  console.log('num3比較大')
} else if (num4 > num3 && num4 > num5) {
  console.log('num4比較大')
} else if (num5 > num3 && num5 > num4) {
  console.log('num5比較大')
} else {
  console.log('三者相等')
}

// 5.Declare two variables for range(ex. 10, 100), declare another number variable and check a number is present in given range
let rangeStart = 50
let rangeEnd = 200
let numI = 145
if (numI >= rangeStart && numI <= rangeEnd) {
  console.log('在範圍內')
} else {
  console.log('不在範圍內')
}
// 6.Declare a variable called year and check the year is leap year or not.
let year = 2023
if (year % 4 === 0) {
  console.log(year + '是閏年')
} else {
  console.log(year + '不是閏年')
}

// Practices 3
// 1.Declare a variable called day type is number and show the result of day of string(0 -> 'Sunday', 1 -› 'Monday', ... 6 -› 'Saturday')
let day = 0
switch (day) {
  case 0:
    console.log('星期日')
    break
  case 1:
    console.log('星期一')
    break
  case 2:
    console.log('星期二')
    break
  case 3:
    console.log('星期三')
    break
  case 4:
    console.log('星期四')
    break
  case 5:
    console.log('星期五')
    break
  case 6:
    console.log('星期六')
    break
}

// 2.Declare a variable called seaon type is number and show the result of season of string(1 -> 'Spring', 2 -> 'Summer', 3 -> 'Fall', 4 -› 'Winter')
let seaon = 1
switch (seaon) {
  case 1:
    console.log('春天')
    break
  case 2:
    console.log('夏天')
    break
  case 3:
    console.log('秋天')
    break
  case 4:
    console.log('冬天')
    break
}

// Practices 4
// 1.Show 1 to 10000
for (let i = 0; i <= 10000; i++) {
  console.log(i)
}

// 2.Show 1 to 100 even numbers
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i)
  }
}
// 3.Show 1 to 100 odd numbers
for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i)
  }
}
// 4.Show 1 to 100 prime numbers
for (let i = 2; i <= 100; i++) {
  let isPrime = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(i);
  }
}
// 5.Declare a variable called size and show the height of size triangle
let size = 10;

for (let i = 1; i <= size; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += '*';
  }
  console.log(row);
}
// 6.Show Multiplication Table(from 1 * 1 to 9 * 9)
for (i = 1; i <= 9; i++) {
  for (j = 1; j <= 9; j++) {
    console.log(`${i} * ${j} = ${j * i}`);
  }
}

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