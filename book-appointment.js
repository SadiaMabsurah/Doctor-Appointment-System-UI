let selectedSlot = "";

const slots = document.querySelectorAll(".slot");

slots.forEach(slot => {
    slot.addEventListener("click", () => {

        slots.forEach(s => s.classList.remove("active"));

        slot.classList.add("active");

        selectedSlot = slot.dataset.time;
    });
});

function bookAppointment(){

const doctor = document.getElementById("doctor").value;
const date = document.getElementById("date").value;
const reason = document.getElementById("reason").value.trim();

if(!doctor){
    alert("Please select a doctor");
    return;
}

if(!date){
    alert("Please select a date");
    return;
}

if(!selectedSlot){
    alert("Please select a time slot");
    return;
}

if(reason === ""){
    alert("Please enter reason for visit");
    return;
}

alert("Appointment Confirmed 🎉\nTime: " + selectedSlot);

document.getElementById("doctor").value = "";
document.getElementById("date").value = "";
document.getElementById("reason").value = "";

slots.forEach(s => s.classList.remove("active"));
selectedSlot = "";
}