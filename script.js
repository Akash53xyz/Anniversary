// Navigate between pages
function nextPage(num) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));
    
    document.getElementById('p' + num).classList.add('active');

    // Attempt to play music on first interaction
    const audio = document.getElementById('loveSong');
    if (audio.paused) audio.play();
}

// Particle System (Hearts & Flowers)
function createParticles() {
    const container = document.getElementById('particle-container');
    const particle = document.createElement('div');
    const types = ['❤️', '💖', '🌸', '✨', '💍'];
    
    particle.innerHTML = types[Math.floor(Math.random() * types.length)];
    particle.style.position = 'fixed';
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.top = '110vh';
    particle.style.fontSize = Math.random() * 20 + 10 + 'px';
    particle.style.opacity = Math.random();
    particle.style.zIndex = '-1';
    particle.style.transition = `transform ${Math.random() * 4 + 3}s linear`;
    
    container.appendChild(particle);

    setTimeout(() => {
        particle.style.transform = `translateY(-120vh) rotate(${Math.random() * 360}deg)`;
    }, 100);

    setTimeout(() => { particle.remove(); }, 6000);
}

setInterval(createParticles, 400);

// Music Toggle
function toggleMusic() {
    const audio = document.getElementById('loveSong');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}
