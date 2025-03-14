document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
        body.classList.add("dark-mode");
        themeToggle.textContent = "🌙";
    } else {
        themeToggle.textContent = "🌞";
    }

    themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        if (body.classList.contains("dark-mode")) {
            themeToggle.textContent = "🌙";
            localStorage.setItem("theme", "dark");
        } else {
            themeToggle.textContent = "🌞";
            localStorage.setItem("theme", "light");
        }
    });

    document.querySelectorAll(".progress").forEach(bar => {
        const width = bar.getAttribute("data-width");
        bar.style.width = width;
    });

    document.querySelectorAll(".social-links a").forEach(button => {
        button.addEventListener("mouseover", () => {
            button.style.transform = "scale(1.1)";
        });
        button.addEventListener("mouseout", () => {
            button.style.transform = "scale(1)";
        });
    });

    const header = document.querySelector("header");
    if (header) {
        header.style.paddingTop = "50px";
    }

    const footerSpace = document.createElement("div");
    footerSpace.style.height = "50px";
    document.body.appendChild(footerSpace);
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".toggle-btn").forEach(button => {
        button.addEventListener("click", () => {
            const content = button.nextElementSibling;
            content.classList.toggle("active");

            if (content.classList.contains("active")) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = "0";
            }

            button.textContent = content.classList.contains("active") ? "▲" : "▼";
        });
    });
});
