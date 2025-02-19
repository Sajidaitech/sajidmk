function addMeeting() {
    const log = document.getElementById("meeting-log");
    const dateTime = new Date().toLocaleString();
    const newEntry = document.createElement("li");
    newEntry.textContent = `Meeting on ${dateTime}`;
    log.appendChild(newEntry);
}

function addImage() {
    const gallery = document.getElementById("gallery-container");
    const imageInput = document.createElement("input");
    imageInput.type = "file";
    imageInput.accept = "image/*";
    imageInput.onchange = function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = document.createElement("img");
                img.src = e.target.result;
                img.style.width = "200px";
                img.style.margin = "10px";
                gallery.appendChild(img);
            };
            reader.readAsDataURL(file);
        }
    };
    imageInput.click();
}
function addMeeting() {
    // Get the input values for date and time
    const date = document.getElementById("meeting-date").value;
    const time = document.getElementById("meeting-time").value;

    // Check if both date and time are provided
    if (date && time) {
        // Create a new list item for the meeting
        const li = document.createElement("li");
        li.textContent = `Meeting on ${date} at ${time}`;

        // Append the list item to the meeting log
        document.getElementById("meeting-log").appendChild(li);

        // Optionally, clear the inputs after adding the meeting
        document.getElementById("meeting-date").value = "";
        document.getElementById("meeting-time").value = "";
    } else {
        alert("Please provide both date and time for the meeting.");
    }
}
