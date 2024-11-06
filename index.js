// Add event listeners to drum buttons
var numberOfDrumButtons = document.querySelectorAll('.drum').length;
for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function () {
        var buttonInnerHTML = this.innerHTML;
        playSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

// Add keypress event listener
document.addEventListener('keypress', function (event) {
    playSound(event.key);
    buttonAnimation(event.key);
});

// Function to play sound based on key
function playSound(key) {
    var soundPath;

    switch (key) {
        case 'w':
            soundPath = 'sounds/tom-1.mp3';
            break;
        case 'a':
            soundPath = 'sounds/tom-2.mp3';
            break;
        case 's':
            soundPath = 'sounds/tom-3.mp3';
            break;
        case 'd':
            soundPath = 'sounds/tom-4.mp3';
            break;
        case 'j':
            soundPath = 'sounds/snare.mp3';
            break;
        case 'k':
            soundPath = 'sounds/crash.mp3';
            break;
        case 'l':
            soundPath = 'sounds/kick-bass.mp3';
            break;
        default:
            return; // Exit if key does not match
    }

    var audio = new Audio(soundPath);
    audio.play();
}

// Function to add and remove button animation
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector('.' + currentKey);
    if (activeButton) {
        activeButton.classList.add('pressed');
        setTimeout(function () {
            activeButton.classList.remove('pressed');
        }, 100);
    }
}
