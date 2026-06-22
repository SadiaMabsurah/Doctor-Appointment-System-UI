
new Chart(document.getElementById("appointmentsChart"), {
    type: "line",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
            label: "Appointments",
            data: [500, 700, 800, 650, 900, 1100],
            borderColor: "#0d6efd",
            backgroundColor: "rgba(13,110,253,0.1)",
            fill: true,
            tension: 0.4
        }]
    }
});

new Chart(document.getElementById("doctorsChart"), {
    type: "bar",
    data: {
        labels: ["Dr. A", "Dr. B", "Dr. C", "Dr. D"],
        datasets: [{
            label: "Patients Treated",
            data: [120, 190, 150, 80],
            backgroundColor: "#0d6efd"
        }]
    }
});

new Chart(document.getElementById("departmentChart"), {
    type: "pie",
    data: {
        labels: ["Cardiology", "Neurology", "Orthopedic", "General"],
        datasets: [{
            data: [30, 25, 20, 25],
            backgroundColor: ["#0d6efd", "#198754", "#ffc107", "#dc3545"]
        }]
    }
});