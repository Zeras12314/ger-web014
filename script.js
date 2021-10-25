const input = document.querySelector("input");
const button = document.querySelector("button");
const message = document.querySelector("small");

button.addEventListener("click", function () {
  let value = input.value;
  if (validate() === true && value != "") {
    alert("Email Submitted! 🥳🥳🥳");
    message.innerHTML = null;
    message.classList.remove("message");
    input.classList.remove("error");
  }

  if (validate() === false) {
    message.innerHTML = "Please provide a valid email";
    message.classList.add("message");
    input.classList.add("error");
  }

  if (value === "") {
    message.innerHTML = "Email cannot be empty";
    message.classList.add("message");
    input.classList.add("error");
  }

  //   } else {
  //     message.innerHTML = null;
  //     message.classList.remove("message");
  //     input.classList.remove("error");
  //     alert("Email Submitted!");
  //   }
});

function validate() {
  let value = input.value;
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (value.match(pattern)) return true;
  else return false;
}
