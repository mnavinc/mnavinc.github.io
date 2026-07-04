// ==========================================================
// Resume Pro
// renderer.js
// Renders profile.json into the HTML
// ==========================================================

function $(id) {
    return document.getElementById(id);
}

function escapeHTML(str = "") {
    return String(str)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;");
}

// ==========================================================
// PROFILE
// ==========================================================

 function renderProfile(data) {

    const personal = data.personal || {};
    const social = data.social || {};

    $("logo-name").textContent = personal.name || "";
    $("footer-name").textContent = personal.name || "";

    $("name").textContent = personal.name || "";

    $("headline").textContent =
        personal.headline || "";

    $("tagline").textContent =
        personal.tagline || "";

    $("profile-image").src =
        personal.photo || "";

    $("profile-image").alt =
        personal.name || "";

    $("linkedin-btn").href =
        social.linkedin || "#";

    $("github-btn").href =
        social.github || "#";
}

// ==========================================================
// SUMMARY
// ==========================================================

function renderSummary(data) {

    $("summary").textContent =
        data.summary || "";

}

// ==========================================================
// EXPERIENCE
// ==========================================================

function renderExperience(data) {

    const container =
        $("experience-list");

    container.innerHTML = "";

    const wrapper =
        document.createElement("div");

    wrapper.className = "timeline";

    (data.experience || []).forEach(job => {

        const item =
            document.createElement("article");

        item.className =
            "timeline-item card";

        item.innerHTML = `
            <div class="timeline-date">
                ${job.start} - ${job.end}
            </div>

            <div class="timeline-title">
                ${escapeHTML(job.position)}
            </div>

            <div class="timeline-company">
                ${escapeHTML(job.company)}
            </div>

            <p>
                ${escapeHTML(job.location)}
            </p>

            <ul>
                ${(job.highlights || [])
                    .map(h => `<li>${escapeHTML(h)}</li>`)
                    .join("")}
            </ul>

            <div class="project-tags">
                ${(job.technologies || [])
                    .map(t =>
                        `<span class="tag">${escapeHTML(t)}</span>`
                    )
                    .join("")}
            </div>
        `;

        wrapper.appendChild(item);

    });

    container.appendChild(wrapper);

}

// ==========================================================
// SKILLS
// ==========================================================

function renderSkills(data) {

    const container =
        $("skills-grid");

    container.innerHTML = "";

    const skills =
        data.skills || {};

    Object.entries(skills).forEach(([group, values]) => {

        const card =
            document.createElement("section");

        card.className =
            "skill-group";

        card.innerHTML = `
            <h3>${escapeHTML(group)}</h3>

            <div class="skill-list">

                ${values
                    .map(skill =>
                        `<span class="skill">${escapeHTML(skill)}</span>`
                    )
                    .join("")}

            </div>
        `;

        container.appendChild(card);

    });

}

// ==========================================================
// PROJECTS
// ==========================================================

function renderProjects(data) {

    const container =
        $("projects-grid");

    container.innerHTML = "";

    if (!data.projects || !data.projects.length) {

        container.innerHTML =
            `<p>No projects added yet.</p>`;

        return;

    }

    data.projects.forEach(project => {

        const card =
            document.createElement("article");

        card.className =
            "project-card";

        card.innerHTML = `

            <div class="project-content">

                <h3>
                    ${escapeHTML(project.name)}
                </h3>

                <p>
                    ${escapeHTML(project.description)}
                </p>

                <div class="project-tags">

                    ${(project.technologies || [])
                        .map(t =>
                            `<span class="tag">${escapeHTML(t)}</span>`
                        )
                        .join("")}

                </div>

                <br>

                ${project.github
                    ? `<a class="btn secondary" target="_blank" href="${project.github}">GitHub</a>`
                    : ""}

                ${project.demo
                    ? `<a class="btn primary" target="_blank" href="${project.demo}">Live Demo</a>`
                    : ""}

            </div>

        `;

        container.appendChild(card);

    });

}

// ==========================================================
// EDUCATION
// ==========================================================

function renderEducation(data) {

    const container =
        $("education-list");

    container.innerHTML = "";

    (data.education || []).forEach(item => {

        const card =
            document.createElement("article");

        card.className =
            "education-card";

        card.innerHTML = `

            <h3>${escapeHTML(item.degree)}</h3>

            <strong>

                ${escapeHTML(item.field)}

            </strong>

            <p>

                ${escapeHTML(item.institution)}

            </p>

            <small>

                ${item.start} - ${item.end}

            </small>

        `;

        container.appendChild(card);

    });

}

// ==========================================================
// CERTIFICATIONS
// ==========================================================

function renderCertifications(data) {

    const list =
        $("certification-list");

    list.innerHTML = "";

    (data.certifications || []).forEach(cert => {

        const li =
            document.createElement("li");

        li.textContent = cert;

        list.appendChild(li);

    });

}

// ==========================================================
// ACHIEVEMENTS
// ==========================================================

function renderAchievements(data) {

    const container =
        $("achievement-list");

    container.innerHTML = "";

    (data.achievements || []).forEach(item => {

        const card =
            document.createElement("div");

        card.className =
            "card";

        card.innerHTML = `

            <h3>

                ${escapeHTML(item.title)}

            </h3>

            <p>

                ${escapeHTML(item.description)}

            </p>

        `;

        container.appendChild(card);

    });

}

// ==========================================================
// CONTACT
// ==========================================================

function renderContact(data) {

    const p =
        data.personal || {};

    $("location").textContent =
        p.location || "";

    $("email").textContent =
        p.email || "";

    $("email").href =
        `mailto:${p.email}`;

    $("phone").textContent =
        p.phone || "";

    $("phone").href =
        `tel:${p.phone}`;

}

// ==========================================================
// SEO
// ==========================================================

function renderSEO(data) {

    const site =
        data.site || {};

    document.title =
        site.title || "";

    $("page-title").textContent =
        site.title || "";

    $("meta-description").content =
        site.description || "";

    $("meta-keywords").content =
        (site.keywords || []).join(",");

    $("canonical-url").href =
        site.url || "";

    $("og-title").content =
        site.title || "";

    $("og-description").content =
        site.description || "";

    $("og-url").content =
        site.url || "";

    const person = {

        "@context": "https://schema.org",

        "@type": "Person",

        "name": data.personal?.name,

        "jobTitle": data.personal?.headline,

        "image": data.personal?.photo,

        "url": site.url,

        "email": data.personal?.email,

        "sameAs": Object.values(
            data.social || {}
        ).filter(Boolean)

    };

    $("schema").textContent =
        JSON.stringify(person, null, 2);

}