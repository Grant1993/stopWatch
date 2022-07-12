class Timer {
    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }

    start = () => {
        this.tick();
        this.interval =  setInterval(this.tick, 1000);
    };

    pause = () => {
        clearInterval(this.interval);
    }

    tick = () => {
        const timeRemaining = parseFloat(this.durationInput.value);
        if (timeRemaining > 0) {
        this.durationInput.value =  timeRemaining - 1;
        } else {
            this.pause()
        }
    }
}

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton);