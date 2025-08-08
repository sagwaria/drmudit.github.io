// small JS: current year and basic form feedback
document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', e=>{
    // show a simple message — Formspree will handle the submission
    alert('Thanks! Your message is being sent.');
  });
}
