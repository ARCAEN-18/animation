gsap.registerPlugin(ScrollTrigger);

gsap.from(".title", {
  opacity: 0,
  y: 50,
  duration: 1
});

gsap.to(".stat", {
  opacity: 1,
  y: -10,
  stagger: 0.3,
  delay: 0.5,
  duration: 0.8
});

gsap.to(".car", {
  x: 300,
  y: 150,
  scale: 1.2,
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});
gsap.from(".car", {
  opacity: 0,
  scale: 0.8,
  duration: 1,
  delay: 0.3
});