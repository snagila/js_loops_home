// ===========break and continue============
const breakExplain = document.getElementById("break-explain");
const continueExplain = document.getElementById("continue-explain");
const button1 = document.getElementById("button1").innerText;
const button2 = document.getElementById("button2").innerText;
let display = 0;

breakExplain.style.display = "none";
continueExplain.style.display = "none";

function onclick() {
  if (button1 === "Break") {
    breakExplain.style.display = "block";
    return;
  } else {
    breakExplain.style.display = "none";
  }
}
