const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const style = document.createElement("style");
style.innerHTML = `
.nav-links.active{
    display:flex !important;
    flex-direction:column;
    position:absolute;
    top:70px;
    right:8%;
    background:white;
    padding:20px;
    border-radius:15px;
    box-shadow:0 15px 40px rgba(0,0,0,0.15);
    gap:15px;
}
`;
document.head.appendChild(style);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: "smooth"
            });
        }
    });
});

const counters = document.querySelectorAll(".counter");

const speed = 200;

counters.forEach(counter => {
    const animateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = target / speed;

        if (current < target) {
            counter.innerText = Math.ceil(current + increment);
            setTimeout(animateCounter, 20);
        } else {
            counter.innerText = target;
        }
    };

    animateCounter();
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(
    ".service-card, .department-card, .doctor-card, .review-card"
).forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});

const animStyle = document.createElement("style");
animStyle.innerHTML = `
.hidden{
    opacity:0;
    transform:translateY(40px);
    transition:all 0.6s ease;
}

.show{
    opacity:1;
    transform:translateY(0);
}
`;
document.head.appendChild(animStyle);

document.querySelectorAll("button, .book-btn, .primary-btn, .secondary-btn").forEach(btn => {
    btn.addEventListener("click", () => {

        btn.style.transform = "scale(0.95)";

        setTimeout(() => {
            btn.style.transform = "scale(1)";
        }, 150);

    });
});

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)";
    } else {
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.08)";
    }
});
const form = document.getElementById("loginForm");
const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");

togglePassword.addEventListener("click", () => {
    if (password.type === "password") {
        password.type = "text";
        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");
    } else {
        password.type = "password";
        togglePassword.classList.remove("fa-eye-slash");
        togglePassword.classList.add("fa-eye");
    }
});

form.addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const pass = password.value.trim();
    const role = document.getElementById("role").value;

    if(email === "" || pass === ""){
        alert("Please fill all fields");
        return;
    }

    if(pass.length < 4){
        alert("Password must be at least 4 characters");
        return;
    }

    if(role === "patient"){
        alert("Login successful as Patient");
        window.location.href = "patient-dashboard.html";
    }

    else if(role === "doctor"){
        alert("Login successful as Doctor");
        window.location.href = "doctor-dashboard.html";
    }

    else if(role === "admin"){
        alert("Login successful as Admin");
        window.location.href = "admin-dashboard.html";
    }
});

function goHome() {
    window.location.href = "index.html";
}

function goFindDoctor() {
    window.location.href = "search-doctor.html";
}

function goBookAppointment() {

    let isLoggedIn = localStorage.getItem("user");

    if (!isLoggedIn) {
        alert("Please login first to book appointment");
        window.location.href = "login.html";
    } else {
        window.location.href = "book-appointment.html";
    }
}

function searchDoctor() {

    let query = document.getElementById("searchInput").value.trim();

    if (query === "") {
        alert("Please enter doctor name or specialty");
        return;
    }

    localStorage.setItem("searchQuery", query);

    window.location.href = "search-doctor.html";
}