const quoteButton = document.getElementById('btn');
const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');

quoteButton.addEventListener('click', getQuote);

async function getQuote() {
  try {
    const response = await fetch('https://api-get-quotes.vercel.app/api/v1/quotes');
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    const data = await response.json();

    // Get a random index within the quotes array
    const randomIndex = Math.floor(Math.random() * data.Quotes.length);

    // Extract quote and author based on API structure
    const randomQuote = data.Quotes[randomIndex];
    quoteElement.textContent = randomQuote.quote;
    authorElement.textContent = randomQuote.author || 'Unknown'; // Set "Unknown" if author is missing

  } catch (error) {
    console.error('Error fetching quote:', error);
    quoteElement.textContent = 'An error occurred. Please try again later.';
  }
}
