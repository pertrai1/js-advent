const now = Date();
const currentDate = new Date(now);
const dayObj = {
  inMonth: currentDate.getDate(),
  inWeek: currentDate.getDay(),
  inYear: currentDate.getFullYear()
}
console.log({dayObj})
const daysWrapper = document.querySelector('[data-element="days-wrapper"]');

for (let i = 0; i <= 31; i++) {
  daysWrapper.innerHTML += `<div class="date-number">${i + 1}</div>`
}

