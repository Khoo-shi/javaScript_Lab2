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

    const rgb = buildRgbString(r, g, b);
    pageElement.style.backgroundColor = rgb;

    // Adjust text color based on brightness
    const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
    pageElement.style.color = luminance > 150 ? 'rgb(0,0,0)' : 'rgb(255,255,255)';

    // Debug info
    console.log('Background updated to', rgb);
  }

  // Hook slider input events
  redSlider.addEventListener('input', updateBackgroundFromSliders);
  greenSlider.addEventListener('input', updateBackgroundFromSliders);
  blueSlider.addEventListener('input', updateBackgroundFromSliders);

  // Initialize once when the page loads
  updateBackgroundFromSliders();
});



 
