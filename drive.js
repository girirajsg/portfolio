// let RideButton = document.getElementById("#buton");
// RideButton.onclick = function () {
//   console.log("please registaer");
// };

function RideButton() {
  alert("Kindly Regiter");
}

let myButton = document.querySelector("#bk1");
myButton.onclick = () => {
  console.log("Your Vehicle is on the way");
};

let myButton2 = document.querySelector("#bk2");
myButton2.onclick = () => {
  console.log("Your Vehicle is on the way");
};

let myButton3 = document.querySelector("#bk3");
myButton3.onclick = () => {
  alert("Your Vehicle is on the way kindly wait");
};

let search = document.querySelector(".search");
let searches = "banglore,Dharwad";
search.addEventListener("search", () => {
  if (search === "banglore" || "dharwad") {
    alert("success");
  } else {
    console.log("invalid");
  }
});

let input1 = document.querySelector("input");
input1.addEventListener("click", () => {
  document.querySelector("input").style.border = "2px solid red";
});

let modeBtn = document.querySelector("#mode-btn");
let currmode = "light";
modeBtn.addEventListener("click", () => {
  if (currmode === "light") {
    currmode = "dark";
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("body").style.color = "white";
  } else {
    currmode = "dark";
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector("body").style.color = "black";
  }
});

let items = ["action", "another action", "dfghjkl"];

let btn = document.getElementById("#dropdownMenuButton");
btn.addEventListener("click", () => {
  console.log("items", items);
});
