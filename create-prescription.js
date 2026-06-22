function savePrescription(){

const medicine = document.getElementById("medicine").value.trim();
const dosage = document.getElementById("dosage").value.trim();
const instructions = document.getElementById("instructions").value.trim();
const diagnosis = document.getElementById("diagnosis").value.trim();

if(!medicine || !dosage || !instructions || !diagnosis){
    alert("Please fill all fields");
    return;
}

alert("Prescription saved successfully ✅");
}

function sendEmail(){

const medicine = document.getElementById("medicine").value.trim();

if(!medicine){
    alert("Please create prescription first");
    return;
}

alert("Prescription sent to patient email 📧");
}