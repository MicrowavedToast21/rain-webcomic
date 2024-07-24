
function showSection(sectionId) {
    // Get all sections
    const sections = document.querySelectorAll('.section');
    // Hide all sections
    sections.forEach(section => {
        section.classList.add('hidden');
    });
    // Show the target section
    const targetSection = document.getElementById(sectionId);
    targetSection.classList.remove('hidden');
}
const d = new Date();
document.getElementById("demo").innerHTML = d;