// skills section
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".toggle-button");
    const categories = document.querySelectorAll(".skill-category");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            // remove active class from all categories
            categories.forEach(category => category.classList.remove("active"));

            // Add active class to the clicked category
            const categoryClass = button.getAttribute("data-category");
            document.querySelector(`.skill-category.${categoryClass}`).classList.add("active");
        });
    });

    // set the first category as active by default
    document.querySelector(".skill-category.programming").classList.add("active");
});

// enhanced '#' links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // scroll slower using custom animation
        const startPosition = window.scrollY;
        const targetPosition = targetElement.getBoundingClientRect().top;
        const duration = 1000; // scroll time in ms
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const elapsedTime = currentTime - startTime;
            const ease = easeInOutCubic(elapsedTime, startPosition, targetPosition, duration);

            window.scrollTo(0, ease);

            if (elapsedTime < duration) {
                requestAnimationFrame(animation);
            }
        }

        function easeInOutCubic(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return (c / 2) * t * t * t + b;
            t -= 2;
            return (c / 2) * (t * t * t + 2) + b;
        }

        requestAnimationFrame(animation);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Create Back to Top button
    const backToTopButton = document.createElement("button");
    backToTopButton.classList.add("back-to-top");
    backToTopButton.innerHTML = "↑";
    document.body.appendChild(backToTopButton);

    // Show or hide the button based on scroll position
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    // Smooth scroll to top on click
    backToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});