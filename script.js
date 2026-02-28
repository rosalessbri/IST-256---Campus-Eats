let reviews = JSON.parse(localStorage.getItem('reviews')) || [];

const restaurantData = {
  "Pollock": ["Edge", "Fresco", "Market", "Asia Kitchen", "Pollock Commons Buffet"],
  "South": ["Amici", "Bowls @ South", "Choolaah Indian BBQ", "Edge", "Market", "On a Roll", "Redifer Grill", "Southside Buffet"],
  "East": ["Aloha Fresh Poke Bowls", "Bowls @ East", "East Food District Buffet", "East Philly Cheesesteaks", "Edge", "Fresco", "Grillers", "Market", "On a Roll", "Pizza", "Pure"],
  "North": ["Greens & Grains", "Halal Cart", "Market", "Northside Buffet"],
  "West": ["Edge", "Market", "State Chik’n", "Waring Square Buffet"],
  "Hub": ["Blue Burrito", "Burger King", "Cow & Cookie", "Grate Chee", "Hibachi-San", "Jamba", "McAlister’s Deli", "Panda Express", "Sbarro", "Slim Chickens", "Soup & Garden"]
};

const locationSelect = document.getElementById('location');
const restaurantSelect = document.getElementById('restaurant');
const memberForm = document.getElementById('memberForm');
const output = document.getElementById('usersOutput');
const topRankingsContainer = document.getElementById('topRankings');

if(locationSelect) {
  locationSelect.addEventListener('change', function() {
    const selectedLocation = this.value;
    restaurantSelect.innerHTML = '<option value="">Select Restaurant</option>';
    if (selectedLocation && restaurantData[selectedLocation]) {
      restaurantData[selectedLocation].forEach(r => {
        const option = document.createElement('option');
        option.value = r;
        option.textContent = r;
        restaurantSelect.appendChild(option);
      });
    }
  });
}

if(memberForm) {
  memberForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const review = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      year: document.getElementById('year').value,
      dorm: document.getElementById('dorm').value,
      phone: document.getElementById('phone').value,
      location: document.getElementById('location').value,
      restaurant: document.getElementById('restaurant').value,
      rating: Number(document.getElementById('rating').value),
      comment: document.getElementById('comment').value
    };

    reviews.push(review);
    localStorage.setItem('reviews', JSON.stringify(reviews));

    displayReviews();
    updateTopRankings();

    memberForm.reset();
  });
}

function displayReviews() {
  if(!output) return;
  output.innerHTML = '';
  reviews.forEach(r => {
    const card = document.createElement('div');
    card.className = 'card mb-2 p-2';
    card.innerHTML = `
      <strong>${r.name}</strong> (${r.year}) - ${r.dorm}<br>
      Location: ${r.location} | Restaurant: ${r.restaurant} | Rating: ${r.rating}<br>
      Comment: ${r.comment ? r.comment : 'N/A'}
    `;
    output.appendChild(card);
  });
}

function updateTopRankings() {
  if(!topRankingsContainer) return;

  const restaurantMap = {};
  reviews.forEach(r => {
    if (!restaurantMap[r.restaurant]) restaurantMap[r.restaurant] = { total: 0, count: 0 };
    restaurantMap[r.restaurant].total += r.rating;
    restaurantMap[r.restaurant].count += 1;
  });

  const avgRatings = Object.keys(restaurantMap).map(name => ({
    name,
    avg: restaurantMap[name].total / restaurantMap[name].count
  }));

  avgRatings.sort((a, b) => b.avg - a.avg);

  topRankingsContainer.innerHTML = '';
  avgRatings.slice(0, 3).forEach(r => {
    const card = document.createElement('div');
    card.className = 'col-md-4 mb-3';
    card.innerHTML = `
      <div class="card p-3 shadow-sm">
        <h5>${r.name}</h5>
        <p>Average Rating: ${r.avg.toFixed(1)} ⭐</p>
      </div>
    `;
    topRankingsContainer.appendChild(card);
  });
}

displayReviews();
updateTopRankings();

