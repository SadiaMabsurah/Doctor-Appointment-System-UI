const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const saveBtn = document.getElementById("saveBtn");
const tableBody = document.getElementById("tableBody");

let editRow = null;

openModal.addEventListener("click", () => {
    modal.style.display = "flex";
    resetForm();
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

function resetForm(){
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("status").value = "active";
    document.getElementById("modalTitle").innerText = "Add Patient";
    editRow = null;
}

saveBtn.addEventListener("click", () => {

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const status = document.getElementById("status").value;

    if(!name || !phone || !email){
        alert("Fill all fields");
        return;
    }

    if(editRow){

        editRow.children[0].innerText = name;
        editRow.children[1].innerText = phone;
        editRow.children[2].innerText = email;
        editRow.children[3].innerHTML = `<span class="status ${status}">${status}</span>`;
    } 
    else {
       
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${name}</td>
            <td>${phone}</td>
            <td>${email}</td>
            <td><span class="status ${status}">${status}</span></td>
            <td>
                <button class="edit"><i class="fa fa-pen"></i></button>
                <button class="delete"><i class="fa fa-trash"></i></button>
            </td>
        `;

        tableBody.appendChild(row);
        addEvents(row);
    }

    modal.style.display = "none";
    resetForm();
});

function deleteRow(btn){
    btn.closest("tr").remove();
}

function editRowData(row){
    editRow = row;

    document.getElementById("name").value = row.children[0].innerText;
    document.getElementById("phone").value = row.children[1].innerText;
    document.getElementById("email").value = row.children[2].innerText;

    let statusText = row.children[3].innerText.toLowerCase();
    document.getElementById("status").value = statusText;

    document.getElementById("modalTitle").innerText = "Edit Patient";
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