// 1. create a simple html like example
//index.html

// 2. Append a p tag with "My first DOM created." into container.
const text2 = document.createTextNode('My first DOM created.')
const paragraph = document.createElement('p')
paragraph.appendChild(text2)
const container = document.querySelector('.container')
container.appendChild(paragraph)

// 3. Append a ul tag.
const section = document.querySelector('.section')
const ulElement = document.createElement('ul')
section.appendChild(ulElement)

// 4. Append 3 li tags into the ul tag with 3 items: red, blue, yellow using for loop.

for (let i = 0; i < 3; i++) {
  const liElement = document.createElement('li');
  if (i === 0) {
    liElement.textContent = '紅色';
  } else if (i === 1) {
    liElement.textContent = '藍色';
  } else {
    liElement.textContent = '黃色';
  }
  ulElement.appendChild(liElement);
}

section.appendChild(ulElement);