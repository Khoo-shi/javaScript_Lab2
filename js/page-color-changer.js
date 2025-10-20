
document.addEventListener('DOMContentLoaded', () => {
  // Grab sliders and page element
  const redSlider = document.getElementById('red');
  const greenSlider = document.getElementById('green');
  const blueSlider = document.getElementById('blue');
  const pageElement = document.documentElement;


  // Build rgb string
  function buildRgbString(r, g, b) {
    return `rgb(${r}, ${g}, ${b})`;
  }

  // Update background
  function updateBackgroundFromSliders() {
    const r = parseInt(redSlider.value, 10) || 0;
    const g = parseInt(greenSlider.value, 10) || 0;
    const b = parseInt(blueSlider.value, 10) || 0;
    pageElement.style.backgroundColor = buildRgbString(r, g, b);
  }

  // Hook events
  redSlider.addEventListener('input', updateBackgroundFromSliders);
  greenSlider.addEventListener('input', updateBackgroundFromSliders);
  blueSlider.addEventListener('input', updateBackgroundFromSliders);

  // initialize
  updateBackgroundFromSliders();
});

