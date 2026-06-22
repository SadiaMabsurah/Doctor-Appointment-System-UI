let selectedSlots = [];

document.querySelectorAll(".slot").forEach(slot => {
    slot.addEventListener("click", () => {
        slot.classList.toggle("active");

        const time = slot.innerText;

        if(selectedSlots.includes(time)){
            selectedSlots = selectedSlots.filter(t => t !== time);
        } else {
            selectedSlots.push(time);
        }
    });
});

function saveSchedule(){

const date = document.getElementById("date").value;
const limit = document.getElementById("limit").value;

if(!date){
    alert("Please select a date");
    return;
}

if(!limit){
    alert("Please set booking limit");
    return;
}

alert(
"Schedule Saved Successfully ✅\n\n" +
"Date: " + date + "\n" +
"Slots: " + selectedSlots.join(", ") + "\n" +
"Limit: " + limit
);
}