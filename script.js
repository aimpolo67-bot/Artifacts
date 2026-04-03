document.addEventListener("DOMContentLoaded", () => {
    const sceneEl = document.querySelector('a-scene');
    const arVideo = document.querySelector('#nexus-video');
    const overlay = document.querySelector('#ui-overlay');

    // When the camera successfully finds your Chronos Nexus card
    sceneEl.addEventListener("targetFound", event => {
        console.log("Nexus Detected!");
        overlay.classList.add('hidden'); // Hide the scanning UI
        arVideo.play(); // Start the Fire & Ice video
    });

    // If the camera loses sight of the card
    sceneEl.addEventListener("targetLost", event => {
        console.log("Nexus Lost");
        overlay.classList.remove('hidden'); // Show the scanning UI again
        arVideo.pause();
    });
});
