const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

const seconds = timeNodes
    .map(node => node.dataset.time)
    .map(timeCode => {
        const [mins, secs] = timeCode.split(':').map(parseFloat);
        return (mins * 60) + secs;
    })
    .reduce((total, vidSeconds) => total + vidSeconds);

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600); //Get only the hours
secondsLeft = secondsLeft % 3600; //Get the bits of seconds left

const mins = Math.floor(secondsLeft / 60); //Process it into mins
secondsLeft = secondsLeft % 60; //Get the bits of seconds left after being processed into misn

console.log(hours, mins, secondsLeft);
