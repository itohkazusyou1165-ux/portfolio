<<<<<<< HEAD
// ==========================================
// 1. ハンバーガーメニューの機能
// ==========================================
const hamburgerBtn = document.querySelector("#js-hamburger"); 
const nav = document.querySelector("#js-nav"); 

// ボタンが存在する場合のみ実行
if (hamburgerBtn && nav) {
  hamburgerBtn.addEventListener("click", function () {
    this.classList.toggle("active"); // ボタンのアニメーション
    nav.classList.toggle("active");  // メニューの開閉
=======
// スクロールイベント

document.querySelector("#go-top").addEventListener("click", () => {
  scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
>>>>>>> b25c04ba409a35e50620f58d486043082512da64
  });

  // メニュー内のリンクをクリックしたら閉じる
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburgerBtn.classList.remove("active");
      nav.classList.remove("active");
    });
  });
}

// ==========================================
// 2. スクロールトップ機能
// ==========================================
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

// ==========================================
// 3. Intersection Observer (アニメーション)
// ==========================================
const options = {
  root: null,
  rootMargin: "0px 0px -10% 0px", // 画面の下10%くらいに来たら発火
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

// 監視する要素をまとめて指定（入れ子を解消）
const targets = document.querySelectorAll(
  ".career .history__item, .Myskill, .box, .vision-txt p, .vision-txt h2, .profile-area"
);

targets.forEach((el) => {
  observer.observe(el);
});