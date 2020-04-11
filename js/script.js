// Create an array of 5 objects named quotes
// Properties: quote, source, citation, year
let quotes = [
    {
        quote: "Women love us for our defects. If we have enough of them, they will forgive us everything, even our intellects.",
        source: "Oscar Wilde",
        citation: "The Picture of Dorian Gray",
        year: 1891
    },
    {
        quote: "An honest tale speeds best, being plainly told.",
        source: "William Shakespeare",
        citation: "King Richard III",
        year: 1597
    },
    {
        quote: "Every science begins as philosophy and ends as art.",
        source: "Will Durant",
        citation: "The Story of Philosophy",
        year: 1926
    },
    {
        quote: "We live as we dream - alone.",
        source: "Joseph Conrad",
        citation: "Heart of Darkness",
        year: 1899 
    },
    {
        quote: "Hard work's a good distraction.",
        source: "Scott Westerfeld",
        citation: "Uglies",
        year: 2005
    }
];

// create random quote object builder.
function getRandomQuote() {
    // Code to get quote from array
    let randomNumber =  Math.floor( Math.random() * Math.floor(quotes.length));
    return quotes[randomNumber];
};

function printQuote() {
    // Code to print the quote
    let randomQuote = getRandomQuote(); 
    let htmlOutput = `<p class="quote">${randomQuote.quote}</p>
                      <p class="source">${randomQuote.source}`

    if (randomQuote.citation != '') {
        htmlOutput += `<span class="citation">${randomQuote.citation}</span>`
    }
    if (randomQuote.year != '') {
        htmlOutput += `<span class="year">${randomQuote.year}</span>`
    }

    htmlOutput += `</p>`;
    document.getElementById('quote-box').innerHTML = htmlOutput; 

};

printQuote();