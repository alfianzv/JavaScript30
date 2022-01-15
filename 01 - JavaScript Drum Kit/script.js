function playSound(e) {
    const audio = document.querySelector('audio[data-key=' + e.code + ']');
    const key = document.querySelector('.key[data-key=' + e.code + ']')
    if (!audio) return; // If keys don't exist, don't play
    audio.currentTime = 0; // Rewind the keys, allow multiple succession of key press
    audio.play();
    key.classList.add('playing');
};

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip if it's not transform
    this.classList.remove('playing');
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);