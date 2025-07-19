// Initialize EmailJS with your Public Key
(function () {
  emailjs.init("Cy7u6p4ew9h9B8oDZ"); // Replace with your actual EmailJS Public Key
})();

// Add event listener to the contact form
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs
      .sendForm("service_5rspem7", "template_z7bj9nq", this) // Replace with your Service ID and Template ID
      .then(
        function (response) {
          showFormMessage("Message sent successfully!", "success"); // Show success message
        },
        function (error) {
          showFormMessage(
            "Failed to send message. Please try again later.",
            "danger"
          ); // Show error message
        }
      );

    // Clear form after submission
    this.reset();
  });

// Function to display form messages
function showFormMessage(message, type) {
  const formMessage = document.getElementById("formMessage");
  formMessage.className = `alert alert-${type}`;
  formMessage.style.color = type === "success" ? "green" : "red";
  formMessage.textContent = message;

  // Automatically remove message after 10 seconds
  setTimeout(() => {
    formMessage.textContent = "";
  }, 10000);
}
