const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  body.classList.toggle("light-theme");
  toggleButton.textContent = body.classList.contains("dark-theme") ? "☀️" : "🌙";
});

// ====== Chart.js Initialization ======

// Sales chart (Line)
new Chart(document.getElementById("salesChart"), {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales ((₹)",
        data: [12000, 15000, 14000, 20000, 22000, 25000],
        borderColor: "#6366f1",
        backgroundColor: "rgba(99,102,241,0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  },
  options: { responsive: true, plugins: { legend: { display: true } } },
});

// Users chart (Bar)
new Chart(document.getElementById("usersChart"), {
  type: "bar",
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Active Users",
        data: [200, 300, 400, 350, 500, 600],
        backgroundColor: "#6366f1",
      },
    ],
  },
  options: { responsive: true, plugins: { legend: { display: false } } },
});
