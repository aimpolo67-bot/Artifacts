document.addEventListener("DOMContentLoaded", () => {
    const targetEl = document.querySelector('#target-anchor');
    const construct = document.querySelector('#construct-wrapper');
    const summonFlash = document.querySelector('#summon-flash');
    const nexusVideo = document.querySelector('#nexus-video');
    const statusDisplay = document.querySelector('#status-display');

    // 1. Initial State: 3D Construct is "shrunk" and low
    construct.setAttribute('scale', '0.01 0.01 0.01');
    construct.setAttribute('position', '0 0.05 0');

    // 2. THE SUMMONING (On Target Found)
    targetEl.addEventListener("targetFound", event => {
        console.log("Nexus Activated!");
        
        // Phase 1: Power-up (High-performance animation)
        summonFlash.setAttribute('animation', 'property: opacity; to: 0; dur: 800; easing: easeOutQuad');
        summonFlash.setAttribute('animation__scale', 'property: scale; to: 1.5 1.5 1.5; dur: 800; easing: easeOutQuad');

        // Phase 2: Rise & Pop-Up (The "Action")
        construct.setAttribute('animation__rise', 'property: position; to: 0 0.1 0; dur: 1200; easing: easeOutElastic; delay: 200');
        construct.setAttribute('animation__scale', 'property: scale; to: 1 1 1; dur: 1200; easing: easeOutElastic; delay: 200');

        // Phase 3: Update UI
        statusDisplay.innerHTML = `
            <p style="color:#00ffff; text-shadow:0 0 10px #00ffff">SYSTEM SYNCED</p>
            <div class="sync-line" style="background:#00ffff; box-shadow:0 0 15px #00ffff"></div>
            <p style="color:#fff">ARTIFACT #01 DEPLOYED</p>
        `;
        
        // Final Action: Start the Video
        setTimeout(() => { nexusVideo.play(); }, 1400); 
    });
});
