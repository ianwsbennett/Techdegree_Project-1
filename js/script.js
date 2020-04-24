/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat


// NOTE: Going for 'Exceed Expectation' but do not mind if I pass with a Meets Expectations grade!

/** 
 * 'randomQuote' array stores multiple quotes with various accessible properties
 * **/


let quotes = [
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

  {quote: 'A successful book is not made of what is in it, but of what is left out of it.', 
    source: 'Mark Twain', 
    citation: "Letter to Henry H. Rogers", 
    year: 1897,
    tag: 'Business'},
];


/** 
 * 'getRandomQuote' function gets random quote from the randomQuote array 
 * **/


function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);  //method to get random number for length of array
  let finalQuote = quotes[randomNumber];
  return finalQuote;
}


/** 
 * 'random color generator function 
 * **/


function randomColor() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let color = `rgb(${x} , ${y} , ${z})`;
  return document.body.style.backgroundColor = color; // code referenced from: w3schools.com/jsref/prop_style_backgroundcolor.asp
}


/** 
 * 'getRandomQuote' function gets random quote from the randomQuote array 
 * **/


function printQuote() {
  finalQuote = getRandomQuote();
  let text = ``;
  text += `<p class="quote"> ${finalQuote.quote} </p>`; 
  text += `<p class="source"> ${finalQuote.source}`;
  // checking to see if array has citation property  
  if (finalQuote.citation){
    text += `<span class="citation"> ${finalQuote.citation}</span>`;
  }
  // checking to see if array has quote property  
  if (finalQuote.year){
    text += `<span class="year"> ${finalQuote.year}</span>`;
  }
  // checking to see if array has quote property  
  if (finalQuote.tag){
    text += `<span class="year"> ${finalQuote.tag}</span>`;
  }
  text += `</p>`; // closing tag so span with other property sits inside HTML container
  randomColor();
  document.getElementById('quote-box').innerHTML = text; 
}

let printTimer = setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/


document.getElementById('load-quote').addEventListener("click", printQuote, false);