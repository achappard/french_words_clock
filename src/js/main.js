import '../scss/app.scss'

import {create_new_element} from "./helpers/dom.js";

const letters_grid = [
    ["I", "L", "N", "E", "S", "T", "O", "D", "E", "U", "X"],
    ["Q", "U", "A", "T", "R", "E", "T", "R", "O", "I", "S"],
    ["N", "E", "U", "F", "U", "N", "E", "S", "E", "P", "T"],
    ["H", "U", "I", "T", "S", "I", "X", "C", "I", "N", "Q"],
    ["M", "I", "D", "I", "X", "M", "I", "N", "U", "I", "T"],
    ["O", "N", "Z", "E", "R", "H", "E", "U", "R", "E", "S"],
    ["M", "O", "I", "N", "S", "O", "L", "E", "D", "I", "X"],
    ["E", "T", "R", "Q", "U", "A", "R", "T", "P", "M", "D"],
    ["V", "I", "N", "G", "T", "-", "C", "I", "N", "Q", "U"],
    ["E", "T", "S", "D", "E", "M", "I", "E", "P", "A", "M"]
];
const grid_wrapper = document.querySelector('#grid-wrapper')

letters_grid.forEach((letters_line) => {
    const newLine = create_new_element('div', ['letter-lines'])
    grid_wrapper.appendChild(newLine);
    letters_line.forEach((letter) => {
        const newLetter = create_new_element('div', ['letter'])
        newLetter.innerText = letter;
        newLine.appendChild(newLetter);
    })
})


