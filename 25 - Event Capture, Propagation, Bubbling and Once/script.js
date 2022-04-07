const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText(e) {
    console.log(this.classList.value);
    /* e.stopPropagation(); */
}

//Capture = true makes it go from most outer div to the most inner
divs.forEach(div => div.addEventListener('click', logText, {
    capture: false,
    once: true
}));

button.addEventListener('click', () => {
    console.log("Click!!!")
}, {
    once: true
});