// Theme Switching
const toggleSwitch = document.querySelector('.icon');
const modeText = document.querySelector('.mode');
let currentTheme = 'light';
modeText.innerHTML = 'dark';
function switchTheme(e) {
    if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        modeText.innerHTML = currentTheme;
        toggleSwitch.classList.toggle('fa-sun');
        currentTheme = 'dark';
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        modeText.innerHTML = currentTheme;
        toggleSwitch.classList.toggle('fa-sun');
        currentTheme = 'light';
    }
}
toggleSwitch.addEventListener('click', switchTheme, false);

// Calculator Display
const buttons = document.querySelectorAll('.button');
const calculatorScreen = document.querySelector('.calculator-screen-output');
let input = "", result = "";
function display(e) {
    if (e.target.tagName === 'SUB' || e.target.tagName === 'SUP' || e.target.tagName === 'EM') {
        input = "";
        result = result * -1;
    } else {
        input = e.target.innerHTML;
    }
    if (input === 'AC') {
        result = "";
    }
    else if (input === 'x') {
        result += '*';
    }
    else if (input === '<sup>+</sup><em>/</em><sub>-</sub>') {
        result = result * -1;
    }
    else if (input === '=') {
        try {
            result = eval(result);
        } catch (err) {
            result = "Invalid";
        }
    }
    else {
        result += input;
    }
    calculatorScreen.innerHTML = result;
}

for (let item of buttons) {
    item.addEventListener('click', display, false);
}