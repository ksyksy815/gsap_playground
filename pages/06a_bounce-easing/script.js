import gsap from 'gsap';


const ball = document.querySelector('.ball');

gsap.to(ball, {
  y: 300,
  ease: 'bounce.out',
  duration: 2,
})