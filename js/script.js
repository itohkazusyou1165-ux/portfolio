// スクロールイベント

document.querySelector("#go-top").addEventListener("click", () => {
  scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

//Intersection Observer
const options = {
  root: null,
  rootMargin: "0px 0px -10% 0px",
  threshold: 0.2,
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

document.querySelectorAll(".career .history__item").forEach((el) => {
  observer.observe(el);
  document.querySelectorAll(".Myskill").forEach((el) => {
    observer.observe(el);
    document.querySelectorAll(".box").forEach((el) => {
      observer.observe(el);
      document.querySelectorAll(".vision-txt p").forEach((el) => {
        observer.observe(el);
        document.querySelectorAll(".vision-txt h2").forEach((el) => {
          observer.observe(el);
          document.querySelectorAll(".profile-area").forEach((el) => {
            observer.observe(el);
          });
        });
      });
    });
  });
});
