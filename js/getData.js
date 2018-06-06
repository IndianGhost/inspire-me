function rand(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}
$(document).ready(function(){
    $.getJSON("js/quotes.json", function(quotes){
        var rand_id = rand(0, quotes.length);
        var quote   = quotes[rand_id]['quoteText'];
        var author  = quotes[rand_id]['quoteAuthor'];
        $('.js-cite').text(quote);
        if(author){
            $('.js-author').text('-'+author+'-');
        }
    });
});