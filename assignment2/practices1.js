// 1. Declare a array called fruits with some fruits in default.
const fruits = ['蘋果', '香蕉', '芭樂', '梨子', '蜜桃']
console.log(fruits)
// 2. Print every element in the fruits array declared above.
for (let i = 0; i <= fruits.length; i++) {
  console.log(fruits[i])
}

// 3. Modify the thirth fruit to Durian and print the fruits array.
fruits[2] = '榴蓮';
console.log(fruits);

// 4. Using push method to add two fruits into array.
fruits.push('葡萄', '柚子')
console.log(fruits)

// 5. Remove the first fruit from the array.
fruits.splice(0, 1)
console.log(fruits
)
// 6. Using for, while loop to print the element in the fruits array.
for (let i = 0; i <= fruits.length; i++) {
  console.log(fruits[i])
}

let i = 0
while (i <= fruits.length) {
  console.log(fruits[i])
  i++
}
console.log(fruits)

// 7. Declare a array called numbers and set each element to its squared using map.
const numbers = [5, 7, 9, 2, 8]
const mappedNumbers = numbers.map((element, index, originalNumbers) => {
  return element * 2
})
console.log(mappedNumbers)

// 8. Declare a array called numbers and filter the prime number using filter.
const filterArray = [2, 5, 7, 8, 9, 3, 32, 64, 13, 21]
const primes = numbers.filter((num) => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num !== 1;
});

// 9.Declare a array called numbers and computed the sum of the elements.
const reduceArray = [6, 7, 2, 9, 14]
const sum = reduceArray.reduce((total, num) => {
  return total + num
}, 0)
console.log(sum) // Output:38