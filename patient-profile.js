function updateProfile(){

const name = document.getElementById("name").value.trim();
const phone = document.getElementById("phone").value.trim();
const address = document.getElementById("address").value.trim();
const age = document.getElementById("age").value.trim();
const gender = document.getElementById("gender").value;
const history = document.getElementById("history").value.trim();

if(!name || !phone || !address || !age){
    alert("Please fill all required fields");
    return;
}

alert("Profile Updated Successfully ✅");
}