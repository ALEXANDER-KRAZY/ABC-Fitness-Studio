// =====================================
// ABC Fitness Studio
// Shared JavaScript
// =====================================

// ------------------------------
// Smooth scrolling for anchor links
// ------------------------------

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ------------------------------
// Testimonial Form
// ------------------------------

const testimonialForm =
    document.getElementById("testimonialForm");

if (testimonialForm) {

    loadTestimonials();

    testimonialForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const member =
            document.getElementById("memberName").value.trim();

        const testimonial =
            document.getElementById("testimonial").value.trim();

        if (member === "" || testimonial === "") {

            alert("Please complete all fields.");

            return;

        }

        const testimonials =
            JSON.parse(localStorage.getItem("testimonials")) || [];

        testimonials.push({

            member: member,

            testimonial: testimonial

        });

        localStorage.setItem(

            "testimonials",

            JSON.stringify(testimonials)

        );

        alert("Thank you for sharing your experience!");

        testimonialForm.reset();

        loadTestimonials();

    });

}

// ------------------------------
// Display Testimonials
// ------------------------------

function loadTestimonials() {

    const container =
        document.getElementById("testimonialList");

    if (!container) return;

    let testimonials =
        JSON.parse(localStorage.getItem("testimonials")) || [];

    let html = "";

    // Default testimonials

    html += `
    <div class="card">
        <div class="card-body">
            <h3>Emily Johnson</h3>
            <p>
            The trainers are supportive and motivating.
            Every session leaves me feeling stronger.
            </p>
        </div>
    </div>
    `;

    html += `
    <div class="card">
        <div class="card-body">
            <h3>David Kim</h3>
            <p>
            The kickboxing sessions are fantastic.
            I have gained confidence and improved my fitness.
            </p>
        </div>
    </div>
    `;

    testimonials.forEach(function(item){

        html += `

        <div class="card">

            <div class="card-body">

                <h3>${item.member}</h3>

                <p>${item.testimonial}</p>

            </div>

        </div>

        `;

    });

    container.innerHTML = html;

}
