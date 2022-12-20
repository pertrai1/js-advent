const keys = [...document.querySelectorAll('.key')];

const keysMap = keys.reduce((acc, curr) => {
  acc[curr.dataset.key] = curr;
  return acc;
}, {})

let currentKey;

document.querySelector('body').addEventListener('keyup', e => {
  if (document.querySelector(`[data-key="${e.key.toUpperCase()}"]`)) {
    console.log(e.key)
    if (document.querySelector(`[data-key="${e.key.toUpperCase()}"]`).classList.contains('jiggle')) {
      document.querySelector(`[data-key="${e.key.toUpperCase()}"]`).classList.remove('jiggle')
    } else {
      document.querySelector(`[data-key="${e.key.toUpperCase()}"]`).classList.add('jiggle')
    }
  } else {
    return
  }
})
