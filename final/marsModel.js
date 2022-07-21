/* Imports */
import { renderMars } from "./marsView.js";

/* API Function */
export function marsAPI(url) {

    // Fetch Mars photos API.
    fetch(url)
        .then(response => {

            // console.log(`marsAPI() return Response: ${response}`); // Remove for production.
            
            // Handle the response of the HTTP request.
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.statusText);
            }
        })
        .then(data => {

            // console.log(`marsAPI() return data object: ${data}`); // Remove for production.

            // Loop through the data.photos object and pass result to renderMars().
            data.photos.forEach(element => {
                renderMars(element.img_src);
            });
        })
        .catch(error => {

            // Log errors from the Fetch API.
            console.error('There was a problem with the fetch operation: ', error);
        });
}