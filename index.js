// Add interactivity to the form
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent actual form submission
    
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    // Display a confirmation message
    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent successfully.`);
        this.reset(); // Reset form fields
    } else {
        alert("Please fill out all fields before submitting.");
    }
});
