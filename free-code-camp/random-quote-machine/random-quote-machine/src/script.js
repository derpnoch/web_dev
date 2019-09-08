// Gets Quotes from the url link once it accepts the json
function getQuotes(){
  return $.ajax({
    headers: {
      Accept: "application/json"
    },
    url: 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
    // Once getting the url link successfully, read in the quote and parse the quote.
    success: function(jsonQuotes){
      if (typeof jsonQuotes === 'string'){
        dataQuotes = JSON.parse(jsonQuotes);
        console.log('dataQuotes');
        console.log(dataQuotes);
      }
    }
  });
}

function getQuote(){
  
  // Random selects a quote along with the author of the quote from the url link which has a array of Quotes.
  let randomQuote = dataQuotes.quotes[Math.floor(Math.random() * dataQuotes.quotes.length)];
  
  currentQuote = randomQuote.quote;
  currentAuthor = randomQuote.author;

  $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
  // Animation of the quotes.
  $(".quote-text").animate(
    {opacity: 0}, 
    1000,
    function() {
    $(this).animate({opacity: 1}, 1000);
    $('#text').text(randomQuote.quote);
    }
  );
  
  $(".quote-author").animate(
    {opacity: 0}, 
    1000,
    function(){
    $(this).animate({opacity: 1}, 1000);
    $('#author').html(randomQuote.author);
    }
  );
}

$(document).ready(function(){
  getQuotes().then(() => {
    getQuote();
  });
  
  //Click on new quote button, to get a new quote
  $('#new-quote').on('click', getQuote);
  
  // Click on the tweet button, will open a new window to twitter with the quote and the author.
  $('#tweet-quote').on('click', function(){
    window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
  });
})