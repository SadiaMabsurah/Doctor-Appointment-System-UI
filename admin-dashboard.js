document.getElementById("logoutBtn").addEventListener("click", function () {
    localStorage.removeItem("user");
    localStorage.removeItem("role");

    alert("Logged out successfully");

    window.location.href = "login.html";
});

