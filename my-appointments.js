document.querySelectorAll(".cancel").forEach(btn => {
    btn.addEventListener("click", () => {
        if(confirm("Cancel this appointment?")){
            btn.closest(".card").remove();
        }
    });
});

document.querySelectorAll(".reschedule").forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Redirecting to Book Appointment page...");
        window.location.href = "book-appointment.html";
    });
});

document.querySelectorAll(".view").forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Opening appointment details...");
    });
});