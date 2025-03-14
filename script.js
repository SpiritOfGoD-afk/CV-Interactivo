function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode"));
}

// Mantener el modo seleccionado en la recarga de la página
window.onload = function () {
    if (localStorage.getItem("dark-mode") === "true") {
        document.body.classList.add("dark-mode");
    }
};

window.onload = function () {
    // Restaurar modo oscuro si estaba activado
    if (localStorage.getItem("dark-mode") === "true") {
        document.body.classList.add("dark-mode");
    }

    // Animar barras de progreso
    const progressBars = document.querySelectorAll(".progress");
    progressBars.forEach(bar => {
        const progressValue = bar.getAttribute("data-progress");
        bar.style.width = progressValue + "%";
    });
};

const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    themeToggle.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
});