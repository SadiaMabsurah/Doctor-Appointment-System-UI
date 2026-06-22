document.querySelectorAll(".approve").forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Appointment Approved ✅");
    });
});

document.querySelectorAll(".reject").forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Appointment Rejected ❌");
    });
});

document.querySelectorAll(".view").forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Viewing appointment details 👁");
    });
});