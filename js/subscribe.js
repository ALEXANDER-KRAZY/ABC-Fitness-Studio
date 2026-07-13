// =====================================
// ABC Fitness Studio
// Newsletter Subscription
// =====================================

const subscribeForm = document.getElementById("subscribeForm");

if (subscribeForm) {

    subscribeForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const email =
            document.getElementById("email").value.trim();

        if (email === "") {

            alert("Please enter your email address.");

            return;

        }

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            alert("Please enter a valid email address.");

            return;

        }

        alert(
            "Thank you for subscribing to ABC Fitness Studio!"
        );

        subscribeForm.reset();

    });

}
