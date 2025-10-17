//  Get all the HTML elements we need
const redSlider = document.getElementById('red');
const greenSlider = document.getElementById('green');
const blueSlider = document.getElementById('blue');

const pageBody = document.body;

// Add event listeners for when slider values change
redSlider.addEventListener('input', changeBackgroundColor);
greenSlider.addEventListener('input', changeBackgroundColor);
blueSlider.addEventListener('input', changeBackgroundColor);
