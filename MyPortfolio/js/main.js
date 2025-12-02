// typed headline
document.addEventListener('DOMContentLoaded', function(){
  if(window.Typed){
    new Typed('.typed-line', {
      strings: ['AI & Embedded Developer', 'Full-stack Web Creator', 'Robotics Enthusiast', 'Problem Solver'],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
      backDelay: 1400
    });
  }

  // subtle staggered entrance with GSAP
  if(window.gsap){
    gsap.from('.hero-left h1', {y:20, opacity:0, duration:0.7, ease:'power3.out'});
    gsap.from('.hero-left .lead', {y:20, opacity:0, duration:0.7, delay:0.15});
    gsap.from('.profile-card', {scale:0.96, opacity:0, duration:0.7, delay:0.25});
    gsap.from('.highlights .glass', {y:20, opacity:0, duration:0.6, stagger:0.12, delay:0.35});
  }

  // floating small animation for profile card
  const profile = document.querySelector('.profile-card');
  if(profile && window.gsap){
    gsap.to(profile, {y:6, duration:2.2, repeat:-1, yoyo:true, ease:'sine.inOut'});
  }
});

// contact form (static)
function handleSubmit(e){
  e.preventDefault();
  const form = e.target;
  const name = form.name.value;
  const email = form.email.value;
  const message = form.message.value;
  // Temporary client-side feedback
  alert('Thanks, ' + name + '! Your message has been recorded locally. Replace this form action with a backend or EmailJS to receive messages.');
  form.reset();
  return false;
}
