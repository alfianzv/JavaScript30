const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 500; // 100px

function shadow(e) {
/*     const width = hero.offsetWidth;
    const height = hero.offsetHeight; */
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;

    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / width * walk) - (walk / 2));

    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgb(255, 0, 255, 0.7),
    ${xWalk * -1}px ${yWalk}px 0 rgb(0, 255, 255, 0.7),
    ${yWalk}px ${xWalk * -1}px 0 rgb(0, 255, 0, 0.7),
    ${yWalk * -1}px ${xWalk}px 0 rgb(0, 0, 255, 0.7)
    `;

    //use offsetx and offsety to get the position of a cursor
    //if theres a nested element you usually need to get around it
}

hero.addEventListener('mousemove', shadow);