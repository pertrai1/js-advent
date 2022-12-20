const menuItems = [
    {
        name: 'French Fries with Ketchup',
        price: 223,
        image: 'plate__french-fries.png',
        alt: 'French Fries',
        count: 0
    },
    {
        name: 'Salmon and Vegetables',
        price: 512,
        image: 'plate__salmon-vegetables.png',
        alt: 'Salmon and Vegetables',
        count: 0
    },
    {
        name: 'Spaghetti with Meat Sauce',
        price: 782,
        image: 'plate__spaghetti-meat-sauce.png',
        alt: 'Spaghetti with Meat Sauce',
        count: 0
    },
    {
        name: 'Bacon, Eggs, and Toast',
        price: 599,
        image: 'plate__bacon-eggs.png',
        alt: 'Bacon, Eggs, and Toast',
        count: 0
    },
    {
        name: 'Chicken Salad with Parmesan',
        price: 698,
        image: 'plate__chicken-salad.png',
        alt: 'Chicken Salad with Parmesan',
        count: 0
    },
    {
        name: 'Fish Sticks and Fries',
        price: 634,
        image: 'plate__fish-sticks-fries.png',
        alt: 'Fish Sticks and Fries',
        count: 0
    }
]

let menuMap = new Map();

const addToCartBtns = document.querySelectorAll('.add');
const cartSummary = document.querySelector('.cart-summary');

let total = 0;

[...addToCartBtns].map(btn => {
  btn.addEventListener('click', e => {
    const li = document.createElement('li');
    const innerTxt = e.target.parentNode.firstChild.nextSibling.innerText
    const subTotal = document.querySelector('.line-item .subtotal')
    let count = 0;
    for (const [key, value] of menuItems.entries()) {
      if (value.name.includes(innerTxt)) {
        const menuItemDataAttr = `menu-item-${key}`;
        [...document.querySelector('.cart-summary').childNodes].map(child => {
          if ('menuItem' in child.dataset) {
            count++
            console.log(child)
          }
        })
        li.innerHTML = displayInCard(value, count);
        li.dataset.menuItem = `menu-item-${key}`;
        total += value.price;
        subTotal.innerText = Number.parseFloat(total / 100).toFixed(2);

        if (menuMap.has(`menu-item-${key}`)) {
          console.log('here')
        }
        console.log(menuMap)
      }
    }
    cartSummary.append(li)
    toggleButton(e)

    if (document.querySelector('.cart-summary').childNodes.length !== 0) {
      document.querySelector('.empty').classList.add('display-none')
    } else {
      document.querySelector('.empty').classList.remove('display-none')
    }
  });
})

const displayInCard = (value, count) => {
  console.log(count)
 return `
  <div class="plate">
    <img src="images/${value.image}">
    <div class="quantity">${value.count + 1}</div>
  </div>
  <div class="content">
    <p class="menu-item">${value.name}</p>
    <p class="price">$${(value.price / 100).toFixed(2)}</p>
  </div>
  <div class="quantity__wrapper">
    <button class="decrease">
    <img src="images/chevron.svg">
    </button>
    <div class="quantity">${value.count + 1}</div>
    <button class="increase">
    <img src="images/chevron.svg">
    </button>
  </div>
  <div class="subtotal">$${(value.price / 100).toFixed(2)}</div>`
}

const toggleButton = (e) => {
  e.target.classList.remove('add')
  e.target.classList.add('in-cart')
  e.target.innerHTML = `
<img src="images/check.svg" alt="Check" />
In Cart
`
}
