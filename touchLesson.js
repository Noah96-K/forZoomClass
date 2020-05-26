const box = document.querySelector(".instruction__box");
const instruction = document.querySelector(".instruction");
const random = document.querySelector(".random");
const home = document.querySelector(".home");
const randomBox = document.querySelector(".random__box");
const touch = document.querySelector(".touch");
const randomPart = document.querySelector(".random_part");

const NO = "invisible";
const MEMBER = [
  "Noah",
  "TenTen",
  "Somi",
  "Rodrigo",

  "Vicky",
  "person6",
  "person7",
  "person8",
];
function handleClickedBox() {
  box.classList.add(NO);
  random.classList.remove(NO);
  home.classList.remove(NO);
  instruction.classList.remove(NO);
}

function handleClickedInstruction() {
  box.classList.remove(NO);
  random.classList.add(NO);
  home.classList.add(NO);
  instruction.classList.add(NO);
}

function handleClickedRandom() {
  random.classList.add(NO);
  home.classList.add(NO);
  instruction.classList.add(NO);
  randomBox.classList.remove(NO);
  touch.classList.remove(NO);
}

function handleClickedRandomBox() {
  randomBox.classList.add(NO);
  touch.classList.add(NO);
  random.classList.remove(NO);
  home.classList.remove(NO);
  instruction.classList.remove(NO);
}

function randomNum() {
  const num = Math.floor(Math.random() * MEMBER.length);
  return num;
}

function touchTouch() {
  const ranNum = randomNum();

  randomPart.innerHTML = `next week: ${MEMBER[ranNum]} 👨‍🏫`;
}
function printDe() {}

box.addEventListener("click", handleClickedBox);
instruction.addEventListener("click", handleClickedInstruction);
random.addEventListener("click", handleClickedRandom);
randomBox.addEventListener("click", handleClickedRandomBox);

touch.addEventListener("click", touchTouch);
