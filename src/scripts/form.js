const popupOrder = document.querySelector(".popup__order");
const closeBtnModal = document.querySelector(".btn-modal");
const formBtn = document.querySelector(".form__button");
const formMy = document.querySelector(".form");
const popupContentModal = document.querySelector(".popup__content-order");
const overlayOrder = document.querySelector(".overlay-order");

formBtn.addEventListener("click", e => {
  e.preventDefault();
  if (validateForm(formMy)) {
    const name = formMy.elements.name.value;
    const email = formMy.elements.email.value;
    const comment = formMy.elements.comment.value;
    const to = "i_chernyak@inbox.ru";
    var formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("comment", comment);
    formData.append("to", to);
    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("POST", "https://getform.io/f/2fef3c9e-fef6-4c37-9467-fd9bfa2178c8");
    xhr.send(formData);
    xhr.addEventListener("load", () => {
      popupOrder.style.display = "block";
      var _body = document.getElementsByTagName("body")[0];
      _body.style.overflow = "hidden";

      if (xhr.status >= 400) {
        popupContentModal.innerHTML = "Произошла ошибка " + xhr.status;
      } else {
        popupContentModal.innerHTML = "Письмо отправлено";
      }
    });
  }
});

closeBtnModal.addEventListener("click", e => {
  popupOrder.style.display = "none";
  var _body = document.getElementsByTagName("body")[0];
  _body.style.overflow = "visible";
});

overlayOrder.addEventListener("click", e => {
  if (e.target === overlayOrder) {
    popupOrder.style.display = "none";
    var _body = document.getElementsByTagName("body")[0];
    _body.style.overflow = "visible";
  }
});

function validateForm(formMy) {
  let valid = true;
  const errors = document.querySelectorAll(".error");
  const activeErrors = document.querySelectorAll(".form__block");

  if (!validateField(formMy.elements.name)) {
    valid = false;
    for (let error of errors) {
      error.style.display = "block";
    }
    for (let activeError of activeErrors) {
      activeError.classList.add("active");
    }
  } else {
    for (let error of errors) {
      error.style.display = "none";
    }
    for (let activeError of activeErrors) {
      activeError.classList.remove("active");
    }
  }
  if (!validateField(formMy.elements.email)) {
    valid = false;
    for (let error of errors) {
      error.style.display = "block";
    }
    for (let activeError of activeErrors) {
      activeError.classList.add("active");
    }
  } else {
    for (let error of errors) {
      error.style.display = "none";
    }
    for (let activeError of activeErrors) {
      activeError.classList.remove("active");
    }
  }

  return valid;
}

function validateField(field) {
  if (!field.checkValidity()) {
    field.nextElementSibling.textContent = field.validationMessage;
    return false;
  } else {
    field.nextElementSibling.textContent = "Поля Имя и email должны быть заполнены";
    return true;
  }
}