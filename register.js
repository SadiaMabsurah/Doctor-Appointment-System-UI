const form = document.getElementById("registerForm");

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const togglePassword = document.getElementById("togglePassword");
const toggleConfirm = document.getElementById("toggleConfirm");

togglePassword.addEventListener("click", () => {
    if(password.type === "password"){
        password.type = "text";
        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");
    } else {
        password.type = "password";
        togglePassword.classList.add("fa-eye");
        togglePassword.classList.remove("fa-eye-slash");
    }
});

toggleConfirm.addEventListener("click", () => {
    if(confirmPassword.type === "password"){
        confirmPassword.type = "text";
        toggleConfirm.classList.remove("fa-eye");
        toggleConfirm.classList.add("fa-eye-slash");
    } else {
        confirmPassword.type = "password";
        toggleConfirm.classList.add("fa-eye");
        toggleConfirm.classList.remove("fa-eye-slash");
    }
});

form.addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const role = document.getElementById("role").value;
    const pass = password.value.trim();
    const confirm = confirmPassword.value.trim();

    if(name === "" || email === "" || phone === "" || pass === ""){
        alert("Please fill all fields");
        return;
    }

    if(pass.length < 4){
        alert("Password must be at least 4 characters");
        return;
    }

    if(pass !== confirm){
        alert("Passwords do not match");
        return;
    }

    localStorage.setItem("user", "registered");
    localStorage.setItem("role", role);
    localStorage.setItem("name", name);

    alert("Registration Successful!");

    window.location.href = "login.html";
});