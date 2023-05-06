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