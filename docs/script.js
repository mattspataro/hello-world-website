const button = document.getElementById('confettiButton');
button.addEventListener('click', function() {
    const rect = button.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    confetti({
        particleCount: 100,
        spread: 70,
        origin: {
            x: x / window.innerWidth,
            y: y / window.innerHeight
        }
    });
});