/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/


// Random quote array with various properties  
let randomQuote = [
  {quote: 'Be king, in your dreams. Immense power is acquired by assuring yourself in your secret reveries that you were born to control affairs',
   source: 'Andrew Carnegie'},

  {quote: 'A thing is funny when—in some way that is not actually offensive or frightening—it upsets the established order.', 
    source: 'George Orwell'},

  {quote: 'Either write something worth reading or do something worth writing.', 
    source: 'Benjamin Franklin'},

  {quote: 'I’m as proud of many of the things we haven’t done as the things we have done. Innovation is saying no to a thousand things.', 
    source: 'Steve Jobs'},

  {quote: 'Success has ruined many a man.', 
    source: 'Benjamin Franklin', 
    citation: "Poor Richard's Almanack", 
    year: 1752},
];


/***
 * `getRandomQuote` function
***/


// Function to get random quote from array  
function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * randomQuote.length);
  let finalQuote = randomQuote[randomNumber];
  return finalQuote;
}


function printQuote() {
  finalQuote = getRandomQuote();
  let text = ``;
  text += `<p class="quote"> ${finalQuote.quote} </p>`; 
  text += `<p class="source"> ${finalQuote.source}`;

  if (finalQuote.citation){
    text += `<span class="citation"> ${finalQuote.citation}</span>`;
  }
  if (finalQuote.year){
    text += `<span class="year"> ${finalQuote.year}</span>`;
  }

  text += `</p>`;
  document.getElementById('quote-box').innerHTML = text; 
  console.log(finalQuote);
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/


document.getElementById('load-quote').addEventListener("click", printQuote, false);