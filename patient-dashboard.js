const menuItems = document.querySelectorAll(".sidebar ul li");

menuItems.forEach(item => {
    item.addEventListener("click", () => {

        menuItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");

        console.log(item.innerText + " clicked");
    });
});


document.getElementById("logout").addEventListener("click", () => {
    alert("Logged out successfully!");
    window.location.href = "login.html";
});