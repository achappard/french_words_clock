import '../scss/app.scss'
import {build_letters_grid} from "./utils/letters-grid.js";

/**
 * Wrapper for the letter grid
 * @type {Element}
 */
const grid_wrapper = document.querySelector('#grid-wrapper')

/**
 * Build the grid into the wrapper
 */
build_letters_grid(grid_wrapper);