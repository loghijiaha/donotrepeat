// popupLogic.js

document.getElementById('captureButton').addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'startCapture' });
});

chrome.runtime.sendMessage({ action: 'getClickEvents' }, (clickEvents) => {
    console.log(clickEvents);
});
