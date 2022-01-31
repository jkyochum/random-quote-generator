/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community

/*** 
 * create array of quotes 
***/
const quotes = [
  {quote: 'Live in the present, remember the past, and fear not the future, for it doesn\'t exist and never shall. There is only now.', source: 'Christopher Paolini', citation: 'Eldest', year: '2005', tag: 'Inspirational'},
  {quote: 'Instead of worrying about what you cannot control, shift your energy to what you can create.', source: 'Roy T. Bennett', citation: 'The Light in the Heart', year: '2016', tag: 'Motivation'},
  {quote: 'War is peace. Freedom is slavery. Ignorance is strength.', source: 'George Orwell', citation: '1984', year: '1949', tag: 'Liberation'},
  {quote: 'All the darkness in the world cannot extinguish the light of a single candle.', source: 'Ugolino Brunforte', citation: 'Little Flowers of St. Francis', year: 'near the end of the 14th century', tag: 'Duality'},
  {quote: `...you're off to Great Places! Today is your day! Your mountain is waiting. So... <i>get on your way!</i>`, source: 'Dr. Seuss', citation: 'Oh, the Places You\'ll Go!', year: '1960', tag: 'Inspirational'}
];


/***
 * create random number and return quote based on array index
***/
function getRandomQuote(arr){
  const randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber];
}

//function to change background color
function changeColor(){
  const random = [];
  for(let i = 0; i < 3; i++){
    random.push(Math.floor(Math.random() * 256));
  }
  document.body.style.backgroundColor = `rgb(${random[0]},${random[1]},${random[2]})`;
}

/***
 * create html string from quote object created in getRandomQuote
***/
function printQuote(){
  const obj = getRandomQuote(quotes);
  const quote = obj.quote;
  const source = obj.source;
  const citation = obj.citation;
  const year = obj.year;
  const tag = obj.tag;

  let html = `
    <p class="quote">${quote}</p>
    <p class="source">${source}
  `;

  //setting the available content into span tags 
  if(citation){
    html += `<span class="citation">, ${citation}</span>`;
  }
  else{
    html += `<span class="citation"></span>`;
  }
  if(year){
    html += `<span class="year">, ${year}</span>`;
  }
  else{
    html += `<span class="year"></span>`;
  }
  if(tag){
    html += `<span class="tag">, ${tag}</span>`;
  }
  else{
    html += `<span class="tag"></span>`;
  }

  //adding the ending paragraph tag
  html += `</p>`;

  //setting the string into the existing html
  document.getElementById('quote-box').innerHTML = html;
}

//set timer function to change every 10 seconds
function setTimer(){
  setInterval(printQuote, 10000);
  setInterval(changeColor, 10000);
}
setTimer();


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);
document.getElementById('load-quote').addEventListener("click", changeColor, false);