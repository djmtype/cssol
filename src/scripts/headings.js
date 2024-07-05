function displayFontSize(headingId, fontSizeDisplayId) {
  var heading = document.getElementById(headingId);
  
  // Create a wrapper div and insert the heading and font size display span
  var wrapperDiv = document.createElement("div");
  heading.parentNode.replaceChild(wrapperDiv, heading);
  wrapperDiv.appendChild(heading);
  
  var fontSizeDisplay = document.createElement("span");
  fontSizeDisplay.id = fontSizeDisplayId;
  wrapperDiv.appendChild(fontSizeDisplay);

  // Function to update the font size display
  function updateFontSizeDisplay() {
    var style = window.getComputedStyle(heading);
    var fontSize = parseFloat(style.getPropertyValue("font-size"));
    var roundedFontSize = Math.round(fontSize);
    fontSizeDisplay.innerHTML = "<code>" + roundedFontSize + "px</code>";
  }

  // Initial call to display the font size
  updateFontSizeDisplay();

  // Create a ResizeObserver to watch for changes in the heading size
  var resizeObserver = new ResizeObserver(updateFontSizeDisplay);
  resizeObserver.observe(heading);
}

// Call the function for each heading level
displayFontSize("heading-level-1", "fontSizeDisplay1");
displayFontSize("heading-level-2", "fontSizeDisplay2");
displayFontSize("heading-level-3", "fontSizeDisplay3");
displayFontSize("heading-level-4", "fontSizeDisplay4");
