// 1. Create a text input and button called "add color", when user click the button add the color in the text input into the list.

const colorInput = document.querySelector('#colorInput');
const addColorBtn = document.querySelector('#addColorBtn');
const colorList = document.querySelector('#colorList');

addColorBtn.addEventListener('click', function () {
  const color = colorInput.value;
  if (color.length > 0) {
    const liElement = document.createElement('li');
    liElement.textContent = color;
    colorList.appendChild(liElement);
    colorInput.value = '';
  } else{
    alert('不可空白')
  }
});