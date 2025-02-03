// Function to create a shooting star
function createShootingStar() {
    const shootingStarsContainer = document.querySelector('.shooting-stars');

    // Create a new shooting star element
    const star = document.createElement('div');
    star.classList.add('shooting-star');

    // Randomize starting position
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;
    star.style.left = `${startX}px`;
    star.style.top = `${startY}px`;

    // Randomize animation duration (3s to 6s)
    const duration = 3 + Math.random() * 3;
    star.style.animationDuration = `${duration}s`;

    // Add the star to the container
    shootingStarsContainer.appendChild(star);

    // Remove the star after the animation ends
    star.addEventListener('animationend', () => {
        star.remove();
    });
}

// Generate shooting stars at random intervals
function generateShootingStars() {
    setInterval(createShootingStar, 1000); // Create a new star every 1 second
}

// Start generating shooting stars when the page loads
window.addEventListener('load', generateShootingStars);