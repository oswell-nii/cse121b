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

    // Use find to get a random quote object with a truthy chance value
    const randomQuote = data.Quotes.find(() => Math.random() > 0.5);

    // Extract quote and author based on API structure
    quoteElement.textContent = randomQuote.quote;
    authorElement.textContent = randomQuote.author || 'Unknown'; // Set "Unknown" if author is missing

  } catch (error) {
    console.error('Error fetching quote:', error);
    quoteElement.textContent = 'An error occurred. Please try again later.';
  }
}
