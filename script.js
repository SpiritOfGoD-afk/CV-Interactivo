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
