function updateProfile(){

const qualification = document.getElementById("qualification").value.trim();
const experience = document.getElementById("experience").value.trim();
const fee = document.getElementById("fee").value.trim();
const availability = document.getElementById("availability").value.trim();

if(!qualification || !experience || !fee || !availability){
    alert("Please fill all fields");
    return;
}

alert("Profile updated successfully ✅");
}