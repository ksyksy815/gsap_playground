import gsap from 'gsap';

const buttons = document.querySelectorAll('.reactions button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const emoji = button.dataset.emoji
    const bubble = document.createElement('span');
    
    bubble.textContent = emoji;
    
    bubble.classList.add('bubble');

    button.appendChild(bubble);

    gsap.fromTo(button, {
      y: 20,
    }, {
      y: 0,
      ease: 'power2.out',
      duration: 0.2,
    })

    gsap.fromTo(bubble, {
      width: 28,
      height: 42,
      opacity: 0.8,
      fontSize: 28,
      userSelect: 'none',
      scale: 0.9,
      left: 0,
      top: 0,
    }, {
      y: -40,
      scale: 0.5,
      ease: 'power1.out',
      duration: 1.5,
      rotateY: 360,
      transformOrigin: "center center",
      opacity: 0,
      onComplete: () => {
        bubble.remove()
      }
    })
  })
})