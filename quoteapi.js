function doIt() { 
 		var output = $.ajax({
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies&count=1', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
    type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
    data: {}, // Additional parameters here
    dataType: 'json',
    success: function(data) {
    	//
        //Change data.source to data.something , where something is whichever part of the object you want returned.
        //To see the whole object you can output it to your browser console using:
        console.log(data);
       	document.getElementById("quote-title").innerHTML = data.quote;
       	document.getElementById("author").innerHTML = data.author;  
       	 document.getElementById("tweet-quote").href= "https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=" + encodeURIComponent(data.quote);

        },
    error: function(err) { alert(err); },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", "vqLuLC071cmshvaTH6p513EGJdzPp1XYufDjsncSjO0UhJLH5p"); // Enter here your Mashape key
    }
});
  

}

jQuery(document).ready(function(){
	doIt();
});
document.getElementById("newquote").addEventListener("click", doIt);