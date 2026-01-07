// Minimal interactivity: mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
if(toggle){
  toggle.addEventListener('click', ()=>{
    const nav = document.querySelector('.main-nav');
    if(nav.style.display === 'flex') nav.style.display = '';
    else nav.style.display = 'flex';
  });
}
// placeholder for future interactivity (filtering, project modal, etc.)
