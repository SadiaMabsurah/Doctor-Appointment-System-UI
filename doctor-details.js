const slots = document.querySelectorAll(".slot");

slots.forEach(slot => {
    slot.addEventListener("click", () => {

        slots.forEach(s => s.classList.remove("active"));

        slot.classList.add("active");

        alert("Selected Slot: " + slot.innerText);
    });
});