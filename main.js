$(document).ready(function() {
   
    $("#getMessage").on("click", 
   function randomQuote() {
  $.ajax({
      url: "https://api.forismatic.com/api/1.0/?",
      dataType: "jsonp",
      data: "method=getQuote&format=jsonp&lang=en&jsonp=?", success: function(result){
        
        var quote = result.quoteText + " " + " -" + result.quoteAuthor;
        
        $("#div1").html(quote);
        
        $('a.twitter-share-button').attr("href", "https://twitter.com/intent/tweet?text=" + quote);
        
        console.log(result);
    }});
    });
});
