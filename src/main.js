import "./style.css";

const onScroll = () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const progress = max > 0 ? window.scrollY / max : 0;
  document.documentElement.style.setProperty("--scroll", String(progress));
};

const onPointerMove = (event) => {
  document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
  document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
};

onScroll();
const videos = Array.from(document.querySelectorAll(".project-media video"));
const videoObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const video = entry.target;
    if (entry.isIntersecting) video.play().catch(() => undefined);
    else video.pause();
  });
}, { threshold: 0.18 });

videos.forEach((video) => videoObserver.observe(video));
window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("pointermove", onPointerMove, { passive: true });
