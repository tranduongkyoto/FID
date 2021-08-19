// đóng menu mobile khi màn to
window.onresize = reportWindowSize;
function reportWindowSize() {
  let width = window.innerWidth;
  if (width > 1024)
    document.querySelector('.board-menu-mobile').classList.remove('clicked');
}

// bắt sự kiện toggle icon mobile
var iconTogle = document.querySelector('.navbar-toggler');
var menuMobile = document.querySelector('.board-menu-mobile');
iconTogle.onclick = function () {
  onClickTogleMenu();
};

function onClickTogleMenu() {
  menuMobile.classList.toggle('clicked');
}
