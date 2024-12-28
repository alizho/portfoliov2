/***********************************
Cursor
************************************/

let curs = document.querySelector(".cursor");

document.addEventListener("DOMContentLoaded", cursor);
document.body.addEventListener("mousemove", cursor);
document.body.addEventListener("mouseenter", cursor);

if (sessionStorage.getItem("cursorX") && sessionStorage.getItem("cursorY")) {
  mouseX = sessionStorage.getItem("cursorX");
  mouseY = sessionStorage.getItem("cursorY");
  curs.style.left = mouseX - 15 + "px";
  curs.style.top = mouseY - 15 + "px";
}

function cursor(e) {

  const mouseX = e.clientX;
  const mouseY = e.clientY;

  sessionStorage.setItem("cursorX", mouseX);
  sessionStorage.setItem("cursorY", mouseY);

  gsap.to(".shape", {
    x: mouseX - 20,
    y: mouseY - 73,
    stagger: -0.1 });

}

document.addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;
  curs.style.left = x - 15 + "px";
  curs.style.top = y - 15 + "px";
}); 

let menuEls = document.querySelectorAll(".nav-title a, #logo-codepen");
menuEls.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    fadeTimeout = setTimeout(() => {
      curs.classList.add("cursor-fade");
    }, 300);
 });

 el.addEventListener("mouseleave", () => {
  clearTimeout(fadeTimeout);
  curs.classList.remove("cursor-fade");
 });
});