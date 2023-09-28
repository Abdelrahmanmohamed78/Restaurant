let scrollBtn = document.querySelector(".scrollToTop");
window.onscroll = function () {
  if (window.scrollY >= 300) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
}
scrollBtn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  })
}





