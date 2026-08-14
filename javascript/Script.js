function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

const shopBtn = document.getElementById("shopBtn");
const frist = document.querySelector(".frist");
const second = document.querySelector(".second");
const backbtn = document.getElementById("backBtn");

shopBtn.addEventListener("click", () => {
  frist.style.display = "none";
  second.style.display = "flex";
  backbtn.style.display = "flex";
});
;

backbtn.addEventListener("click", () => {
  frist.style.display = "flex";
  second.style.display = "none";
  backbtn.style.display = "none";
})