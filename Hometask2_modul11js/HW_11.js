"use strict";
fetch('https://dummyjson.com/recipes?limit=0')
    .then((response) => response.json())
    .then((data) => {
    const container = document.getElementById('recipes');
    if (!container)
        return; // перевірка
    data.recipes.forEach((recipe) => {
        const recipeDiv = document.createElement('div');
        recipeDiv.className = 'recipe';
        const title = document.createElement('h2');
        title.innerText = recipe.name;
        const ingredientsTitle = document.createElement('h4');
        ingredientsTitle.innerText = 'Інгредієнти';
        const ingredientList = document.createElement('ul');
        recipe.ingredients.forEach((ingredient) => {
            const li = document.createElement('li');
            li.innerText = ingredient;
            ingredientList.appendChild(li);
        });
        recipeDiv.append(title, ingredientsTitle, ingredientList);
        container.appendChild(recipeDiv);
    });
});
