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

const feedback = [0, 1, 2];
let i = 0;
const onChange = (value) => {
  if (value) i = i + 1;
  else i = i - 1;
  i = i % 3 < 0 ? 2 : i % 3;
  const rb = document.getElementsByClassName('review-border');
  const fp = document.getElementsByClassName('feedback-pagi');
  for (let y = 0; y < feedback.length; y++) {
    rb[y].classList = 'review-border';
    fp[y].classList = 'feedback-pagi';
  }
  rb[i].classList = 'review-border active';
  fp[i].classList = 'feedback-pagi active';
};
setInterval(() => {
  onChange(true);
}, 5000);
