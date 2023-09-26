/**
 * Create and return a new Dom Element
 * @param tagName
 * @param className
 * @returns {Element}
 */
const create_new_element = (tagName, className=[]) => {
    const el = document.createElement(tagName);
    if(className.length){
        el.classList.add(...className);
    }
    return el;
}
export default create_new_element