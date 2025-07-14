import gsap from 'gsap';

const header = document.querySelector('header');
const button = document.querySelector('.scroll-to-top');

let scrollToTopTween = null;

const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      /* Header is in the viewport */

      button.classList.remove('show');

      if (scrollToTopTween) {
        scrollToTopTween.kill();
        scrollToTopTween = null;
        gsap.set('.scroll-to-top', { y: 0 });
      }

    } else {
      /* Header is not in the viewport */
      button.classList.add('show')

      if (!scrollToTopTween) {
        scrollToTopTween = gsap.to('.scroll-to-top', {
          y: -8,
          duration: 0.5,
          repeat: -1,
          yoyo: true,
          ease: 'power2.out'
        });
      }
    }
  },
  {
    threshold: 0.1
  }
);

  

button.addEventListener('mouseenter', () => {
  gsap.to(button, {
    scale: 1.1,
    duration: 0.2,
  })
})

button.addEventListener('mouseleave', () => {
  gsap.to(button, {
    scale: 1,
    duration: 0.2,
  })
})

button.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

observer.observe(header);