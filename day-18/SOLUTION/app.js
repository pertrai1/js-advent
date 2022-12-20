const passwordInput = document.getElementById('password');
const inputs = [...document.querySelectorAll(`input:not([type="text"])`)];
const lengthInput = document.getElementById('length');
const lengthText = document.getElementById('lengthText');
const copyButton = document.querySelector('.copy');

const numbers = [2,3,4,5,6,7,8,9];
const symbols = ["@", "#", "$", "%"];
const similarLowercaseLetters = ['i', 'l', 'o'];
const similarUppercaseLetters = ['L','O'];
const similarNumbers = [0, 1];

const characterSkipCodes = [8, 11,14];
const characterCodes = Array.from(Array(26)).map((_, i) => i + 97);

const lowercaseLetters = characterCodes.map(code => {
  String.fromCharCode(code)
}).filter((_, i) => {
  !characterSkipCodes.includes(i)
});
const uppercaseLetters = lowercaseLetters.map(letter => {
  debugger;
  letter.toUpperCase()
});

copyButton.addEventListener('click', () =>{
    navigator.clipboard.writeText(passwordInput.value);
    copyButton.classList.add('copied');
    setTimeout(() => {
        copyButton.classList.remove('copied');
    }, 3000)
})

const updatePassword = () => {
    const length = lengthInput.value;
  debugger;
    const checkboxValues = inputs.slice(1).map(input => input.checked);
    const password = generatePassword(length, ...checkboxValues);
    passwordInput.value = password;
    lengthText.innerHTML = `${length}&nbsp;`;
}

inputs.forEach(input => input.addEventListener('change', updatePassword));

const generatePassword = (length, hasSymbols, hasNumbers, hasLowercase, hasUppercase, hasSimilars) => {
    let availableCharacters = [
        ...(hasSymbols ? symbols : []),
        ...(hasNumbers ? numbers : []),
        ...(hasLowercase ? lowercaseLetters : []),
        ...(hasUppercase ? uppercaseLetters : [])
    ];

    if(hasSimilars) {
        if(hasLowercase) {
            availableCharacters = [...availableCharacters, ...similarLowercaseLetters];
        }
        if(hasUppercase) {
            availableCharacters = [...availableCharacters, ...similarUppercaseLetters];
        }
        if(hasNumbers) {
            availableCharacters = [...availableCharacters, ...similarNumbers];
        }
    }

    let password = "";

    if(availableCharacters.length === 0) return "";

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * availableCharacters.length);
        password+= availableCharacters[randomIndex];
    }

    return password;
}

updatePassword();
