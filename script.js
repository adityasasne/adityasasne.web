const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "01";
const fontSize = 14;
const columns = canvas.width / fontSize;

const drops = new Array(Math.floor(columns)).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0F0";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(drawMatrix, 33);


// Add to script.js (after matrix animation)
// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  // Simple validation
  if (!name || !email || !message) {
    alert('Please fill in all fields');
    return;
  }
  
  // Here you would normally send the data to a server
  // For now, we'll just show a confirmation
  alert(`Thanks for your message, ${name}! I'll contact you at ${email} soon.`);
  
  // Reset form
  this.reset();
});


// Add to script.js (after matrix animation)
// Certification card animation
document.querySelectorAll('.cert-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.zIndex = '10';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.zIndex = '1';
  });
});


// Add to script.js (after existing code)
// Certificate Modal Functionality
const modal = document.getElementById("certModal");
const certImage = document.getElementById("certImage");
const certTitle = document.getElementById("certTitle");
const certDescription = document.getElementById("certDescription");
const certYear = document.getElementById("certYear");
const closeBtn = document.querySelector(".close-btn");

// Certificate data (replace with actual image paths)
const certificates = {
  oscp: {
    img: "certs/oscp.jpg",
    title: "OSCP",
    description: "Offensive Security Certified Professional",
    year: "2024"
  },
  ceh: {
    img: "certs.jpg",
    title: "CEH",
    description: "Certified Ethical Hacker",
    year: "2023"
  },
  securityplus: {
    img: "certs/securityplus.jpg",
    title: "CompTIA Security+",
    description: "Security Certification",
    year: "2023"
  },
  ejpt: {
    img: "certs/ejpt.jpg",
    title: "eJPT",
    description: "eLearnSecurity Junior Penetration Tester",
    year: "2022"
  },
  crtp: {
    img: "certs/crtp.jpg",
    title: "CRTP",
    description: "Certified Red Team Professional",
    year: "2023"
  }
};

// Open modal when View Certificate button is clicked
document.querySelectorAll(".view-cert-btn").forEach(button => {
  button.addEventListener("click", function() {
    const certCard = this.closest(".cert-card");
    const certId = certCard.getAttribute("data-cert");
    const certData = certificates[certId];
    
    certImage.src = certData.img;
    certImage.alt = `${certData.title} Certificate`;
    certTitle.textContent = certData.title;
    certDescription.textContent = certData.description;
    certYear.textContent = `Year: ${certData.year}`;
    
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent scrolling
  });
});

// Close modal when X is clicked
closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // Enable scrolling
});

// Close modal when clicking outside content
window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

// Close modal with ESC key
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape" && modal.style.display === "block") {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});