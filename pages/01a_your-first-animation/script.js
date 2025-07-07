gsap.to('.card', {
  opacity: 1,
  scale: 1,
  duration: 5, // seconds
  onComplete: () => {
    // what to do when the animation is done
    gsap.to('.card', {
      y: -20, // y-axis, number of pixels
      repeat: -1, // repeat indefinitely
      yoyo: true, // come back and forth
      duration: 0.5, // seconds
    })
  }
})