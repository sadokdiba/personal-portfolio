// Initialize EmailJS and handle form submissions
document.addEventListener("DOMContentLoaded", function () {
    // 1. Initialize EmailJS with your Public Key (from EmailJS dashboard)
    //    Replace 'YOUR_PUBLIC_KEY' with the key you see in your EmailJS account.
    emailjs.init("YOUR_PUBLIC_KEY");
  
    // 2. Grab the contact form
    const form = document.querySelector(".contact-form");
  
    // 3. Listen for form submission
    if (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();
  
        // Extract input values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
  
        // Make sure fields are not empty (basic validation)
        if (!name || !email || !message) {
          alert("Please fill in all fields before submitting.");
          return;
        }
  
        // Set up the template parameters matching your EmailJS template
        // (Adjust these keys to match your EmailJS template variables)
        const templateParams = {
          from_name: name,
          reply_to: email,
          message: message,
        };
  
        // 4. Send the email via EmailJS
        //    Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with actual IDs from EmailJS
        emailjs
          .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
          .then(
            function (response) {
              console.log("SUCCESS!", response.status, response.text);
              alert("Your message has been sent successfully!");
              form.reset();
            },
            function (error) {
              console.error("FAILED...", error);
              alert("There was an error sending your message. Please try again later.");
            }
          );
      });
    }
  });
  