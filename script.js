let reviews = [];
let selectedRating = 0;

const stars = document.querySelectorAll("#stars span");

// ⭐ Star Click Logic
stars.forEach(star => {
    star.addEventListener("click", function () {
        selectedRating = this.getAttribute("data-value");
        highlightStars(selectedRating);
    });
});

function highlightStars(rating) {
    stars.forEach(star => {
        if (star.getAttribute("data-value") <= rating) {
            star.textContent = "★";
        } else {
            star.textContent = "☆";
        }
    });
}

document.getElementById("ratingForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let year = document.getElementById("year").value;
    let restaurant = document.getElementById("restaurant").value;
    let comment = document.getElementById("comment").value.trim();

    if (name === "" || email === "" || year === "" || restaurant === "" || selectedRating === 0) {
        alert("Please complete all required fields.");
        return;
    }

    let review = {
        name: name,
        email: email,
        year: year,
        restaurant: restaurant,
        rating: selectedRating,
        comment: comment
    };

    reviews.push(review);
    displayReviews();

    document.getElementById("ratingForm").reset();
    highlightStars(0);
    selectedRating = 0;
});

function displayReviews() {
    let output = document.getElementById("output");
    output.innerHTML = "";

    reviews.forEach((review, index) => {
        output.innerHTML += `
            <div class="card mb-3">
                <div class="card-body">
                    <h5>${review.name} (${review.year})</h5>
                    <p><strong>Restaurant:</strong> ${review.restaurant}</p>
                    <p><strong>Rating:</strong> ${"★".repeat(review.rating)}</p>
                    <p>${review.comment}</p>
                </div>
            </div>
        `;
    });

    console.log(JSON.stringify(reviews, null, 2));
}
