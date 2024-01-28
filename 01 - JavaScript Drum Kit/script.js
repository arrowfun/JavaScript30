// Function to handle transition removal
function removeTransition(event) {
  if (event.propertyName !== 'transform') return;
  event.target.classList.remove('playing');
}

// Function to play the sound
function playSound(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

// Get all the keys and add transition event listeners
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// Add event listener for keydown to play sound
window.addEventListener('keydown', playSound);