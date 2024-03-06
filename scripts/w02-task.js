/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Oswell Okine";
const currentYear = new Date().getFullYear();
let profilePicture = "images/oswell-oxy.png";


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img')

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);



/* Step 5 - Array */
const favoriteFood = ["Fufu", "Banku", "Rice"];
const anotherFavoriteFood = "Beans";

for (const food of favoriteFood) {
    foodElement.innerHTML += `${food},`
}

// Add another favorite food
favoriteFood.push(anotherFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFood}`;

// Remove the first element
favoriteFood.shift();
foodElement.innerHTML += `<br>${favoriteFood.join(', ')}`;

// Remove the last element
favoriteFood.pop();
foodElement.innerHTML += `<br>${favoriteFood.join(', ')}`;






