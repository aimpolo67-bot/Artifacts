const sceneEl = document.querySelector('a-scene');
const overlay = document.querySelector('#ui-overlay');

// 1. When the camera finds the card
sceneEl.addEventListener("targetFound", event => {
    // Show a "Ready to Summon" message
    overlay.innerHTML = "<h1>NEXUS DETECTED</h1><p>TAP TO SUMMON ARTIFACT</p>";
    overlay.style.color = "#fff";
    overlay.style.textShadow = "0 0 20px #00ffff";
    
    // Add a click listener to the whole screen
    window.onclick = () => {
        summonArtifact();
    };
});

function summonArtifact() {
    // Play a "Power Up" sound or vibration
    navigator.vibrate([100, 50, 100]);

    // Transition: Fade out the camera, Fade in the Menu
    document.body.style.transition = "background 1s";
    document.body.style.backgroundColor = "#000";

    setTimeout(() => {
        sceneEl.style.display = 'none'; // Turn off camera
        overlay.classList.add('hidden'); // Hide scanning UI
        
        // NOW: Show your 3-button Game Menu
        showGameMenu(); 
    }, 500);
}

function showGameMenu() {
    // This creates the buttons and video player on the screen
    document.body.innerHTML = `
        <div id="artifact-interface">
            <img src="chronos_nexus.png" class="spinning-bg">
            <div class="video-container">
                <video id="main-video" controls src="artifact_01.mp4"></video>
            </div>
            <div class="button-row">
                <button onclick="playVideo('ice')">🧊 ICE</button>
                <button onclick="playVideo('fire')">🔥 FIRE</button>
                <button onclick="playVideo('sync')">⚡ SYNC</button>
            </div>
        </div>
    `;
}
