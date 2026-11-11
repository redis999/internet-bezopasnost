function updateMobileEdges() {
  const maximumScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 0);
  const inMiddle = window.scrollY > 140 && window.scrollY < maximumScroll - 140;
  document.body.classList.toggle('mobile-edges-hidden', inMiddle);
}

document.addEventListener('DOMContentLoaded', updateMobileEdges);
window.addEventListener('scroll', updateMobileEdges, { passive: true });
window.addEventListener('resize', updateMobileEdges);
