const diningData = {
  "South": [
    { name: "Amici", image: "https://liveon.psu.edu/sites/liveon/files/styles/carousel_popover_crop_w600/public/2026-01/amici-logo-for-website.png?itok=gMN2GmUK", description: "Fast Casual Italian Food" },
    { name: "Bowls @ South", image: "https://liveon.psu.edu/sites/liveon/files/styles/carousel_popover_crop_w600/public/2021-05/up_fs_sfd_photo_bowls_1200x800.jpg?itok=RKU_kfYD", description: "Acai Bowls Food Court" },
    { name: "Choolaah Indian BBQ", image: "https://liveon.psu.edu/sites/liveon/files/styles/carousel_popover_crop_w600/public/2023-08/UP_FS_SFD_Photo_Choolaah_1200x800.jpg?itok=xpTeDebu", description: "Fast Casual Indian Food" },
    { name: "Edge", image: "https://liveon.psu.edu/sites/liveon/files/styles/carousel_popover_crop_w600/public/2021-05/up_fs_sfd_photo_edge_1200x800.jpg?itok=Zq3-9-D0", description: "Coffee, Cafes & Juice Bars" },
    { name: "Market", image: "https://liveon.psu.edu/sites/liveon/files/styles/campus_block/public/2021-05/up_fs_sfd_louies_photo.jpg?h=10d202d3&itok=GliERO-1", description: "Convenience Store" },
    { name: "On a Roll", image: "https://liveon.psu.edu/sites/liveon/files/styles/campus_block/public/2021-05/up_fs_sfd_photo_inapickle_1200x800.jpg?h=10d202d3&itok=BGsuQyLl", description: "Fast Casual Subs" },
    { name: "Redifer Grill", image: "https://liveon.psu.edu/sites/liveon/files/styles/campus_block/public/2021-05/up_fs_sfd_photo_redifercitygrill_1200x800.jpg?h=10d202d3&itok=lj7n4AZV", description: "Fast Casual Grill" },
    { name: "Southside Buffet", image: "https://liveon.psu.edu/sites/liveon/files/styles/campus_block/public/2023-08/UP_FS_SFD_Photo_SouthsideBuffet_New_1200x800.jpg?h=10d202d3&itok=rDmAg0BW", description: "All You Care to Eat Buffet" }
  ],
  "West": [
    { name: "Edge", image: "https://liveon.psu.edu/sites/liveon/files/styles/carousel_popover_crop_w600/public/2021-05/up_fs_wfd_photo_edgesisu_1200x800.jpg?itok=e1fCoXH9", description: "Coffee, Cafes & Juice Bars" },
    { name: "Market", image: "https://liveon.psu.edu/sites/liveon/files/styles/carousel_popover_crop_w600/public/2021-10/up_fs_wfd_photo_marketwest_1_1200x800.jpg?itok=9U9DipSQ", description: "Convenience Store" },
    { name: "State Chik’n", image: "https://liveon.psu.edu/sites/liveon/files/styles/carousel_popover_crop_w600/public/2024-08/up_fs_efd_logo_state-chikn-2_1200x800.png?itok=azn1b0TT", description: "Fast Casual Chicken" },
    { name: "Waring Square Buffet", image: "https://liveon.psu.edu/sites/liveon/files/styles/carousel_popover_crop_w600/public/2021-05/up_fs_wfd_photo_waringsqare_2_1200x800.jpg?itok=FrNZBoow", description: "All You Care to Eat Buffet" }
  ],
  "HUB": [
    { name: "Blue Burrito", image: "https://liveon.psu.edu/sites/liveon/files/styles/carousel_popover_crop_w600/public/2021-06/blue_burrito.jpg?itok=GURT5I6C", description: "Burritos Food Court" },
    { name: "Burger King", image: "https://liveon.psu.edu/sites/liveon/files/styles/carousel_popover_crop_w600/public/2021-06/burger_king_logo.jpg?itok=Ir1FLhDp", description: "Burger Fast Casual" },
    { name: "Cow & Cookie", image: "https://liveon.psu.edu/sites/liveon/files/styles/carousel_popover_crop_w600/public/2024-12/cowandcookie-storefront.jpg?itok=3K_8sWFj", description: "Coffee, Cafes & Juice Bars" },
    { name: "Grate Chee", image: "https://liveon.psu.edu/sites/liveon/files/styles/carousel_popover_crop_w600/public/2022-07/12.png?itok=rIqcTNWE", description: "Grilled Cheese Food Court" },
    { name: "Hibachi-San", image: "https://liveon.psu.edu/sites/liveon/files/styles/carousel_popover_crop_w600/public/2021-06/hibachisan-logo.jpg?itok=cFiwN66I", description: "Hibachi Fast Casual" },
    { name: "Jamba", image: "https://liveon.psu.edu/sites/liveon/files/styles/carousel_popover_crop_w600/public/2021-06/3.png?itok=R2SUnQkd", description: "Coffee, Cafes & Juice Bars" },
    { name: "McAlister’s Deli", image: "https://liveon.psu.edu/sites/liveon/files/styles/carousel_popover_crop_w600/public/2021-06/mcalisters_deli.jpg?itok=hoybXY2j", description: "Sandwich Fast Casual" },
    { name: "Panda Express", image: "https://liveon.psu.edu/sites/liveon/files/styles/carousel_popover_crop_w600/public/2021-06/new-liveon-website.png?itok=Kq5B5sGq", description: "Fast Casual Chinese Food" },
    { name: "Sbarro", image: "https://liveon.psu.edu/sites/liveon/files/styles/carousel_popover_crop_w600/public/2021-06/sbarro-logo.jpg?itok=XX84OfMy", description: "Fast Casual Pizza" },
    { name: "Slim Chickens", image: "https://liveon.psu.edu/sites/liveon/files/styles/carousel_popover_crop_w600/public/2021-06/1.png?itok=61INMen4", description: "Chicken Food Court" },
    { name: "Soup & Garden", image: "https://liveon.psu.edu/sites/liveon/files/styles/carousel_popover_crop_w600/public/2021-06/soup-and-garden-logo.jpg?itok=iw7BTpgh", description: "Salad and Soup Food Court" }
  ],
  "East": [
    { name: "Aloha Fresh Poke Bowls", image: "https://liveon.psu.edu/sites/liveon/files/styles/carousel_popover_crop_w600/public/2024-08/up_fs_efd_photo_alohafresh-1_1200x800.jpg?itok=kMxECDSi", description: "Poke Bowls Food Court" },
    { name: "Bowls @ East", image: "https://liveon.psu.edu/sites/liveon/files/styles/carousel_popover_crop_w600/public/2021-05/up_fs_efd_photo_bowls_2_1200x800.jpg?itok=qHtjNyHC", description: "Acai Bowls Food Court" },
    { name: "East Food District Buffet", image: "https://liveon.psu.edu/sites/liveon/files/styles/carousel_popover_crop_w600/public/2021-10/up_fs_efd_photo_buffet_6_1200x800.jpg?itok=1RwsAL5T", description: "All You Care to Eat Buffet" },
    { name: "East Philly Cheesesteaks", image: "https://liveon.psu.edu/sites/liveon/files/styles/carousel_popover_crop_w600/public/2025-06/east-philly-750x368.png?itok=h8usr9Q_", description: "Cheesesteaks Food Court" },
    { name: "Edge", image: "https://liveon.psu.edu/sites/liveon/files/styles/carousel_popover_crop_w600/public/2021-05/up_fs_efd_photo_edge_1200x800.jpg?itok=PfgmZzEp", description: "Coffee, Cafes & Juice Bars" },
    { name: "Fresco", image: "https://liveon.psu.edu/sites/liveon/files/styles/carousel_popover_crop_w600/public/2021-05/up_fs_efd_chefs_table_basic.jpg?itok=V62i-c7D", description: "Taco Bowls Food Court" },
    { name: "Grillers", image: "https://liveon.psu.edu/sites/liveon/files/styles/carousel_popover_crop_w600/public/2025-06/grillers-750x368-1.png?itok=1jV8hqSt", description: "Fast Casual American Food" },
    { name: "Market", image: "https://liveon.psu.edu/sites/liveon/files/styles/carousel_popover_crop_w600/public/2021-05/up_fs_market_east_entrance.png?itok=m3bc-t6x", description: "Convenience Store" },
    { name: "On a Roll", image: "https://liveon.psu.edu/sites/liveon/files/styles/carousel_popover_crop_w600/public/2021-05/up_fs_efd_photo_deli_1200x800.jpg?itok=s8Kiz9QB", description: "Sandwich Food Court" },
    { name: "Pizza", image: "https://liveon.psu.edu/sites/liveon/files/styles/carousel_popover_crop_w600/public/2021-05/up_fs_efd_photo_pizza_1200x800.jpg?itok=dmU2hrmh", description: "Italian Food Court" },
    { name: "Pure", image: "https://liveon.psu.edu/sites/liveon/files/styles/carousel_popover_crop_w600/public/2021-05/up_fs_efd_photo_pure_1200x800.jpg?itok=ZGSth4dQ", description: "Allergen Friendly Food Court" }
  ],
  "Pollock": [
    { name: "Edge", image: "https://liveon.psu.edu/sites/liveon/files/styles/carousel_popover_crop_w600/public/2021-05/up_fs_pk_photo_edge_1200x800.jpg?itok=BM2pJ7xm", description: "Coffee, Cafes & Juice Bars" },
    { name: "Fresco", image: "https://liveon.psu.edu/sites/liveon/files/styles/carousel_popover_crop_w600/public/2023-08/Fresco-1200x800.png?itok=EeXCk_CV", description: "Taco Bowls Food Court" },
    { name: "Market", image: "https://liveon.psu.edu/sites/liveon/files/styles/carousel_popover_crop_w600/public/2021-05/up_fs_pk_photo_marketpollock_2_1200x800.jpg?itok=bNyYLVEj", description: "Convenience Store" },
    { name: "Asia Kitchen", image: "https://liveon.psu.edu/sites/liveon/files/styles/carousel_popover_crop_w600/public/2021-05/up_fs_pk_market_pollock_kitchen_photo.jpg?itok=A4OKAJEQ", description: "Fast Casual Asian Food" },
    { name: "Pollock Commons Buffet", image: "https://liveon.psu.edu/sites/liveon/files/styles/carousel_popover_crop_w600/public/2021-05/up_fs_pk_photo_gustoleaf_1200x800.jpg?itok=FMRltY37", description: "All You Care to Eat Buffet" }
  ]
};

// Render dining cards
const container = document.getElementById("dining-container");

for (const location in diningData) {
  const section = document.createElement("div");
  section.className = "mb-5";
  section.innerHTML = `<h2 class="mb-3">${location}</h2>`;

  const row = document.createElement("div");
  row.className = "row";

  diningData[location].forEach(place => {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";

    col.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${place.image}" class="card-img-top" alt="${place.name}">
        <div class="card-body">
          <h5 class="card-title">${place.name}</h5>
          <p class="card-text">${place.description}</p>
        </div>
      </div>
    `;

    row.appendChild(col);
  });

  section.appendChild(row);
  container.appendChild(section);
}
