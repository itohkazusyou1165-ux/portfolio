//  ハンバーガーメニューの機能

const hamburgerBtn = document.querySelector("#js-hamburger");
const nav = document.querySelector("#js-nav");

// ボタンが存在する場合のみ実行
if (hamburgerBtn && nav) {
  hamburgerBtn.addEventListener("click", function () {
    this.classList.toggle("active");
    nav.classList.toggle("active");
  });

  // メニュー内のリンクをクリックしたら閉じる
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburgerBtn.classList.remove("active");
      nav.classList.remove("active");
    });
  });
}

//  スクロールトップ機能

const goTopBtn = document.querySelector("#go-top");
if (goTopBtn) {
  goTopBtn.addEventListener("click", () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
}

//. Intersection Observer

const options = {
  root: null,
  rootMargin: "0px 0px -10% 0px",
  threshold: 0,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("anim");
    } else {
      entry.target.classList.remove("anim");
    }
  });
}, options);

// 監視する要素をまとめて指定
const targets = document.querySelectorAll(
  ".career .history__item, .Myskill, .box, .vision-txt p, .vision-txt h2, .profile-area"
);

targets.forEach((el) => {
  observer.observe(el);
});
