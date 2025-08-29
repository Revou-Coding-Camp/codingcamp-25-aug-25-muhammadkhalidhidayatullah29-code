 greet();

/// Great the user
function greet() {
    /// Get the username from the promt
    let username = prompt("Enter your name:");

    /// Display the username on the webpage
    document.getElementById("username").innerText = username;
}

/// Validate the form 
function validateForm () {
    /// Get the name input value
    let name = document.getElementById("name-input").value;

    /// Validate the name input
    if (name === "") {
        /// Show an alert if the name is empty
        alert("Name must be filled out");
    }

    /// Validate the email input
    let email = document.getElementById("email").value;

    /// Check if the email is empty
    if (email === "") {
        alert("Email must be filled out");
   }

   /// Validate the message input
    let message = document.getElementById("message").value;

    /// Check if the message is empty
    if (message === "") {
        alert("Message must be filled out");
    } else {
        /// Show a thank you alert if the form is valid 
        alert("Thank you, " + name + ". Your message has been sent!");
    }
 }