document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
});

reveals.forEach(reveal => {
    observer.observe(reveal);
});
function confirmDownload(event) {
  event.preventDefault();

  Swal.fire({
    title: 'Download CV?',
    text: 'Do you want to open this CV and download it?',
    iconHtml: '<img src="https://cdn-icons-png.flaticon.com/512/942/942748.png" width="60">',
    customClass: {
      popup: 'animate__animated animate__fadeInDown',
    },
    background: '#2c2c2c',
    color: '#ffffff',
    showCancelButton: true,
    confirmButtonColor: '#00c853',
    cancelButtonColor: '#d32f2f',
    confirmButtonText: 'Yes, open it',
    cancelButtonText: 'No',
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    backdrop: true
  }).then((result) => {
    if (result.isConfirmed) {
      window.open("https://drive.google.com/file/d/1P_oMNDMXFGIgUpKB54ywouFBrlVdxqcQ/preview", "_blank");
    }
  });
}

const express = require('express');
const app = express();
const port = 3000;

const apiKey = process.env.API_KEY; 

app.get('/api/data', (req, res) => {
  res.json({ message: 'Here is your protected data.' });
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
