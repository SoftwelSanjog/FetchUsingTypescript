// Scripts/ajaxHandler.ts

// GET request
function getData() {
    fetch("/Sample/GetData", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log("Data received from server:", data);
        })
        .catch(error => console.error("Error fetching data:", error));
}

// POST request
interface YourModel {
    name: string;
    age: number;
}

function postData(model: YourModel) {
    fetch("/Sample/PostData", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(model)
    })
        .then(response => response.json())
        .then(data => {
            console.log("Response from server:", data);
        })
        .catch(error => console.error("Error posting data:", error));
}

// Usage
//getData();
//postData({ name: "John Doe", age: 30 });
