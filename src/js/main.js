import '../scss/app.scss'
import {build_letters_grid} from "./utils/letters-grid.js";
import {display_time, get_message} from "./utils/display.js";

/**
 * Wrapper for the letter grid
 * @type {Element}
 */
const grid_wrapper = document.querySelector('#grid-wrapper');
let timer = null;

/**
 * Build the grid into the wrapper
 */
build_letters_grid(grid_wrapper);

// launch the setinterval
// timer = setInterval(display_time, 1000);


window.clock = get_message;