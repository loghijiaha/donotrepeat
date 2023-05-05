// popupScript.js

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'getClickEvents') {
        chrome.runtime.sendMessage(message, sendResponse);
        return true; // To keep the message channel open for sendResponse
    }
});
