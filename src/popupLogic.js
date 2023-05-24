// popupLogic.js


document.addEventListener('DOMContentLoaded', function() {
    var runStartButton = document.getElementById('captureButton');
    var runStopButton = document.getElementById('stopButton');

    runStartButton.addEventListener('click', function(event) {
        var clickData = {
            type: "startCapture",
            x: 0,
            y: 0,
            timestamp: Date.now() // Optionally include a timestamp
        };
        chrome.runtime.sendMessage(clickData);

        // Change the button name and ID
        runStopButton.style.display = 'block';
        runStartButton.style.display = 'none';
        runStopButton.textContent = 'Stop';
        flag = true

    }, false);
    runStopButton.addEventListener('click', function() {
        var clickData = {
            type: "stopCapture",
            x: 0,
            y: 0,
            timestamp: Date.now() // Optionally include a timestamp
        };
        chrome.runtime.sendMessage(clickData);

        runStopButton.style.display = 'none';
        runStartButton.style.display = 'block';
        runStopButton.textContent = 'Record';

        window.close();


    }, false);
});
