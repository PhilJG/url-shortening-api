"use strict";

const inputSection = document.querySelector(".shorten__input");
const inputField = document.querySelector(".shorten__input--field");
const shortenBtn = document.querySelector(".shorten__input--btn");

const shortenOutput = document.querySelector(".shorten__output");

let inputValue = inputField.value;

console.log(inputSection);

const renderLink = function (fullLink, shortLink) {
  const html = `<div class="shorten__output">
        <div class="shorten__output--card">
          <div class="shorten__output--orignal">${fullLink}</div>
          <hr>
          <div class="shorten__output--short">${shortLink}</div>
          <button class="copy">Copy</button>
        </div>
      </div>`;
  console.log(html);
  inputSection.insertAdjacentHTML("afterend", html);
};

const shortenURL = function (input) {
  fetch(`https://api.shrtco.de/v2/shorten?url=${input}/very/long/link.html`)
    .then((res) => res.json())
    .then(function (data) {
      renderLink(`${inputField.value}`, `${data.result.full_short_link}`);
      console.log(data);
    })
    .catch((err) => console.error(`This is your problem... ${err}`));

  console.log(inputField.value);
};

shortenBtn.addEventListener("click", shortenURL(`${inputValue}`));
