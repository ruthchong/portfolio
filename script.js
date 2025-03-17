// Toggle mobile menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links li a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

document.addEventListener("DOMContentLoaded", function () {
    function handleScroll() {
        const aboutSection = document.querySelector(".about-section");
        const rect = aboutSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight * 0.75) {
            aboutSection.classList.add("show");
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 页面加载时检查一次
});



document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (i === index) {
                slide.classList.add("active");
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length; // 轮播
        showSlide(currentSlide);
    }

    // 设置初始显示
    showSlide(currentSlide);

    // 每 3 秒切换一次幻灯片
    setInterval(nextSlide, 3000);
});

document.addEventListener("DOMContentLoaded", function () {
    function handleScroll() {
        document.querySelectorAll(".menu-card").forEach((card) => {
            const rect = card.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight * 0.75) {
                card.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 页面加载时检查一次
});

function toggleDetails(id) {
    var details = document.getElementById(id);
    if (details.style.display === "none") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}

document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", function() {
        this.classList.toggle("zoomed");
    });
});

//幻灯片
let slideIndexes = [0, 0, 0]; // 每个幻灯片的索引
const slideContainers = document.querySelectorAll(".slideshow-container");

// 初始化所有幻灯片，并设置自动播放
slideContainers.forEach((container, index) => {
  showSlides(0, index);
  setInterval(() => plusSlides(1, index), 3000); // 每3秒自动播放
});

function plusSlides(n, slideshowIndex) {
  showSlides(slideIndexes[slideshowIndex] + n, slideshowIndex);
}

function showSlides(n, slideshowIndex) {
  let slides = slideContainers[slideshowIndex].getElementsByClassName("interior");

  if (n >= slides.length) {
    slideIndexes[slideshowIndex] = 0;
  } else if (n < 0) {
    slideIndexes[slideshowIndex] = slides.length - 1;
  } else {
    slideIndexes[slideshowIndex] = n;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndexes[slideshowIndex]].style.display = "block";
}

