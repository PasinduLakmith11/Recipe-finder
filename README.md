
# Recipe Finder

A React-based web application that allows users to find recipes by entering ingredients. The app integrates with the Spoonacular API to fetch recipe details and provides features like pagination and detailed recipe information.

---

## Features
- **Search Recipes by Ingredients**: Enter ingredients (e.g., "chicken, rice") to search for recipes.
- **View Recipe Details**: Click on a recipe to view detailed instructions and ingredients.
- **Pagination Support**: Navigate between pages of recipe results.
- **Responsive Design**: Works well on both desktop and mobile devices.

---

## Technologies Used
- **Frontend**: React
- **API Integration**: Spoonacular API
- **Styling**: CSS

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/PasinduLakmith11/Recipe-finder.git
   ```
2. Navigate to the project folder:
   ```bash
   cd Recipe-finder
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

---

## Usage

1. Start the development server:
   ```bash
   npm start
   ```
2. Open your browser and go to [http://localhost:3000](http://localhost:3000).
3. Enter ingredients in the search bar and press "Search" to find recipes.

---

## API Key Setup

This application uses the Spoonacular API. To use it:
1. Obtain an API key from [Spoonacular](https://spoonacular.com/food-api).
2. Replace the `API_KEY` in the `App.js` file with your Spoonacular API key:
   ```javascript
   const API_KEY = 'your-api-key-here';
   ```

---

## File Structure
```
Recipe-finder/
├── public/
├── src/
│   ├── App.js          # Main application logic
│   ├── App.css         # Styling
│   └── index.js        # Entry point
├── package.json
└── README.md
```

---

## Future Enhancements
- Add user authentication for saving favorite recipes.
- Improve search filters (e.g., dietary preferences, meal types).
- Add offline support using service workers.

---

## License
This project is open-source and available under the [MIT License](LICENSE).

