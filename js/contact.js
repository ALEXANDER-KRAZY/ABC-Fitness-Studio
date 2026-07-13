// ======================================
// ABC Fitness Studio
// Contact Form
// Uses localStorage
// ======================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validation

        if (name === "" || email === "" || message === "") {

            alert("Please complete all fields.");

            return;

        }

        // Email validation

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            alert("Please enter a valid email address.");

            return;

        }

        // Minimum message length

        if (message.length < 10) {

            alert("Your message should contain at least 10 characters.");

            return;

        }

        // Retrieve previous enquiries

        let enquiries =
            JSON.parse(localStorage.getItem("contactMessages")) || [];

        // Create enquiry object

        const enquiry = {

            name: name,

            email: email,

            message: message,

            submitted:
                new Date().toLocaleString()

        };

        enquiries.push(enquiry);

        // Save to localStorage

        localStorage.setItem(
            "contactMessages",
            JSON.stringify(enquiries)
        );

        alert("Thank you for your message. We will contact you soon.");

        contactForm.reset();

    });

}
