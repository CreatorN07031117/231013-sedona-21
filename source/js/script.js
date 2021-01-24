var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

var button = document.querySelector(".feedback-finish__button");
var successPopup = document.querySelector(".feedback-success-pop-up");
var failurePopup = document.querySelector(".feedback-failure-pop-up");
var form = document.querySelector(".feedback-form__form");
var firstname = document.querySelector("[name=first-name]");
var lastname = document.querySelector("[name=last-name]");
var phone = document.querySelector("[name=phone]");
var email = document.querySelector("[name=email]");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("форма отправлена");
    successPopup.classList.remove("feedback-success-pop-up--hide");
    successPopup.classList.remove("feedback-success-pop-up--show");
});

button.addEventListener("click", function() {
  if (!firstname.value || !lastname.value || !phone.value || !email.value) {
    console.log("форма не отправлена");
    failurePopup.classList.remove("feedback-failure-pop-up--hide");
    failurePopup.classList.add("feedback-failure-pop-up--show");
  }
});

var failureCloseBtn = document.querySelector(".feedback-failure-pop-up__button");
var successCloseBtn = document.querySelector(".feedback-success-pop-up__button");

failureCloseBtn.addEventListener("click", function() {
  failurePopup.classList.add("feedback-failure-pop-up--hide");
  failurePopup.classList.remove("feedback-failure-pop-up--show");
});

successCloseBtn.addEventListener("click", function() {
  successPopup.classList.add("feedback-success-pop-up--hide");
  successPopup.classList.remove("feedback-success-pop-up--show");
});
