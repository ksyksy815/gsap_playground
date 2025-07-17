import gsap from 'gsap';

const toast = document.querySelector('.toast');

const showToastLoop = () => {
  gsap.to(toast, {
    y: -120,
    opacity: 1,
    scale: 1,
    duration: 0.8,
    ease: 'power4.out',
    onComplete: () => {
      gsap.to(toast, {
        delay: 2.5,
        y: 0,
        opacity: 0,
        scale: 0.95,
        duration: 0.5,
        ease: 'power2.in',
        onComplete: () => {
          setTimeout(showToastLoop, 2500)
        }
      })
    }
  })
}

const animateBox = () => {
  gsap.to('.box', {
    x: 400,
    opacity: 0,
    rotate: 360,
    duration: 2,
    ease: 'power2.inOut',
    yoyo: true,
    repeat: -1,
  })
}

showToastLoop()
animateBox()