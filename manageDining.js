let restaurants = [
  {id: "P001", name: "Edge", type: "Fast Casual", location: "Pollock", rating: 0, notes: ""}
];


function renderRestaurants(filter="") {
  const output = $("#restaurantOutput");
  output.html("");

  let filtered = restaurants.filter(r =>
    r.name.toLowerCase().includes(filter.toLowerCase()) ||
    r.location.toLowerCase().includes(filter.toLowerCase())
  );

  filtered.forEach(r => {
    output.append(`
      <div class="card mb-2 p-2">
        <strong>${r.name}</strong> (${r.type}) - ${r.location}<br>
        ID: ${r.id} | Rating: ${r.rating}<br>
        Notes: ${r.notes || "N/A"}
      </div>
    `);
  });

  updateReact(); 
}

renderRestaurants();


$("#searchInput").on("input", function() {
  renderRestaurants($(this).val());
});


$("#restaurantName").on("input", function() {
  $(this).css("border", "2px solid green");
});



$("#manageForm").on("submit", function(e) {
  e.preventDefault();

  const data = {
    id: $("#restaurantId").val(),
    name: $("#restaurantName").val(),
    type: $("#restaurantType").val(),
    location: $("#diningArea").val(),
    rating: parseFloat($("#avgRating").val()),
    notes: $("#notes").val()
  };

 
  if (!data.id || !data.name || !data.type || !data.location) {
    alert("Fill all required fields");
    return;
  }

  if (data.rating < 0 || data.rating > 5) {
    alert("Rating must be between 0 and 5");
    return;
  }

 
  const jsonData = JSON.stringify(data, null, 2);
  console.log("JSON:", jsonData);
  $("#jsonOutput").text(jsonData);

 
  let existing = restaurants.find(r => r.id === data.id);
  if (existing) {
    Object.assign(existing, data);
  } else {
    restaurants.push(data);
  }

  renderRestaurants();

  
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "POST",
    data: jsonData,
    contentType: "application/json",
    success: function(response) {
      console.log("Response:", response);
      alert("Submitted successfully!");
    },
    error: function() {
      alert("Error sending data");
    }
  });

  this.reset();
});


function SummaryComponent() {
  return React.createElement(
    "div",
    { className: "alert alert-info" },
    "Total Restaurants Managed: " + restaurants.length
  );
}

function updateReact() {
  ReactDOM.createRoot(document.getElementById("reactSummary"))
    .render(React.createElement(SummaryComponent));
}

updateReact();