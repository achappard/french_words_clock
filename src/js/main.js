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


/**
 * Launch and return a new setInterval that emits a "words_to_highlight" CustomEvent every second
 * @returns {number}
 */
const launchInterval = () => {
    return setInterval( () => grid_wrapper.dispatchEvent(new CustomEvent("words_to_highlight", { detail: get_words_highlighted() })), 1000);
}

let run = launchInterval()

/**
 * On window focus, launch a new setInterval
 */
window.addEventListener('focus', () => {
    if(run === null){
        run = launchInterval();
    }
})

/**
 * On window blur event, clear the setInterval
 */
window.addEventListener('blur', () => {
    clearInterval(run)
    run = null;
})