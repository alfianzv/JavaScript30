const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function strip(bandName) {
    return bandName.replace(/^(a |the |an)/i, '').trim();
}

const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

//if u tried to set something to the DOM, for ex. an array, it will take those array and do .toString() to it.
//By default an array will always have commas between each item.

document.querySelector('#bands').innerHTML =
    sortedBands
        .map(band => `<li>${band}</li>`)
        .join('');

console.log(sortedBands);