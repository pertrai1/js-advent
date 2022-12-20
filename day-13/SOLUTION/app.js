const elgatoKeylight = document.querySelector('#elgatoKeylight');
const elgatoKeylightModal = document.querySelector('#elgatoKeylightModal');
const closeButton = document.querySelector('.close');

const showModal = (event) => {
  event.preventDefault();
  elgatoKeylightModal.classList.add('show');
}

const closeModal = (event) => {
  elgatoKeylightModal.classList.remove('show');
}

elgatoKeylight.addEventListener('click', showModal);
closeButton.addEventListener('click', closeModal);