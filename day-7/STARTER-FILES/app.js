const calcBtn = document.querySelector('#calculate');

const billAmt = document.querySelector('#bill-amount');
const numPeople = document.querySelector('#number-of-people');

const tipAmt = document.querySelector('#tip-amount');
const totalPerPerson = document.querySelector('#total-per-person');

const tipOptions = document.getElementsByName('tip')
calcBtn.addEventListener('click', e => {
  const tipSelected = [...tipOptions].filter(tip => tip.checked).map(tip => tip.value.replace('%', '')).join('')
  const total = billAmt.value / numPeople.value;
  const tipTotal = (tipSelected / 100) * total;
  const totalTop = total + tipTotal;
  tipAmt.innerHTML = tipTotal.toFixed(2);
  totalPerPerson.innerText = Number(totalTop).toFixed(2);
})
