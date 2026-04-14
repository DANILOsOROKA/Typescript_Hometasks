interface Recipe {
    id: number;
    name: string;
    ingredients: string[];
}

interface RecipesResponse {
    recipes: Recipe[];
}

fetch('https://dummyjson.com/recipes?limit=0')
    .then((response: Response) => response.json())
    .then((data: RecipesResponse) => {
        const container = document.getElementById('recipes');

        if (!container) return; // перевірка

        data.recipes.forEach((recipe: Recipe) => {
            const recipeDiv: HTMLDivElement = document.createElement('div');
            recipeDiv.className = 'recipe';

            const title: HTMLHeadingElement = document.createElement('h2');
            title.innerText = recipe.name;

            const ingredientsTitle: HTMLHeadingElement = document.createElement('h4');
            ingredientsTitle.innerText = 'Інгредієнти';

            const ingredientList: HTMLUListElement = document.createElement('ul');

            recipe.ingredients.forEach((ingredient: string) => {
                const li: HTMLLIElement = document.createElement('li');
                li.innerText = ingredient;
                ingredientList.appendChild(li);
            });

            recipeDiv.append(title, ingredientsTitle, ingredientList);
            container.appendChild(recipeDiv);
        });
    });