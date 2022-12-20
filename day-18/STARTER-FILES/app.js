const password = document.querySelector('#password');
const characterLength = document.querySelector('#length');
const lengthText = document.querySelector('#lengthText');
const symbols = document.querySelector('#symbols');
const nums = document.querySelector('#numbers');

characterLength.addEventListener('click', (e) => {
  if (symbols.checked) {
    password.value += "@#$%";
  }
  if (nums.checked) {
    password.value += "1234";
  }
  lengthText.innerText = e.target.value;
})
