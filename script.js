// Menu navigation: switch visible section and active menu class
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        // Remove active class from all menu links
        document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
        this.classList.add('active');

        // Hide all sections
        document.querySelectorAll('main .section').forEach(section => {
            section.classList.remove('active');
        });

        // Show target section
        const sectionId = this.getAttribute('data-section');
        document.getElementById(sectionId).classList.add('active');
    });
});

// Menjalankan fungsi saat scroll
window.addEventListener("scroll", reveal);

// Menjalankan fungsi saat pertama kali load
reveal();
