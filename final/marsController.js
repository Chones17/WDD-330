/* Imports */
import { marsAPI } from './marsModel.js';
import { cleanMars } from './marsView.js';

/* Validate User Data */
export function validate() {
    
    // Declare function variables.
    const validate = document.querySelector('#submit');

    validate.addEventListener ('click', ()=> {

        // console.log('validate() loaded correctly.'); // Remove for production.

        // Clean any previous DOM manipulation.
        cleanMars();

        // Declare validation and DOM manipulation variables.
        const input = document.querySelector('#date').value;
        const regex = /20[1-2][0-9]\-[0-1][0-9]\-[0-3][0-9]/;
        const section = document.querySelector('section:nth-child(2)');
        const span = document.createElement('span');
        const h3 = document.createElement('h3');

        // Set value to empty for user experience.
        document.getElementById('date').value = '';

        // Test value against regular expression and date to validate format.
        if (!regex.test(input) || input < '2011-11-26') {
            span.innerHTML = 'Date must be in yyyy-mm-dd format and after 2011-11-25.';
            section.appendChild(span);
        } else {
            h3.innerHTML = `${input}`;
            section.appendChild(h3);

            // Declare variable for event listener.
            const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${input}&page=1&api_key=DEMO_KEY`;

            // Call marsData() with input.
            marsAPI(url);
        }
    })
}