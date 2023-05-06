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