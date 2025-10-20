//  Get all the HTML elements we need
const redSlider = document.getElementById('red');
const greenSlider = document.getElementById('green');
const blueSlider = document.getElementById('blue');

const pageBody = document.body;

// Add event listeners for when slider values change
redSlider.addEventListener('input', changeBackgroundColor);
greenSlider.addEventListener('input', changeBackgroundColor);
blueSlider.addEventListener('input', changeBackgroundColor);

//  change the background color of the page
function changeBackgroundColor() {
  // Get the values of each color
  const red = redSlider.value;
  const green = greenSlider.value;
  const blue = blueSlider.value;

  
  const rgbColor = `rgb(${red}, ${green}, ${blue})`;

  // Applies the new background color to the page
  pageBody.style.backgroundColor = rgbColor;

  // Print the color in console for testing 
  console.log('Color changed to:', rgbColor);
}
