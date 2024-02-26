//your JS code here. If required.
let allCircle = document.getElementsByClassName("circle");
let size = allCircle.length;
let current = 0;
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

function moveForward() {
  if (current == size - 1) return;
  if (prevButton.hasAttribute("disabled")) {
    prevButton.removeAttribute("disabled");
  }
  let activeCircle = allCircle[current++].classList.remove("active");
  let newCircle = allCircle[current].classList.add("active");
  if (current == size - 1) {
    nextButton.setAttribute("disabled", "");
  }
}

function moveBackward() {
  if (current == 0) return;
  if (nextButton.hasAttribute("disabled")) {
    nextButton.removeAttribute("disabled");
  }
  let activeCircle = allCircle[current--].classList.remove("active");
  let newCircle = allCircle[current].classList.add("active");
  if (current == 0) {
    prevButton.setAttribute("disabled", "");
  }
}
