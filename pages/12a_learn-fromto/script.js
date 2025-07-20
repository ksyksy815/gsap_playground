import gsap from 'gsap';

const bars = document.querySelectorAll('.bar');

bars.forEach((bar, i) => {
  gsap.fromTo(bar, {
    scaleY: 0.2,
  }, {
    scaleY: 1.6,
    duration: 0.6,
    ease: 'sign.inOut',
    yoyo: true,
    repeat: -1,
    delay: i * 0.1,
  })
})