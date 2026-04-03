document.addEventListener('DOMContentLoaded', () => {
    
    const nexusTrigger = document.getElementById('nexus-trigger');
    const statusText = document.getElementById('status-text');
    const videoVault = document.getElementById('video-vault');
    const mainVideo = document.getElementById('main-video');
    const relockBtn = document.getElementById('relock-btn');

    // When the Magic Circle is tapped
    nexusTrigger.addEventListener('click', () => {
        
        statusText.innerText = "DECRYPTING...";
        
        // Haptic feedback if the phone supports it
        if (navigator.vibrate) {
            navigator.vibrate([100, 50, 100]);
        }
        
        // Wait 1 second for the "hacking" effect, then show video
        setTimeout(() => {
            nexusTrigger.style.display = 'none';
            videoVault.style.display = 'flex';
            mainVideo.play();
        }, 1000);
    });

    // When the Re-Lock button is clicked
    relockBtn.addEventListener('click', () => {
        location.reload(); // Reloads the page to reset the artifact
    });

});
