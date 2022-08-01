"use strict";

const forms = document.querySelector(".login-form");

let submitControl=(event)=> {
event.preventDefault();
const {
    elements: { email, password },
} = event.currentTarget;
if (email.value === "" || password.value === "") {
    return alert(`Заполните, пожалуйста, email и пароль`);
}
    
    const registrationData = {
      email: forms.elements.email.value,
      password: forms.elements.password.value,
    };
console.log(registrationData);
    
  event.currentTarget.reset();
};
forms.addEventListener("submit", submitControl);


