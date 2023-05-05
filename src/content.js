// Add an event listener to capture click events on the document
document.addEventListener('click', function(event) {
    // Get the mouse coordinates
    var x = event.clientX;
    var y = event.clientY;

    // Create an object to store the captured data
    var clickData = {
        x: x,
        y: y,
        timestamp: Date.now() // Optionally include a timestamp
    };

    // Send the captured data to the background script
    chrome.runtime.sendMessage(clickData);
});