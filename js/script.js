/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

const quotes = [
    {
        quote: "Women love us for our defects. If we have enough of them, they will forgive us everything, even our intellects.",
        source: "Oscar Wilde",
        citation: "The Picture of Dorian Gray",
        year: 1891, 
        tags: ["books", "classic", "old"]
    },
    {
        quote: "An honest tale speeds best, being plainly told.",
        source: "William Shakespeare",
        citation: "King Richard III",
        year: 1597,
        tags: ["theatre", "classic", "old"]
    },
    {
        quote: "Every science begins as philosophy and ends as art.",
        source: "Will Durant",
        citation: "The Story of Philosophy",
        year: 1926,
        tags: []
    },
    {
        quote: "We live as we dream - alone.",
        source: "Joseph Conrad",
        citation: "Heart of Darkness",
        year: 1899,
        tags: ["heart", "books"] 
    },
    {
        quote: "Hard work's a good distraction.",
        source: "Scott Westerfeld",
        citation: "Uglies",
        year: 2005,
        tags: []
    }
];

// create random quote object builder.
function getRandomQuote() {
    let randomNumber =  Math.floor( Math.random() * Math.floor(quotes.length));
    return quotes[randomNumber];
};

// Function printQuote
function printQuote() {
    let randomQuote = getRandomQuote(); 
    let htmlOutput = `<p class="quote">${randomQuote.quote}</p>
                      <p class="source">${randomQuote.source}`

    if (randomQuote.citation != '') {
        htmlOutput += `<span class="citation">${randomQuote.citation}</span>`
    }
    if (randomQuote.year != '') {
        htmlOutput += `<span class="year">${randomQuote.year}</span>`
    }
    if (randomQuote.tags.length > 0) {
        htmlOutput += `<br>`
        for (i = 0; i < randomQuote.tags.length; i++ ) {
            htmlOutput += `<span class="tags">#${randomQuote.tags[i]}</span> `
        }
    }

    htmlOutput += `</p>`;
    document.getElementById('quote-box').innerHTML = htmlOutput; 
    updateBackgroundColor();

};

// Change the color of the background
// Inspired by https://css-tricks.com/snippets/javascript/random-hex-color/

function updateBackgroundColor() {
    const randomColor =  Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = `#${randomColor}`;
};

// Change the quote when the button is clicked
document.getElementById('load-quote').addEventListener("click", printQuote, false);

// Auto-refreshes quotes
setInterval(printQuote, 10000);

// Just need to document and then submit for review.
// Update the readme.md maybe with a GIF. 