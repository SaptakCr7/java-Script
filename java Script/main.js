const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (nameInput.value === "" || emailInput.value === "") {
    showMessage("Please enter all fields");
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value}, ${emailInput.value}`)
    );

    userList.appendChild(li);

    nameInput.value = "";
    emailInput.value = "";
  }
}

function showMessage(message) {
  msg.classList.add("error");
  msg.innerHTML = message;
  setInterval(() => message, 2000);
}
