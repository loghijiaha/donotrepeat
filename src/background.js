// backgroundScript.js

// Open a connection to the IndexedDB database
var db;
var request = indexedDB.open('mouseClickDB', 1);

request.onerror = function(event) {
    console.error("Error opening indexedDB:", event.target.errorCode);
};

request.onsuccess = function(event) {
    db = event.target.result;
    console.log("IndexedDB connection established.");

    // Handle the received click data
    chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
        // Store the received data in IndexedDB
        saveClickData(message);
    });
};

request.onupgradeneeded = function(event) {
    var db = event.target.result;

    // Create an object store to store the click data
    var objectStore = db.createObjectStore("clicks", { keyPath: "timestamp" });
};

function saveClickData(data) {
    var transaction = db.transaction(["clicks"], "readwrite");
    var objectStore = transaction.objectStore("clicks");
    alert("Received");

    var request = objectStore.add(data);

    request.onsuccess = function(event) {
        console.log("Click data saved successfully.");
    };

    request.onerror = function(event) {
        console.error("Error saving click data:", event.target.errorCode);
    };
}
