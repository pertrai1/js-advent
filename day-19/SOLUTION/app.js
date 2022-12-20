const fields = document.querySelectorAll('.field');
const passwordInput = document.querySelector('input[name="password"]')
const confirmPasswordInput = document.querySelector('input[name="confirm-password"]');
const showPasswordButton = document.querySelector('input[name="password"] ~ .show-hide');
const showConfirmPasswordButton = document.querySelector('input[name="confirm-password"] ~ .show-hide');

console.log(showPasswordButton, showConfirmPasswordButton);

showPasswordButton.addEventListener('click', (e) =>{
    e.preventDefault();
    const currentType = passwordInput.type;
    if(currentType === "text"){
        passwordInput.type = "password";
    }else {
        passwordInput.type = "text";
    }
    fields[2].classList.toggle('show');
})
showConfirmPasswordButton.addEventListener('click', (e) =>{
    e.preventDefault();
    const currentType = confirmPasswordInput.type;
    if(currentType === "text"){
        confirmPasswordInput.type = "password";
    }else {
        confirmPasswordInput.type = "text";
    }
    fields[3].classList.toggle('show');
    console.log(currentType);
})




const isValidEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const nameToConfigMap = {
    name :  {
        validator: (value) => !!value,
        err: 'A name is required'
    },
    email:  {
        validator: isValidEmail,
        err: 'Must enter a valid email'
    },
    password: {
        validator: (value) => !!value,
        err: 'A password is required.'
    },
    "confirm-password": {
        validator: (confirmPassword) => confirmPassword === passwordInput.value,
        err: 'Password and confirm password must match'
    }
}

fields.forEach( (field,i) => {
    const children = field.childNodes;
    const input = children[1];
    input.addEventListener('blur', (e) => {
        const { name, value } = e.target;
        const config = nameToConfigMap[name];

        const successElement = field.querySelector('div.success');
        const errorElement = field.querySelector('div.error');

        if(config.validator(value)){
            successElement.innerHTML = `<img src="./images/success.svg" alt="Success" />`
            errorElement.innerHTML = "";
        }else {
            errorElement.innerHTML = `<img src="./images/error.svg" alt="Error" />${config.err}`
            successElement.innerHTML = "";
        }
    })
})

