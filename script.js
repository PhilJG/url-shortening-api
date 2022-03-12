"use strict";

const inputField = document.querySelector(".shorten__input--field");
const shortenBtn = document.querySelector(".shorten__input--btn");

const inputValue = inputField.value;

const shortenURL = function () {
  fetch(`https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html`)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(`This is your problem... ${err}`));
};

shortenBtn.addEventListener("click", shortenURL);
