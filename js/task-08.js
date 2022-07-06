const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  //let users = [];
  let user = {};

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  user.email = email.value;
  user.password = password.value;
  //users.push(user);

  //console.log(users);
  console.log(user);

  event.currentTarget.reset();
}
