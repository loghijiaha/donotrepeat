// backgroundScript.js

// Open a connection to the IndexedDB database
var flag = false;
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
        // if data.type === "click" then execute the following
        console.log("BEFORE FLAG " + flag);

        if (flag === true && message.type === "click") {
            saveClickData(message);
        } else if (message.type === "startCapture") {
            flag = true;
            console.log("AFTER FLAG " + flag);
        } else if (message.type === "stopCapture") {
            flag = false;
            console.log("AFTER FLAG " + flag);
        }

    });
};

request.onupgradeneeded = function(event) {
    var db = event.target.result;

    // Create an object store to store the click data
    var objectStore = db.createObjectStore("clicks", { keyPath: "timestamp" });
};

function saveClickData(data) {

    var transaction = db.transaction("clicks", "readwrite");
    var objectStore = transaction.objectStore("clicks");

    var request = objectStore.add(data);

    request.onsuccess = function(event) {
        console.log("Click data saved successfully." + data.timestamp);
    };

    request.onerror = function(event) {
        console.error("Error saving click data:", event.target.errorCode);
    };

    const request1 = objectStore.get(data.timestamp);

    request1.onerror = (event) => {
        // Handle errors!
    };
    request1.onsuccess = (event) => {
        // Do something with the request.result!
        console.log(`Name for x axis is ${request1.result.type}`);
    };
}
