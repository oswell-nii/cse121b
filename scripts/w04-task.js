/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Oswell Okine",
    photo: "images/oswell-oxy.png",
    favoriteFoods: ["Fufu", "Banku", "Rice"],
    hobbies: ["reading", "coding", "eating"],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Ghana",
        length: "20 years"
    }
);

myProfile.placesLived.push(
    {
        place: "Nigeria",
        length: "2 years"
    },
    {
        place: "Accra",
        length: "5 years"
    }
);


/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let ul = document.createElement('li');
    ul.textContent = hobby;
    document.querySelector('#hobbies').appendChild(ul);
})

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    const dt = document.createElement('dt');
    const dd = document.createElement('dd');
    dt.textContent = place.place;
    dd.textContent = place.length;
    const dl = document.querySelector('#places-lived');
    dl.appendChild(dt);
    dl.appendChild(dd);
  });
  

