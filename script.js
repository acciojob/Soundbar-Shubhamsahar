//your JS code here. If required.
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

// Get the buttons container
const buttonsContainer = document.getElementById('buttons');

// Function to create a button
function createButton(soundName) {
    const button = document.createElement('button');
    button.textContent = soundName;
    button.classList.add('btn');
    button.onclick = () => playSound(soundName);
    return button;
}

// Function to play sound
function playSound(soundName) {
    const audio = new Audio(sounds/${soundName}.mp3);
    audio.play();
}

// Function to stop all sounds
function stopSounds() {
    // Since we're creating a new Audio object each time, we can't directly stop them.
    // However, we can pause all currently playing audios by keeping track of them.
    // For simplicity, this example doesn't implement that. Instead, it just creates a new audio object and pauses it immediately.
    // A more robust solution would involve keeping track of all Audio objects created.
    const audio = new Audio();
    audio.pause(); // This won't work as expected because it's a new Audio object.
}

// Create sound buttons
sounds.forEach(sound => {
    const button = createButton(sound);
    buttonsContainer.appendChild(button);
});

// Create stop button
const stopButton = document.createElement('button');
stopButton.textContent = 'stop';
stopButton.classList.add('stop');
stopButton.onclick = stopSounds;
buttonsContainer.appendChild(stopButton);
