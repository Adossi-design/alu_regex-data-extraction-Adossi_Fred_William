// let's create sentence that has a mixed of data
const text = `
  You can contact us at f.adossi@alustudent.com or call (123) 456-7890 for more information. 
  Please, visit https://www.alu-Rwanda.com/page for furter details. 
  Finally, you will be asked to pay $500 for the services rendered.
`;

// Let's write a Regular Expressions for each data

//>>> Email address 
const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;

//>>> Phone number
const phoneRegex = /(\(\d{3}\)\s?|\d{3}[-.\s])?\d{3}[-.\s]?\d{4}/g;

//>>> URL 
const urlRegex = /https?:\/\/(?:www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(?:\/[a-zA-Z0-9-]+)*(\/?[a-zA-Z0-9-\/?=]+)?/g;

//>>> Currency amount 
const currencyRegex = /\$\d{1,3}(?:,\d{3})*(?:\.\d{2})?/g;

//>>> Let's write a function that will test regex pattern
function testRegex(pattern, data) {
  const match = data.match(pattern);
  return match ? match : "No match";
}

// This code below is in charge of displaying our output results
console.log("Email Matches:", testRegex(emailRegex, text));
console.log("Phone Matches:", testRegex(phoneRegex, text));
console.log("URL Matches:", testRegex(urlRegex, text));
console.log("Currency Matches:", testRegex(currencyRegex, text));
