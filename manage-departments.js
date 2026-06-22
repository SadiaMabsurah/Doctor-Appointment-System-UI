function addDepartment(){
const name = document.getElementById("deptName").value.trim();

if(!name){
alert("Enter department name");
return;
}

alert("Department added successfully ✅");
document.getElementById("deptName").value = "";
}

document.querySelectorAll(".edit").forEach(btn=>{
btn.onclick=()=>{
alert("Edit department ✏️");
}
});

document.querySelectorAll(".delete").forEach(btn=>{
btn.onclick=()=>{
if(confirm("Delete this department?")){
alert("Deleted ❌");
}
}
});