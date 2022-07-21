/*
Date: 7-20-2022
Author: Travis Stirling

1. Student can successfully build a simple Single page Application (SPA) using HTML, 
Javascript, and CSS.
* SPA: HTML (index.html), JavaScript (index.js, marsController.js, marsModel.js, marsView.js), 
and CSS (global.css, primary.css, secondary.css, and tertiary.css).

2. Student applies mobile application design best practices in their applications.
* Designed the website first for mobile applications, then expanded for larger viewports
using media queries. See (primary.css lines 35-53).

3. Student can manipulate the DOM with Javascript.
* See (marsView.js).

4. Student can effectively utilize event listeners with Javascript to handle user events.
* See (marsController.js lines 9-11).

5. Student is able to pull data from an external source (file or API) with Javascript.
* See (marsModel.js). 

6. Student makes some effort at organizing their code using objects, classes, modules, 
separation of concerns, or an architectural philosophy such as MVC.
* See (marsModel.js, marsView.js, and marsController.js).

7. Student makes effective use of CSS transitions/animations in their applications.
* See (tertiary.css lines 24-31).

*** I have been working toward a 4.0 for the past three years. I need a 95% or higher on 
this assignment to maintain that 4.0. I believe I have met all of the requirements. However, 
if any of these requirements have not met the expectation, I am willing to add/redo/replace 
whatever is needed to meet 95% + ******

*** Thank you for a great semester! ***
*/

/* Imports */
import { validate } from './marsController.js';

// console.log('index.js loaded correctly.'); // Remove for production.

/* Call Validation Function */
validate();