// 1.Create a simple html with some tags.
// index.html

// 2. Using getElementByld to get a element and print it.
const logo = document.getElementById('logo')
console.log(logo)

// 3. Using getElementsByClassName to get elements and print all.
const contents = document.getElementsByClassName('content')
console.log(contents)

// 4. Using querySelector to get a element by id and print it.
const text = document.querySelector('#text')
console.log(text)

// 5. Using querySelector to get a element by class and print it.
const header = document.querySelector('.container')
console.log(header)

// 6. Using querySelector to get elements by class and print all.
const contents2 = document.querySelectorAll('.content')
console.log(contents2)