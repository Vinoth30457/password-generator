"use strict";

const outputEl = document.getElementById("output");
const copyBtn = document.getElementById("clipboard");
const inputEl = document.getElementById("count");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const formEl = document.getElementById("card");

//init

let input;
let small = "";
let cap = "";
let num = "";
let symbol = "";
let pass;

const init = () => {
  input = 20;
  inputEl.value = input;
  small = "";
  cap = "";
  num = "";
  symbol = "";
  pass = "";
  uppercaseEl.checked = false;
  lowercaseEl.checked = false;
  numbersEl.checked = false;
  symbolsEl.checked = false;
};
//functions

const randomPassword = () => {
  if (uppercaseEl.checked === true) {
    cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else {
    cap = "";
  }
  if (lowercaseEl.checked === true) {
    small = "abcdefghijklmnopqrstuvwxyz";
  } else {
    small = "";
  }
  if (numbersEl.checked === true) {
    num = "0123456789";
  } else {
    num = "";
  }
  if (symbolsEl.checked === true) {
    symbol = "@#$%&*()!,.[]{}*/-+";
  } else {
    symbol = "";
  }
  input = inputEl.value;
  pass = "";
  let str = cap + small + num + symbol;

  for (let i = 1; i <= input; i++) {
    let char = Math.floor(Math.random() * str.length + 1);
    pass += str.charAt(char);
  }
  outputEl.value = pass;
};

//events

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  randomPassword();
});
copyBtn.addEventListener("click", () => {
  outputEl.select();
  outputEl.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(outputEl.value);

  alert("Password copied to clipboard!");
});

init();
