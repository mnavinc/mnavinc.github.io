// ==========================================================
// Resume Pro
// Main Application
// ==========================================================

// ----------------------------------------------------------
// Initialize
// ----------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
    render(profile);
    initTheme();
    initPDF();
    initSmoothScroll();

    document.getElementById("year").textContent =
        new Date().getFullYear();
});

// ----------------------------------------------------------
// Load JSON
// ----------------------------------------------------------

async function loadProfile() {

    try {

        // const response = await fetch(DATA_FILE);

        // if (!response.ok)
        //     throw new Error("Unable to load profile.json");

        // profile = await response.json();

        render(profile);

    } catch (error) {

        console.error(error);

        document.body.innerHTML = `
            <main style="
                padding:60px;
                font-family:Inter,sans-serif;
                text-align:center">
                <h1>Unable to load resume</h1>
                <p>${error.message}</p>
            </main>
        `;

    }

}

// ----------------------------------------------------------
// Render Everything
// ----------------------------------------------------------

function render(data) {
    console.log(data)

    renderProfile(data);

    renderSummary(data);

    renderExperience(data);

    renderSkills(data);

    renderProjects(data);

    renderEducation(data);

    renderCertifications(data);

    renderAchievements(data);

    renderContact(data);

    renderSEO(data);

}

// ----------------------------------------------------------
// Theme
// ----------------------------------------------------------

function initTheme() {

    const button = document.getElementById("theme-toggle");

    const savedTheme =
        localStorage.getItem("theme") || "light";

    document.documentElement.setAttribute(
        "data-theme",
        savedTheme
    );

    updateThemeIcon(savedTheme);

    button.addEventListener("click", () => {

        const current =
            document.documentElement.getAttribute("data-theme");

        const next =
            current === "dark"
                ? "light"
                : "dark";

        document.documentElement.setAttribute(
            "data-theme",
            next
        );

        localStorage.setItem("theme", next);

        updateThemeIcon(next);

    });

}

function updateThemeIcon(theme) {

    const button =
        document.getElementById("theme-toggle");

    button.textContent =
        theme === "dark"
            ? "☀️"
            : "🌙";

}

// ----------------------------------------------------------
// Download PDF
// ----------------------------------------------------------

// function initPDF() {

//     const button =
//         document.getElementById("download-btn");

//     button.addEventListener("click", () => {

//         window.print();

//     });

// }

// ----------------------------------------------------------
// Smooth Scroll
// ----------------------------------------------------------

function initSmoothScroll() {

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(anchor => {

            anchor.addEventListener("click", event => {

                event.preventDefault();

                const id =
                    anchor.getAttribute("href");

                const section =
                    document.querySelector(id);

                if (!section) return;

                window.scrollTo({

                    top:
                        section.offsetTop - 65,

                    behavior: "smooth"

                });

            });

        });

}

// ----------------------------------------------------------
// Utility
// ----------------------------------------------------------

function create(tag, className = "") {

    const element =
        document.createElement(tag);

    if (className)
        element.className = className;

    return element;

}

function text(value) {

    return document.createTextNode(value);

}