import React, { useState } from 'react';
import './App.css';

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const API_KEY = 'cadd2045752c4ef6b36b20ee182e320a';

  const fetchRecipeDetails = async (recipeId) => {
    try {
      const response = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${API_KEY}`);
      const data = await response.json();
      setSelectedRecipe(data);
    } catch (error) {
      console.error("Error fetching recipe details:", error);
    }
  };

  const fetchRecipes = async (page = 1) => {
    setLoading(true);
    const response = await fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${query}&number=5&offset=${(page - 1) * 5}&apiKey=${API_KEY}`
    );

    const data = await response.json();
    setRecipes(data);
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    fetchRecipes(1);
  };

  const handleNextPage = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchRecipes(nextPage);
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      const prevPage = page - 1;
      setPage(prevPage);
      fetchRecipes(prevPage);
    }
  };

  return (
    <div className="App">
      <h1>Recipe Finder</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter ingredients, e.g., chicken, rice"
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading recipes...</p>}

      <div className="recipes-container">
        {Array.isArray(recipes) && recipes.length > 0 ? (
          recipes.map(recipe => (
            <div key={recipe.id} className="recipe-card" onClick={() => fetchRecipeDetails(recipe.id)}>
              <h3>{recipe.title}</h3>
              <img src={recipe.image} alt={recipe.title} />
            </div>
          ))
        ) : (
          <p>No recipes found</p>
        )}
      </div>

      {recipes.length > 0 && (
        <div className="pagination-buttons">
          <button onClick={handlePreviousPage} disabled={page === 1}>
            Previous
          </button>
          <button onClick={handleNextPage}>Next</button>
        </div>
      )}

      {selectedRecipe && (
        <div className="recipe-details">
          <div>
            <h2>{selectedRecipe.title}</h2>
            <img src={selectedRecipe.image} alt={selectedRecipe.title} />
            <h4>Ingredients:</h4>
            <ul>
              {selectedRecipe.extendedIngredients.map(ingredient => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
            </ul>
            <h4>Instructions:</h4>
            <p>{selectedRecipe.instructions}</p>
            <button className="close-button" onClick={() => setSelectedRecipe(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
