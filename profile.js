function validation() {
  const users = {
    "girirajsg1012@gmail.com": "giriraj",
    "mmanjunath7017@gmail.com": "manjunath",
  };
  const email = document.getElementById(email).value;
  const password = document.getElementById(password).value;

  if (users[email] && users[email] === password) {
    console.log("success");
  } else {
    console.log("incorrect");
  }
}
