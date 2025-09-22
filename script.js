// JS File

// ========== CSS  ==========
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'styles.css'; // path to your CSS file
document.head.appendChild(link);

// ========== Recipe Data ==========
const recipes = [
   {
    id: "paneer-butter-masala",
    name: "Paneer Butter Masala",
    cuisine: "Indian",
    cookingTime: 40,
    ingredients: ["Paneer", "Tomato", "Cream", "Spices"],image:"https://images.unsplash.com/photo-1690401767645-595de0e0e5f8?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.1.0",
    instructions: "Sauté ginger-garlic paste in butter, add tomatoes and cook until soft. Blend into a smooth puree, then cook with spices like cumin, turmeric, and garam masala. Add cream and paneer cubes, simmer for 5 minutes, garnish with coriander, and serve hot with naan or rice..",
  },
  {
    id: "veg-biryani",
    name: "Veg Biryani",
    cuisine: "Indian",image:"https://images.unsplash.com/photo-1630409346824-4f0e7b080087?q=80&w=1246&auto=format&fit=crop&ixlib=rb-4.1.0",
    cookingTime: 50,
    ingredients: ["Rice", "Vegetables", "Spices"],
    instructions: "Sauté onions, ginger, garlic, and vegetables with spices. Add soaked rice, layer with cooked vegetables, cover, and cook on low heat until rice is fluffy and aromatic. Serve hot with raita or salad.",
  },
  {
    id: "pasta-arrabiata",
    name: "Pasta Arrabiata",
    cuisine: "Italian",image:"https://www.recipetineats.com/tachyon/2023/10/Penne-Arrabbiata-2.jpg?resize=900%2C1125&zoom=0.72",
    cookingTime: 30,
    ingredients: ["Pasta", "Tomato", "Garlic", "Olive Oil"],
    instructions: "Cook pasta until al dente. Sauté garlic in olive oil, add tomatoes and chili, simmer to make a spicy sauce. Toss pasta in the sauce and serve hot with a sprinkle of parsley or cheese.",
  },
  {
    id: "margherita-pizza",
    name: "margherita pizza",
    cuisine: "Italian",image:"https://upload.wikimedia.org/wikipedia/commons/c/c8/Pizza_Margherita_stu_spivack.jpg",
    cookingTime: 25,
    ingredients: [ "Dough", "Tomato", "Cheese", "Basil"],
    instructions: "Spread tomato sauce on rolled-out dough, top with cheese and fresh basil. Bake in a hot oven until the crust is golden and cheese is melted. Serve hot.",
  },
  {
    id: "veg-fried-rice",
    name: "veg fried rice",
    cuisine: "Chinese",image:"https://shwetainthekitchen.com/wp-content/uploads/2023/06/veg-fried-rice.jpg",
    cookingTime: 20,
    ingredients: [ "Rice", "Carrot", "Peas", "Soy Sauce"],
    instructions: "Stir-fry chopped vegetables, then add cooked rice and soy sauce. Toss well until heated through and serve hot.",
  },
  {
    id: "hakka-noodles",
    name: "hakka noodles",
    cuisine: "Chinese",image:"https://purendesi.in/wp-content/uploads/2024/05/Hakka-Noodles-Recipe.jpg",
    cookingTime: 25,
    ingredients: ["Noodles", "Capsicum", "Soy Sauce"],
    instructions: "Stir-fry vegetables, add boiled noodles and soy sauce, toss well, and serve hot.",
  },
  {
    id: "tacos",
    name: "Mexican Tacos",
    cuisine: "Mexican",image:"https://upload.wikimedia.org/wikipedia/commons/7/73/001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg",
    cookingTime: 20,
    ingredients: ["Tortilla", "Beans", "Lettuce", "Cheese"],
    instructions: "Fill tortillas with beans, cheese, and veggies, then fold and serve.",
  },
  {
    id: "loaded-nachos",
    name: "loaded nachos",
    cuisine: "Mexican",image:"https://www.seriouseats.com/thmb/ps9BzTDAJ6tXywJw_eSZxvV_xhE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20250430-SEA-UltimateSmokedNachos-LorenaMasso-Beauty1-35-a0d81f942b394edf9137f9b2f09269a4.jpg",
    cookingTime: 15,
    ingredients: ["Nachos", "Cheese", "Jalapenos", "Beans"],
    instructions: "Layer nachos with cheese, beans, and jalapenos, then bake or serve immediately.",
  },
  {
    id: "cheese-burger",
    name: "cheese burger",
    cuisine: "American",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7W-OoBPna7eKpB2sL4xsQOAuX0QRbgqcAqA&s",
    cookingTime: 25,
    ingredients: ["Bun", "Patty", "Cheese", "Lettuce"],
    instructions: "Grill the patty, place it on a bun with cheese, lettuce, and other toppings, then serve.",
  },
  {
    id: "pancakes",
    name: "Pancakes",
    cuisine: "American",image:"https://eggs.ca/wp-content/uploads/2024/06/fluffy-pancakes-1664x832-1.jpg",
    cookingTime: 15,
    ingredients: ["Flour", "Milk", "Eggs", "Syrup"],
    instructions: "Mix batter, cook on skillet, and serve with syrup.",
  },
];

