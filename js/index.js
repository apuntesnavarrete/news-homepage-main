let buttonOpen = document.getElementById("button_menu");
let buttonClose = document.getElementById("menu_close");

let menu = document.getElementById("menu");

buttonClose.addEventListener("click", menuClose);

buttonOpen.addEventListener("click", menuOPen);

function menuOPen() {
  console.log("click de apertura");
  menu.style.transition = "all 1s";

  menu.style.top = "0";
}

function menuClose() {
  console.log("click de cierre");
  menu.style.top = "-100%";
}
