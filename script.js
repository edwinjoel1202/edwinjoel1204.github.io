
// Smooth scroll function
function smoothScroll(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        event.preventDefault();
        window.scrollTo({
            top: targetElement.offsetTop - 100, // Adjust the offset as needed
            behavior: 'smooth'
        });
    }
}
