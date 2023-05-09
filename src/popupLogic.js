// popupLogic.js

document.getElementById("captureButton").addEventListener('click', () => {
    console.log("Started 1");
    chrome.runtime.sendMessage({ action: "startCapture" });
});


document.getElementById("stopButton").addEventListener('click', () => {
    console.log("Ended 1");
    chrome.runtime.sendMessage({ action: "stopCapture" });
});
