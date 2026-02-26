// JavaScript code for interactive website functionality

// Get element by ID
function getElement(id) {
  return document.getElementById(id);
}

// Add click event listener to button
function addButtonClick() {
  const button = document.querySelector('button');
  if (button) {
    button.addEventListener('click', function() {
      alert('Button clicked!');
      console.log('Button was clicked');
    });
  }
}

// Get input value
function getInputValue() {
  const input = document.querySelector('input[type="text"]');
  if (input) {
    console.log('Input value:', input.value);
    return input.value;
  }
}

// Clear input field
function clearInput() {
  const input = document.querySelector('input[type="text"]');
  if (input) {
    input.value = '';
  }
}

// Change text color
function changeTextColor(elementId, color) {
  const element = document.getElementById(elementId);
  if (element) {
    element.style.color = color;
  }
}

// Print message to console
console.log('JavaScript file loaded successfully!');

// Initialize when page loads
window.addEventListener('load', function() {
  console.log('Page fully loaded');
  addButtonClick();
});
