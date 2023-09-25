import '../scss/app.scss'
import {build_letters_grid} from "./utils/letters-grid.js";
import {get_words_highlighted} from "./utils/display.js";


/**
 * Wrapper for the letter grid
 * @type {Element}
 */
const grid_wrapper = document.querySelector('#app');


/**
 * Build the grid into the wrapper
 */
build_letters_grid(grid_wrapper);


const launchInterval = () => {
    return setInterval( () => grid_wrapper.dispatchEvent(new CustomEvent("words_to_hightlight", { detail: get_words_highlighted() })), 1000);
}

let run = launchInterval()


window.addEventListener('focus', () => {
    if(run === null){
        run = launchInterval();
    }
})
window.addEventListener('blur', () => {
    clearInterval(run)
    run = null;
})