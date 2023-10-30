
let casemenu = document.querySelector(".box_menu");
let menuOpenBtn = document.querySelector(".case_menu .bx-menu");
let menuClosdeBtn = document.querySelector(".box_menu .bx-x");
menuOpenBtn.onclick = function () {
  casemenu.style.left = "0";
};
menuClosdeBtn.onclick = function () {
  casemenu.style.left = "-100%";
};
