var login = null;
var register = null;
var recovery = null;
var input = null;
var backLoginButton = null;
var recoveryButton = null;
var registerButton = null;
$(document).ready(function () {
  login = $(".login");
  register = $(".register");
  recovery = $(".recovery");
  input = $(".form__input");
  backLoginButton = $(".buttons__back-login");
  recoveryButton = $(".buttons__recovery");
  registerButton = $(".submit-button--register");

  // Фокус и блюр input
  input.on("focus", function () {
    let selectInput = $(this);
    let selectIcon = selectInput.siblings();
    selectInput.addClass("form__input--active");
    selectIcon.addClass("form__icon--active");
  });
  input.on("blur", function () {
    let selectInput = $(this);
    let selectIcon = selectInput.siblings();
    selectInput.removeClass("form__input--active");
    selectIcon.removeClass("form__icon--active");
  });

  backLoginButton.on("click", function () {
    if (register.hasClass("register--show")) {
      register.removeClass("register--show");
      login.addClass("login--show");
    }
    if (recovery.hasClass("recovery--show")) {
      recovery.removeClass("recovery--show");
      login.addClass("login--show");
    }
  });
  recoveryButton.on("click", function () {
    login.removeClass("login--show");
    recovery.addClass("recovery--show");
  });
  registerButton.on("click", function () {
    login.removeClass("login--show");
    register.addClass("register--show");
  });
});
