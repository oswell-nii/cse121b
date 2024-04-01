/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temple) => {
        const articleElement = document.createElement("article");

        const h3Element = document.createElement("h3");
        h3Element.textContent = temple.templeName;

        const imgElement = document.createElement("img");
        imgElement.src = temple.imageUrl;
        imgElement.alt = temple.location;

        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);

        templesElement.appendChild(articleElement);
    });

};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    const templeData = await response.json();
    templeList = templeData;
    displayTemples(templeList);
};

/* reset Function */
const reset = () => {
    templesElement.innerHTML = ''; // Clear previous content
};


/* filterTemples Function */
const filterTemples = (temples) => {
    // Call the reset function to clear the output
    reset();
  
    // Obtain the value of the HTML element with the ID of filtered
    const filter = document.getElementById("filtered").value;
  
    // Switch statement to filter temples based on different criteria
    switch (filter) {
      case "utah":
        // Filter for temples where the location contains "Utah"
        displayTemples(temples.filter(temple => temple.location.includes("Utah")));
        break;
      case "notutah":
        // Filter for temples where the location does not contain "Utah"
        displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
        break;
      case "older":
        // Filter for temples where the dedicated date is before 1950
        displayTemples(temples.filter(temple => {
            const dedicatedYear = parseInt(temple.dedicated); // Assuming "dedicated" holds the year
            return dedicatedYear < 1950;
        }));
        break;
      case "all":
        // No filter, just display all temples
        displayTemples(temples);
        break;
      default:
        console.error("Invalid filter value:", filter);
    }
};
  

getTemples();

/* Event Listener */
// Add a change event listener to the filtered dropdown menu
document.getElementById("filtered").addEventListener("change", () => {
    // Call the filterTemples function and pass templeList as the argument
    filterTemples(templeList);
});

  