/**
 * Create a new Dom Element
 * @param tagName
 * @param className
 * @returns {*}
 */
const create_new_element = (tagName, className=[]) => {
    const el = document.createElement(tagName);
    if(className.length){
        el.classList.add(...className);
    }
    return el;
}
export {create_new_element}