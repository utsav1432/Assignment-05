/* Initialise AOS */
document.addEventListener("DOMContentLoaded", () => {
    AOS.init({ once: true });

    /* Example: smooth-scroll fix for older browsers */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", e => {
            e.preventDefault();
            const id = anchor.getAttribute("href").substring(1);
            const target = document.getElementById(id);
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});


$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});


document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});


document.onkeydown = function (e) {
    // Disable Ctrl+U, Ctrl+C, Ctrl+S, Ctrl+A
    if (e.ctrlKey && ['u', 'c', 's', 'a'].includes(e.key.toLowerCase())) {
        e.preventDefault();
    }
};