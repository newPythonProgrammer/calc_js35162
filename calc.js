"use strict";
let tg = window.Telegram.WebApp;
tg.expand();

let input = document.form.textview;

function insert(num) {
    if (input.value=='error') {
        input.value = num;
        return
    }
    input.value = input.value + num;
}

function clean() {
    input.value = "";
}

function back() {
    let exp = input.value;
    input.value = exp.substring(0, exp.length-1);
}
        
function equal() {
    let exp = input.value;
    if (exp) {
        try {
        input.value = eval(exp);
        } catch {
            input.value = 'error'
        }
    }
}

const toggle = document.getElementById('theme-switch');
const body = document.body;

// загружаем тему из localStorage
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  toggle.checked = true;
} else {
  body.classList.add('light');
}

// переключение темы
toggle.addEventListener('change', () => {
  if (toggle.checked) {
    body.classList.remove('light');
    body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark');
    body.classList.add('light');
    localStorage.setItem('theme', 'light');
  }
});
