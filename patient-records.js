function searchPatient(){

const value = document.getElementById("search").value.trim();

if(!value){
alert("Please enter patient name");
return;
}

alert("Searching patient: " + value);
}

function saveRecord(){

const notes = document.getElementById("notes").value.trim();

if(!notes){
alert("Please write medical notes");
return;
}

alert("Patient record saved successfully ✅");
}