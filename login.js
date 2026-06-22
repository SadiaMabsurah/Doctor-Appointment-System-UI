const form = document.getElementById("loginForm");
const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {
    if (password.type === "password") {
        password.type = "text";
        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");
    } else {
        password.type = "password";
        togglePassword.classList.add("fa-eye");
        togglePassword.classList.remove("fa-eye-slash");
    }
});

form.addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const pass = password.value.trim();

    if(email === "" || pass === ""){
        alert("Please fill all fields");
        return;
    }

    localStorage.setItem("user", "loggedIn");
    localStorage.setItem("role", "patient");

    alert("Login Successful");

    window.location.href = "index.html";
});