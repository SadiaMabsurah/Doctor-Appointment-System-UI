const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const saveBtn = document.getElementById("saveBtn");

const tableBody = document.querySelector("tbody");

let editRow = null;

openModal.addEventListener("click", () => {
    modal.style.display = "flex";
    clearForm();
    document.getElementById("modalTitle").innerText = "Add Appointment";
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

function clearForm(){
    document.getElementById("patient").value = "";
    document.getElementById("doctor").value = "";
    document.getElementById("date").value = "";
    document.getElementById("status").value = "pending";
    editRow = null;
}

saveBtn.addEventListener("click", () => {

    const patient = document.getElementById("patient").value;
    const doctor = document.getElementById("doctor").value;
    const date = document.getElementById("date").value;
    const status = document.getElementById("status").value;

    if(!patient || !doctor || !date){
        alert("Please fill all fields");
        return;
    }

    if(editRow){
        editRow.children[0].innerText = patient;
        editRow.children[1].innerText = doctor;
        editRow.children[2].innerText = date;
        editRow.children[3].innerHTML = `<span class="status ${status}">${status}</span>`;
    }

    else{
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${patient}</td>
            <td>${doctor}</td>
            <td>${date}</td>
            <td><span class="status ${status}">${status}</span></td>
            <td class="actions">
                <button class="edit"><i class="fa fa-pen"></i></button>
                <button class="delete"><i class="fa fa-trash"></i></button>
            </td>
        `;

        tableBody.appendChild(row);
        addEvents(row);
    }

    modal.style.display = "none";
    clearForm();
});

function deleteRow(btn){
    btn.closest("tr").remove();
}

function editRowData(row){
    editRow = row;

    document.getElementById("patient").value = row.children[0].innerText;
    document.getElementById("doctor").value = row.children[1].innerText;
    document.getElementById("date").value = row.children[2].innerText;

    let statusText = row.children[3].innerText.toLowerCase();
    document.getElementById("status").value = statusText;

    document.getElementById("modalTitle").innerText = "Edit Appointment";

    modal.style.display = "flex";
}

function addEvents(row){
    row.querySelector(".delete").addEventListener("click", function(){
        deleteRow(this);
    });

    row.querySelector(".edit").addEventListener("click", function(){
        editRowData(row);
    });
}

document.querySelectorAll("tbody tr").forEach(addEvents);