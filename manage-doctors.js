const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const saveBtn = document.getElementById("saveBtn");
const tableBody = document.querySelector("tbody");

const nameInput = document.getElementById("name");
const deptInput = document.getElementById("department");
const feeInput = document.getElementById("fee");
const statusInput = document.getElementById("status");

let editRow = null; 

openModal.addEventListener("click", () => {
    clearForm();
    editRow = null;
    modal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

saveBtn.addEventListener("click", () => {

    const name = nameInput.value.trim();
    const department = deptInput.value.trim();
    const fee = feeInput.value.trim();
    const status = statusInput.value;

    if (!name || !department || !fee) {
        alert("Please fill all fields");
        return;
    }

    if (editRow) {
        editRow.cells[0].innerText = name;
        editRow.cells[1].innerText = department;
        editRow.cells[2].innerText = fee;

        const statusSpan = editRow.cells[3].querySelector("span");
        statusSpan.className = "status " + status;
        statusSpan.innerText = status;

        editRow = null;
    }

    else {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${name}</td>
            <td>${department}</td>
            <td>$${fee}</td>
            <td><span class="status ${status}">${status}</span></td>
            <td class="actions">
                <button class="edit"><i class="fa fa-pen"></i></button>
                <button class="delete"><i class="fa fa-trash"></i></button>
            </td>
        `;

        tableBody.appendChild(row);
    }

    modal.style.display = "none";
    clearForm();
    attachEvents();
});

function clearForm() {
    nameInput.value = "";
    deptInput.value = "";
    feeInput.value = "";
    statusInput.value = "active";
}

function attachEvents() {

    document.querySelectorAll(".delete").forEach(btn => {
        btn.onclick = function () {
            this.closest("tr").remove();
        };
    });

    document.querySelectorAll(".edit").forEach(btn => {
        btn.onclick = function () {

            editRow = this.closest("tr");

            nameInput.value = editRow.cells[0].innerText;
            deptInput.value = editRow.cells[1].innerText;
            feeInput.value = editRow.cells[2].innerText.replace("$", "");
            statusInput.value = editRow.cells[3].querySelector("span").innerText;

            modal.style.display = "flex";
        };
    });
}

attachEvents();