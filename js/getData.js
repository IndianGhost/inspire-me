import { quotes } from "./quotes.js";

const generateRandomValueBetween = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const generateRandomQuote = () => {
    let randomIndex = generateRandomValueBetween(0, quotes.length);
    let quote = quotes[randomIndex]['quoteText'];
    let author = quotes[randomIndex]['quoteAuthor'];

    document.getElementById("js-cite").innerText = quote;
    if (author) {
        document.getElementById("js-author").innerText = author;
    }
}

document.getElementById("js-generate-btn").onclick = generateRandomQuote;

generateRandomQuote();