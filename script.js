// Light/Dark toggle
document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");
});

// Subscribe button
document.getElementById("subscribeBtn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  if (!email) { alert("Please enter your email"); return; }
  alert("Subscribed: " + email);
  document.getElementById("email").value = "";
});

// Portfolio filter
const filterBtns = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".card");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;
    cards.forEach(card => {
      if (filter === "all" || card.dataset.cat === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Search
document.getElementById("search").addEventListener("input", e => {
  const q = e.target.value.toLowerCase();
  cards.forEach(card => {
    const title = card.querySelector(".title").textContent.toLowerCase();
    card.style.display = title.includes(q) ? "block" : "none";
  });
});

// Lightbox
const lightbox = document.getElementById("lightbox");
const lbFrame = document.getElementById("lbFrame");
const lbClose = document.getElementById("lbClose");

cards.forEach(card => {
  card.addEventListener("click", () => {
    const url = card.dataset.video + "?autoplay=1";
    lbFrame.src = url;
    lightbox.classList.remove("hidden");
  });
});

lbClose.addEventListener("click", () => {
  lightbox.classList.add("hidden");
  lbFrame.src = "";
});

const form = document.getElementById('contactForm');
const thankYou = document.getElementById('thankYouMsg');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent default redirect
  const formData = new FormData(form);

  fetch('https://docs.google.com/forms/d/e/1FAIpQLScmDT6APjHC2PIw2YZ4tMwF3Bq-5VObmJ1tymPzGJJP3Al1pg/formResponse', {
    method: 'POST',
    mode: 'no-cors',
    body: formData
  }).then(() => {
    thankYou.style.display = 'block'; // Show Thank You
    form.reset(); // Clear form
  }).catch((err) => {
    console.error(err);
  });
});

const subscribeBtn = document.getElementById('subscribeBtn');
const subscribeEmail = document.getElementById('subscribeEmail');
const subscribeMsg = document.getElementById('subscribeMsg');

subscribeBtn.addEventListener('click', function() {
  const email = subscribeEmail.value.trim();
  if(email === '') return alert('Please enter your email.');

  const formData = new FormData();
  
  // Use the actual Entry ID from your Google Form
  formData.append('entry.2081014100', email); 
  
  // Use your actual Form ID
  fetch('https://docs.google.com/forms/d/e/1FAIpQLScDjDRFXByIHUYap18cwyrLSlYz11ecC2tqXiz3gJKPe-bMFA/formResponse', {
    method: 'POST',
    mode: 'no-cors',
    body: formData
  }).then(() => {
    subscribeMsg.style.display = 'block'; // Show Thank You
    subscribeEmail.value = ''; // Clear input
  }).catch(err => console.error(err));
});
