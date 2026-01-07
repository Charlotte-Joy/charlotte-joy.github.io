// Simple UI helpers for the static prototype

document.getElementById('year').textContent = new Date().getFullYear();

function showComingSoon(){
  alert('This is a design prototype. Upload and MP3 generation will be available in a future release.');
}

function signupNotify(e){
  e.preventDefault();
  const email = document.getElementById('email').value;
  if(!email) return alert('Enter your email to be notified');
  alert('Thanks! We will notify ' + email + ' when early access is open.');
  e.target.reset();
}