const create_new_element = (tagName, className=[]) => {
    const el = document.createElement(tagName);
    el.classList.add(...className);
    return el;
}
export {create_new_element}