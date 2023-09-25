import {create_new_element} from "./dom.js";

/**
 *
 * @type {([{letter: string, word: string},{letter: string, word: string},{letter: string, word: string},{letter: string, word: string},{letter: string, word: string},null,null,null,null,null,null]|[{letter: string, word: string},{letter: string, word: string},{letter: string, word: string},{letter: string, word: string},{letter: string, word: string},null,null,null,null,null,null]|[{letter: string, word: string},{letter: string, word: string},{letter: string, word: string},{letter: string, word: string},{letter: string, word: string},null,null,null,null,null,null]|[{letter: string, word: string},{letter: string, word: string},{letter: string, word: string},{letter: string, word: string},{letter: string, word: string},null,null,null,null,null,null]|[{letter: string, word: string},{letter: string, word: string},{letter: string, word: string},{letter: string, word: string},{letter: string, word: string},null,null,null,null,null,null])[]}
 */
const letters_grid = [
    [{letter: "I", word:"Il est"}, {letter: "L", word:"Il est"}, {letter: "N", word:""}, {letter: "E", word:"Il est"}, {letter: "S", word:"Il est"}, {letter: "T", word:"Il est"}, {letter: "O", word:""}, {letter: "D", word:"deux"}, {letter: "E", word:"deux"}, {letter: "U", word:"deux"}, {letter: "X", word:"deux"}],
    [{letter: "Q", word:"quatre"}, {letter: "U", word:"quatre"}, {letter: "A", word:"quatre"}, {letter: "T", word:"quatre"}, {letter: "R", word:"quatre"}, {letter: "E", word:"quatre"}, {letter: "T", word:"trois"}, {letter: "R", word:"trois"}, {letter: "O", word:"trois"}, {letter: "I", word:"trois"}, {letter: "S", word:"trois"}],
    [{letter: "N", word:"neuf"}, {letter: "E", word:"neuf"}, {letter: "U", word:"neuf"}, {letter: "F", word:"neuf"}, {letter: "U", word:"une"}, {letter: "N", word:"une"}, {letter: "E", word:"une"}, {letter: "S", word:"sept"}, {letter: "E", word:"sept"}, {letter: "P", word:"sept"}, {letter: "T", word:"sept"}],
    [{letter: "H", word:"huit"}, {letter: "U", word:"huit"}, {letter: "I", word:"huit"}, {letter: "T", word:"huit"}, {letter: "S", word:"six"}, {letter: "I", word:"six"}, {letter: "X", word:"six"}, {letter: "C", word:"cinq"}, {letter: "I", word:"cinq"}, {letter: "N", word:"cinq"}, {letter: "Q", word:"cinq"}],
    [{letter: "M", word:"midi"}, {letter: "I", word:"midi"}, {letter: "D", word:"midi dix"}, {letter: "I", word:"midi dix"}, {letter: "X", word:"dix"}, {letter: "M", word:"minuit"}, {letter: "I", word:"minuit"}, {letter: "N", word:"minuit"}, {letter: "U", word:"minuit"}, {letter: "I", word:"minuit"}, {letter: "T", word:"minuit"}],
    [{letter: "O", word:"onze"}, {letter: "N", word:"onze"}, {letter: "Z", word:"onze"}, {letter: "E", word:"onze"}, {letter: "R", word:""}, {letter: "H", word:"heure heures"}, {letter: "E", word:"heure heures"}, {letter: "U", word:"heure heures"}, {letter: "R", word:"heure heures"}, {letter: "E", word:"heure heures"}, {letter: "S", word:"heures"}],
    [{letter: "M", word:"moins"}, {letter: "O", word:"moins"}, {letter: "I", word:"moins"}, {letter: "N", word:"moins"}, {letter: "S", word:"moins"}, {letter: "O", word:""}, {letter: "L", word:"le"}, {letter: "E", word:"le"}, {letter: "D", word:"dix_M"}, {letter: "I", word:"dix_M"}, {letter: "X", word:"dix_M"}],
    [{letter: "E", word:"et_Q"}, {letter: "T", word:"et_Q"}, {letter: "R", word:""}, {letter: "Q", word:"quart"}, {letter: "U", word:"quart"}, {letter: "A", word:"quart"}, {letter: "R", word:"quart"}, {letter: "T", word:"quart"}, {letter: "P", word:""}, {letter: "M", word:""}, {letter: "D", word:""}],
    [{letter: "V", word:"vingt"}, {letter: "I", word:"vingt"}, {letter: "N", word:"vingt"}, {letter: "G", word:"vingt"}, {letter: "T", word:"vingt"}, {letter: "-", word:"-"}, {letter: "C", word:"cinq_M"}, {letter: "I", word:"cinq_M"}, {letter: "N", word:"cinq_M"}, {letter: "Q", word:"cinq_M"}, {letter: "U", word:""}],
    [{letter: "E", word:"et_D"}, {letter: "T", word:"et_D"}, {letter: "S", word:""}, {letter: "D", word:"demie"}, {letter: "E", word:"demie"}, {letter: "M", word:"demie"}, {letter: "I", word:"demie"}, {letter: "E", word:"demie"}, {letter: "P", word:""}, {letter: "A", word:""}, {letter: "M", word:""}]
];

const build_letters_grid = (wrapper_element) => {
    letters_grid.forEach((letters_line) => {
        const newLine = create_new_element('div', ['letter-lines'])
        wrapper_element.appendChild(newLine);
        letters_line.forEach((letterObj) => {

            const newLetter = create_new_element('div', ['letter'])
            newLetter.innerText = letterObj.letter;
            if(letterObj.word !== ""){
                newLetter.setAttribute('data-word', letterObj.word)
            }
            newLine.appendChild(newLetter);
        })
    })
}

export {build_letters_grid};