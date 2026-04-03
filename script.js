function startUnlock() {
    const seal = document.getElementById('nexus-seal');
    const wrapper = document.getElementById('seal-wrapper');
    const status = document.getElementById('status-text');
    const videoArchive = document.getElementById('video-archive');
    const video = document.getElementById('main-video');

    // Step 1: System Alert
    status.innerText = "SYNCHRONIZING...";
    status.style.color = "#fff";
    
    // Step 2: Power Surge (Visual Shaking)
    wrapper.style.animation = "shake 0.5s infinite";
    seal.style.filter = "brightness(3) drop-shadow(0 0 50px #fff)";

    // Step 3: The "Flash" and Reveal
    setTimeout(() => {
        wrapper.classList.add('hidden');
        videoArchive.classList.remove('hidden');
        video.play(); // Auto-play the Fire & Ice video
    }, 1500);
}