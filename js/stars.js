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


// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('starfield').appendChild(renderer.domElement);

// Create stars
const starGeometry = new THREE.BufferGeometry();
const starVertices = [];

for (let i = 0; i < 10000; i++) {
    const x = (Math.random() - 0.5) * 2000;
    const y = (Math.random() - 0.5) * 2000;
    const z = (Math.random() - 0.5) * 2000;
    starVertices.push(x, y, z);
}

starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));

const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 1 });
const stars = new THREE.Points(starGeometry, starMaterial);
scene.add(stars);

// Position the camera
camera.position.z = 500;

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate the stars for a dynamic effect
    stars.rotation.x += 0.0005;
    stars.rotation.y += 0.0005;

    renderer.render(scene, camera);
}

animate();

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// galaxy
const galaxyTexture = new THREE.TextureLoader().load('../assets/images/galaxy.png');
const galaxyMaterial = new THREE.SpriteMaterial({ map: galaxyTexture });
const galaxy = new THREE.Sprite(galaxyMaterial);
galaxy.scale.set(500, 500, 1);
scene.add(galaxy);