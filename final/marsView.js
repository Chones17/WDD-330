/* Render Mars Photos */
export function renderMars(content) {

    // console.log(`renderMars() loaded correctly: ${content}`); // Remove for production.

    // Declare function variables
    const ul = document.querySelector('#mars-photos');
    const li = document.createElement('li');
    const img = document.createElement('img');

    // Add image to list item and list item to unordered list.
    img.setAttribute('src', content);
    li.appendChild(img);
    ul.appendChild(li);
}

/* Remove any previous DOM manipulation. */
export function cleanMars() {

    // console.log('cleanMars() loaded correctly.'); // Remove for production.

    // Declare function variables.
    const removeSpan = document.querySelector('span');
    const removeH3 = document.querySelector('h3');
    const removeLi = document.querySelectorAll('li');

    // Remove previous span and h3 implementations.
    if (removeSpan) {
        removeSpan.parentElement.removeChild(removeSpan);
    } else if (removeH3) {
        removeH3.parentElement.removeChild(removeH3);
    } 

    // Remove previous mars photo list items.
    for (let i = 0; i < removeLi.length; i++) {
        removeLi.item(i).parentElement.removeChild(removeLi.item(i));
    }
}