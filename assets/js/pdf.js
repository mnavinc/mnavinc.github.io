// ==========================================================
// Resume PDF Export
// Uses browser print for true ATS-friendly selectable PDF
// ==========================================================

function initPDF() {

    const button = document.getElementById("download-btn");

    if (!button) return;

    button.addEventListener("click", downloadPDF);

}

function downloadPDF() {

    const originalTitle = document.title;

    const name =
        document.getElementById("name")?.textContent || "Resume";

    document.title = `${name.replace(/\s+/g, "_")}_Resume`;

    // Wait one frame so the title updates before print dialog
    requestAnimationFrame(() => {

        window.print();

        // Restore title after print dialog closes
        setTimeout(() => {

            document.title = originalTitle;

        }, 500);

    });

}