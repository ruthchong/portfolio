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

