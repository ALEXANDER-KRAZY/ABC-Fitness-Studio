function saveForm(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const feedback =
        document.getElementById("feedback").value;

    const order =
        document.getElementById("order").value;

    localStorage.setItem(
        "customerName",
        name
    );

    localStorage.setItem(
        "customerEmail",
        email
    );

    localStorage.setItem(
        "customerFeedback",
        feedback
    );

    localStorage.setItem(
        "customOrder",
        order
    );

    alert(
        "Thank you for your feedback!"
    );

    document.getElementById(
        "feedbackForm"
    ).reset();
}
