// Toggle mobile menu
function toggleMenu() {
  var nav = document.querySelector('nav');
  nav.classList.toggle('active');
}
//slider
var slides = document.querySelectorAll(".slide");
var leftBtn = document.querySelector(".slide-arrow.left");
var rightBtn = document.querySelector(".slide-arrow.right");
var caption = document.getElementById("slide-caption");
var index = 0;

function showSlide(i) {
  // Remove active from all slides
  slides.forEach((slide) => slide.classList.remove("active"));

  // Fade out caption
  caption.classList.remove("show");

  setTimeout(() => {
    // Activate current slide
    slides[i].classList.add("active");

    // Update and fade in caption
    caption.textContent = slides[i].getAttribute("data-caption");
    caption.classList.add("show");
  }, 300); // Delay syncs with caption fade
}

if (leftBtn && rightBtn) {
  leftBtn.addEventListener("click", function () {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  });

  rightBtn.addEventListener("click", function () {
    index = (index + 1) % slides.length;
    showSlide(index);
  });
}

// Initial call
window.addEventListener("DOMContentLoaded", () => {
  showSlide(index);
});
// SERVICE SLIDER 

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".text-carousel .text-slide");
  const prevBtn = document.getElementById("text-prev");
  const nextBtn = document.getElementById("text-next");

  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
  }

  prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  showSlide(currentSlide);
});


// Global Page transition

document.addEventListener("DOMContentLoaded", () => {
  const logoWrapper = document.querySelector(".transition-logo-wrapper");
  const overlay = document.getElementById("transition-overlay");

  // Fade in page + fade out overlay/logo
  requestAnimationFrame(() => {
    document.body.classList.add("fade-in");
    if (overlay) {
      overlay.style.transition = "opacity 0.5s ease-in-out";
      overlay.style.opacity = "0";
      overlay.style.pointerEvents = "none";
    }

    if (logoWrapper) {
      logoWrapper.style.animation = "fadeOutLogo 0.5s ease-in 0.5s forwards";
    }
  });

  // Handle link click transitions
  const links = document.querySelectorAll("a[href]");
  links.forEach(link => {
    const href = link.getAttribute("href");
    if (
      href &&
      !href.startsWith("#") &&
      !href.startsWith("http") &&
      !link.hasAttribute("download") &&
      !link.getAttribute("target")
    ) {
      link.addEventListener("click", e => {
        e.preventDefault();

        document.body.classList.remove("fade-in");
        document.body.classList.add("fade-out");

        if (logoWrapper) {
          logoWrapper.style.opacity = "1";
          logoWrapper.style.animation = "none"; // Reset
          void logoWrapper.offsetWidth;         // Force reflow
          logoWrapper.style.animation = "fadeOutLogo 0.5s ease-in 0.5s forwards";
        }

        setTimeout(() => {
          window.location.href = href;
        }, 500); // match CSS duration
      });
    }
  });
});

// === Modal Zoom Logic ===
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const zoomSlides = document.querySelectorAll(".slide");

zoomSlides.forEach(slide => {
  slide.style.cursor = "zoom-in";
  slide.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = slide.src;
  });
});

function closeModal() {
  modal.style.display = "none";
}

//THANKS / ERROR ON MESSAGE

 document.getElementById("contact-form").addEventListener("submit", async function (e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const messageDiv = document.getElementById("status-message");

    try {
      const res = await fetch("https://formspree.io/f/mvgadeev", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (res.ok) {
        form.reset(); // Clear the form
        messageDiv.textContent = "Thanks for your inquiry! We’ll contact you soon.";
        messageDiv.style.color = "green";

        // Optional: fade out message after a few seconds
        setTimeout(() => {
          messageDiv.textContent = "";
        }, 5000);
      } else {
        throw new Error("Submission failed.");
      }
    } catch (err) {
      messageDiv.textContent = "Oops! Something went wrong.";
      messageDiv.style.color = "red";
    }
  });

// Close modal on background click THIS KEEPS BREAKING 
 //function closeModal(e) {
  // ✅ Only close if the click target is the background or the X
  //if (e.target.id === "image-modal" || e.target.classList.contains("modal-close")) {
  //  modal.style.display = 'none';
  //  modalImg.src = '';
  //}
//}