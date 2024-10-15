// Scripts/ajaxHandler.ts
// GET request
function getData() {
    fetch("/Sample/GetData", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(function (response) { return response.json(); })
        .then(function (data) {
        console.log("Data received from server:", data);
    })
        .catch(function (error) { return console.error("Error fetching data:", error); });
}
function postData(model) {
    fetch("/Sample/PostData", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(model)
    })
        .then(function (response) { return response.json(); })
        .then(function (data) {
        console.log("Response from server:", data);
    })
        .catch(function (error) { return console.error("Error posting data:", error); });
}
// Usage
//getData();
//postData({ name: "John Doe", age: 30 });
//# sourceMappingURL=ajaxHandler.js.map