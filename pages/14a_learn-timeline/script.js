import gsap from "gsap";

const tl = gsap.timeline({
  paused: true,
})

tl.fromTo(".box", {
  x: -300,
}, {
  x: 300,
  duration: 5
})


const playBtn = document.querySelector(".play-btn");
const pauseBtn = document.querySelector(".pause-btn");
const reverseBtn = document.querySelector(".reverse-btn");
const restartBtn = document.querySelector(".restart-btn");

playBtn.addEventListener("click", () => {
  tl.play();
})

pauseBtn.addEventListener("click", () => {
  tl.pause();
})

reverseBtn.addEventListener("click", () => {
  tl.reverse();
})

restartBtn.addEventListener("click", () => {
  tl.restart();
})