import gsap from 'gsap';

gsap.to('.box', {
  //y: -200, // pixels
  opacity: 1,
  rotation: 360, // degrees
  background: '#ff6f61',
  borderRadius: '50%',
  scale: 1,
  duration: 2,
  delay: 0.5, // time to wait before starting the animation
  ease: 'bounce', // control how these diffent properties change over time
  //repeat: -1,
  //yoyo: true, // makes the animation reverse back to the start
  //repeatDelay: 2, // delay between each repeat cycle. In seconds
  paused: true, // pause the animation
  stagger: 1
})