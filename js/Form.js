const inputContainer = document.querySelectorAll(".form__input-container");
const form = document.querySelector(".form");
const patternEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
    const nameInput = e.target.querySelector(".form__input--navn");
    const mailInput = e.target.querySelector(".form__input--mail");

    if (nameInput.value.length >= 3 && patternEmail.test(mailInput.value)) {
        alert("form is valid, data can be send");
    } else {
        alert("form is not valid");
    }

    e.preventDefault();
}

inputContainer.forEach((inputContain) => {
    const span = inputContain.querySelector("span");
    const input = inputContain.querySelector("input");

    input.addEventListener("input", (e) => {
        const value = e.target.value;
        if (value >= 0) {
            span.classList.remove("uvisible");
        } else {
            span.classList.add("uvisible");
        }
    });
});
