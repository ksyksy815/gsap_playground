import gsap from 'gsap';

const tabs = document.querySelectorAll(".tab");
const indicator = document.querySelector(".indicator");

let currentTab = 0

tabs.forEach((tab, i) => {
  tab.addEventListener('click', () => {
    if (currentTab === i) return;

    tab.classList.add('active')
    tabs[currentTab].classList.remove('active')

    gsap.to(indicator, {
      duration: 0.5,
      x: tab.offsetLeft,
      width: tab.offsetWidth,
      ease: "back.out"
    })
    
    currentTab = i;
  })
})