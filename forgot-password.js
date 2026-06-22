const form = document.getElementById("forgotForm");

form.addEventListener("submit", function(e){
    e.preventDefault();

    let email = document.getElementById("email").value.trim();

    if(email === ""){
        alert("Please enter your email");
        return;
    }

    alert("Reset link sent to " + email);

    window.location.href = "login.html";
});