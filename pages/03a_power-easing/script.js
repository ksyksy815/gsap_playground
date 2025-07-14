import gsap from 'gsap'

const btn = document.querySelector('.btn')
const toast = document.querySelector('.toast')
const card = document.querySelector('.card')

/*
power1 - gentle
pwoer2 - medium
power3 - strong
power4 - aggressive
*/

gsap.to(btn, {
  y: -20,
  duration: 0.4,
  ease: "power4.out",
  repeat: -1,
  yoyo: true,
})

gsap.from(toast, {
  y: -50,
  duration: 1.2,
  ease: "power2.out",
})

gsap.from(card, {
  scale: 0.5,
  opacity: 0,
  duration: 1,
  ease: "power3.inOut",
})
