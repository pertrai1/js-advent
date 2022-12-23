const toaster = document.querySelector('.toaster');
const closeButton = document.getElementById('closeToaster');
let alreadyOpened = false;

const toggleToaster = (shouldBeOpen) => {
    if(shouldBeOpen && !alreadyOpened) {
        toaster.classList.remove('collapsed');
        alreadyOpened = true;
        setTimeout(() => {
            toaster.classList.add('collapsed');
        }, 15000);
    }else {
        toaster.classList.add('collapsed');
    }
}

closeButton.addEventListener('click', () => toggleToaster(false));

document.addEventListener('mouseout', e => {
    if (!e.toElement && !e.relatedTarget) {
        toggleToaster(true);
    }
});
