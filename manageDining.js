let restaurants = [
  {id: "P001", name: "Edge", type: "Fast Casual", location: "Pollock", rating: 0, notes: ""},
  {id: "P002", name: "Fresco", type: "Cafe", location: "Pollock", rating: 0, notes: ""},
  {id: "P003", name: "Market", type: "Cafe", location: "Pollock", rating: 0, notes: ""},
  {id: "P004", name: "Asia Kitchen", type: "Fast Casual", location: "Pollock", rating: 0, notes: ""},
  {id: "P005", name: "Pollock Commons Buffet", type: "Buffet", location: "Pollock", rating: 0, notes: ""},

  {id: "S001", name: "Amici", type: "Fast Casual", location: "South", rating: 0, notes: ""},
  {id: "S002", name: "Bowls @ South", type: "Fast Casual", location: "South", rating: 0, notes: ""},
  {id: "S003", name: "Choolaah Indian BBQ", type: "Fast Casual", location: "South", rating: 0, notes: ""},
  {id: "S004", name: "Edge", type: "Fast Casual", location: "South", rating: 0, notes: ""},
  {id: "S005", name: "Market", type: "Cafe", location: "South", rating: 0, notes: ""},
  {id: "S006", name: "On a Roll", type: "Fast Casual", location: "South", rating: 0, notes: ""},
  {id: "S007", name: "Redifer Grill", type: "Buffet", location: "South", rating: 0, notes: ""},
  {id: "S008", name: "Southside Buffet", type: "Buffet", location: "South", rating: 0, notes: ""},

  {id: "E001", name: "Aloha Fresh Poke Bowls", type: "Fast Casual", location: "East", rating: 0, notes: ""},
  {id: "E002", name: "Bowls @ East", type: "Fast Casual", location: "East", rating: 0, notes: ""},
  {id: "E003", name: "East Food District Buffet", type: "Buffet", location: "East", rating: 0, notes: ""},
  {id: "E004", name: "East Philly Cheesesteaks", type: "Fast Casual", location: "East", rating: 0, notes: ""},
  {id: "E005", name: "Edge", type: "Fast Casual", location: "East", rating: 0, notes: ""},
  {id: "E006", name: "Fresco", type: "Cafe", location: "East", rating: 0, notes: ""},
  {id: "E007", name: "Grillers", type: "Fast Casual", location: "East", rating: 0, notes: ""},
  {id: "E008", name: "Market", type: "Cafe", location: "East", rating: 0, notes: ""},
  {id: "E009", name: "On a Roll", type: "Fast Casual", location: "East", rating: 0, notes: ""},
  {id: "E010", name: "Pizza", type: "Fast Casual", location: "East", rating: 0, notes: ""},
  {id: "E011", name: "Pure", type: "Cafe", location: "East", rating: 0, notes: ""},

  {id: "N001", name: "Greens & Grains", type: "Fast Casual", location: "North", rating: 0, notes: ""},
  {id: "N002", name: "Halal Cart", type: "Fast Casual", location: "North", rating: 0, notes: ""},
  {id: "N003", name: "Market", type: "Cafe", location: "North", rating: 0, notes: ""},
  {id: "N004", name: "Northside Buffet", type: "Buffet", location: "North", rating: 0, notes: ""},

  {id: "W001", name: "Edge", type: "Fast Casual", location: "West", rating: 0, notes: ""},
  {id: "W002", name: "Market", type: "Cafe", location: "West", rating: 0, notes: ""},
  {id: "W003", name: "State Chik’n", type: "Fast Casual", location: "West", rating: 0, notes: ""},
  {id: "W004", name: "Waring Square Buffet", type: "Buffet", location: "West", rating: 0, notes: ""},

  {id: "H001", name: "Blue Burrito", type: "Fast Casual", location: "Hub", rating: 0, notes: ""},
  {id: "H002", name: "Burger King", type: "Fast Casual", location: "Hub", rating: 0, notes: ""},
  {id: "H003", name: "Cow & Cookie", type: "Cafe", location: "Hub", rating: 0, notes: ""},
  {id: "H004", name: "Grate Chee", type: "Fast Casual", location: "Hub", rating: 0, notes: ""},
  {id: "H005", name: "Hibachi-San", type: "Fast Casual", location: "Hub", rating: 0, notes: ""},
  {id: "H006", name: "Jamba", type: "Cafe", location: "Hub", rating: 0, notes: ""},
  {id: "H007", name: "McAlister’s Deli", type: "Cafe", location: "Hub", rating: 0, notes: ""},
  {id: "H008", name: "Panda Express", type: "Fast Casual", location: "Hub", rating: 0, notes: ""},
  {id: "H009", name: "Sbarro", type: "Fast Casual", location: "Hub", rating: 0, notes: ""},
  {id: "H010", name: "Slim Chickens", type: "Fast Casual", location: "Hub", rating: 0, notes: ""},
  {id: "H011", name: "Soup & Garden", type: "Cafe", location: "Hub", rating: 0, notes: ""}
];

function renderRestaurants(filter="") {
  const output = $("#restaurantOutput");
  output.html(""); // clear

  let filtered = restaurants.filter(r => 
    r.name.toLowerCase().includes(filter.toLowerCase()) || 
    r.location.toLowerCase().includes(filter.toLowerCase())
  );

  filtered.forEach(r => {
    output.append(`
      <div class="card mb-2 p-2">
        <strong>${r.name}</strong> (${r.type}) - ${r.location}<br>
        ID: ${r.id} | Rating: ${r.rating}<br>
        Notes: ${r.notes ? r.notes : "N/A"}
      </div>
    `);
  });
}

renderRestaurants();

$("#searchInput").on("input", function() {
  renderRestaurants($(this).val());
});

$("#manageForm").on("submit", function(e) {
  e.preventDefault();

  const id = $("#restaurantId").val();
  const name = $("#restaurantName").val();
  const type = $("#restaurantType").val();
  const location = $("#diningArea").val();
  const rating = parseFloat($("#avgRating").val());
  const notes = $("#notes").val();

  let existing = restaurants.find(r => r.id === id);
  if (existing) {
    existing.name = name;
    existing.type = type;
    existing.location = location;
    existing.rating = rating;
    existing.notes = notes;
  } else {
    restaurants.push({id, name, type, location, rating, notes});
  }

  renderRestaurants();
  $(this)[0].reset(); 
});