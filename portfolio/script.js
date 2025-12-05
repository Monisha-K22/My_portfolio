// Dark/Light Mode
const toggle = document.querySelector(".theme-toggle");
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Resume Modal
function showResume() {
    document.getElementById("resumeModal").style.display = "flex";
}
function closeResume() {
    document.getElementById("resumeModal").style.display = "none";
}

// Project Modal
function showProject(id) {
    document.getElementById(`projectModal${id}`).style.display = "flex";
}
function closeProject(id) {
    document.getElementById(`projectModal${id}`).style.display = "none";
}

// Certificate Modal
function showCertificate(id) {
    document.getElementById(`certificateModal${id}`).style.display = "flex";
}
function closeCertificate(id) {
    document.getElementById(`certificateModal${id}`).style.display = "none";
}

function downloadResume() {
    const link = document.createElement("a");
    link.href = "resume.pdf";  
    link.download = "Monisha_K_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


