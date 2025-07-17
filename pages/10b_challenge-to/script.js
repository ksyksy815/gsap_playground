import gsap from 'gsap';

const toast1 = document.querySelector('.one');
const toast2 = document.querySelector('.two');

const hideToast = (toast) => {
  gsap.to(toast, {
    opacity: 0,
    bottom: 20,
    scale: 0.5,
    duration: 0.5,
    ease: 'power2.in',
    delay: 4,
  })
}

const animateToast = (toast, bottom) => {
        return {
          delay: 2,
          opacity: 1,
          bottom,
          duration: 0.5,
          ease: 'power2.out',
          onComplete: () => hideToast(toast)
        }
      }

const showToast = () => {
  gsap.to('.one', {
    opacity: 1,
    bottom: 10,
    duration: 0.5,
    ease: 'power2.out',
    onComplete: () => {
      hideToast(toast1)
      gsap.to(toast2,animateToast(toast2, 50))
      gsap.to(toast1, animateToast(toast1, 120))
    },
  })
}

showToast()