// ========== Modal ==========
const modal = document.createElement("div");
modal.className = "modal hidden";
modal.innerHTML = `
  <div class="modal-content card">
    <span id="closeModal" class="close">&times;</span>
    <img id="recipeImage" src="" alt="" style="width:100%; border-radius:10px; margin-bottom:10px;">
    <h2 id="recipeName"></h2>
    <p><strong>Cuisine:</strong> <span id="recipeCuisine"></span></p>
    <p><strong>Cooking Time:</strong> <span id="recipeTime"></span> mins</p>
    <p><strong>Ingredients:</strong></p>
    <ul id="recipeIngredients"></ul>
    <p><strong>Instructions:</strong></p>
    <p id="recipeInstructions"></p>
  </div>
`;
document.body.appendChild(modal);



// Modal selectors
const closeModal = modal.querySelector("#closeModal");
const recipeName = modal.querySelector("#recipeName");
const recipeCuisine = modal.querySelector("#recipeCuisine");
const recipeTime = modal.querySelector("#recipeTime");
const recipeIngredients = modal.querySelector("#recipeIngredients");
const recipeInstructions = modal.querySelector("#recipeInstructions");

// ========== Event Binding ==========
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("view-recipe-btn")) {
    const article = e.target.closest("article");
    const recipeId = article.dataset.recipeId?.toLowerCase();

    const selectedRecipe = recipes.find(r => r.id === recipeId);
    modal.querySelector("#recipeImage").src = selectedRecipe.image;
    modal.querySelector("#recipeImage").alt = selectedRecipe.name;


    if (selectedRecipe) {
      // Fill modal
      recipeName.textContent = selectedRecipe.name;
      recipeCuisine.textContent = selectedRecipe.cuisine;
      recipeTime.textContent = selectedRecipe.cookingTime;
      recipeInstructions.textContent = selectedRecipe.instructions;

      // Ingredients list
      recipeIngredients.innerHTML = "";
      selectedRecipe.ingredients.forEach(ing => {
        const li = document.createElement("li");
        li.textContent = ing;
        recipeIngredients.appendChild(li);
      });

      modal.classList.remove("hidden");
    } else {
      alert("Recipe not found!");
    }
  }
});
// Close modal
closeModal.addEventListener("click", () => modal.classList.add("hidden"));
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.add("hidden");
});

// ========== Search & Filter ==========
const ingredientInput = document.getElementById("ingredientInput");
const cuisineSelect = document.getElementById("cuisineSelect");
const timeSelect = document.getElementById("timeSelect");
const searchBtn = document.querySelector(".search-button");
const popularGrid = document.querySelector(".popular-grid");



// Prevent form reload
searchBtn.type = "button";

searchBtn.addEventListener("click", () => {
  const ingredients = ingredientInput.value
    .toLowerCase()
    .split(",")
    .map(i => i.trim())
    .filter(i => i);

  const cuisine = cuisineSelect.value;
  const maxTime = timeSelect.value ? parseInt(timeSelect.value) : null;

  const filtered = recipes.filter(recipe => {
    const cuisineMatch = cuisine ? recipe.cuisine === cuisine : true;
    const timeMatch = maxTime ? recipe.cookingTime <= maxTime : true;
    const ingredientMatch = ingredients.length
      ? ingredients.every(i => recipe.ingredients.map(r => r.toLowerCase()).includes(i))
      : true;
    return cuisineMatch && timeMatch && ingredientMatch;
  });

  displayRecipes(filtered);
});

function displayRecipes(arr) {
  popularGrid.innerHTML = "";

  if (arr.length === 0) {
    popularGrid.innerHTML = "<p>No recipes found!</p>";
    return;
  }

  arr.forEach(recipe => {
    const card = document.createElement("article");
    card.className = "popular-card";
    card.dataset.recipeId = recipe.id;
    card.innerHTML = `
      <img class="recipe-img" src="${recipe.image || 'https://via.placeholder.com/200'}" alt="${recipe.name}">
      <h3>${recipe.name}</h3>
      <p>${recipe.cuisine} | ${recipe.cookingTime} mins</p>
      <button class="view-recipe-btn">View Recipe</button>
    `;
    popularGrid.appendChild(card);
  });
}



// Navbar search
const navSearchInput = document.getElementById("navSearchInput");
const navSearchBtn = document.getElementById("navSearchBtn");

if (navSearchBtn) {
  navSearchBtn.type = "button"; 

  navSearchBtn.addEventListener("click", () => {
    const query = navSearchInput.value.toLowerCase().trim();

    const filtered = recipes.filter(recipe =>
      recipe.name.toLowerCase().includes(query) ||
      recipe.cuisine.toLowerCase().includes(query) ||
      recipe.ingredients.some(ing => ing.toLowerCase().includes(query))
    );

    displayRecipes(filtered);
  });

  //  search on Enter key
  navSearchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") navSearchBtn.click();
  });
}