const audioFiles = {};

function preloadAudio() {
    audioFiles['w'] = new Audio('sounds/tom-1.mp3');
    audioFiles['a'] = new Audio('sounds/tom-2.mp3');
    audioFiles['s'] = new Audio('sounds/tom-3.mp3');
    audioFiles['d'] = new Audio('sounds/tom-4.mp3');
    audioFiles['j'] = new Audio('sounds/snare.mp3');
    audioFiles['k'] = new Audio('sounds/crash.mp3');
    audioFiles['l'] = new Audio('sounds/kick-bass.mp3');
}


window.addEventListener('load', preloadAudio);

const numberOfDrumButtons = document.querySelectorAll('.drum').length;
for (let i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function () {
        const buttonInnerHTML = this.innerHTML;
        playSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener('keypress', function (event) {
    playSound(event.key);
    buttonAnimation(event.key);
});

function playSound(key) {
    const audio = audioFiles[key];
    if (audio) {
        audio.currentTime = 0;
        audio.play();
    }
}

function buttonAnimation(currentKey) {
    const activeButton = document.querySelector('.' + currentKey);
    if (activeButton) {
        activeButton.classList.add('pressed');
        setTimeout(function () {
            activeButton.classList.remove('pressed');
        }, 100);
    }
}
