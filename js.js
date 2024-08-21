 var prev=0;


$("#quotebutton").on("click", update);
  $("dl").css("fontSize", "16px");
 $("dt").css("fontSize", "19px");

function update(){
  change();
 createButton(); 
}
function createButton() {

  // Remove Whatever is in the tweeetbox div if theres somethign 
  //there to avoid adding multiple tweetbuttons
 $("#twtbox").empty();
 
  // Create a New Tweet Element

  var link = document.createElement('a');
  link.setAttribute('href', 'https://twitter.com/share');
  link.setAttribute('class', 'twitter-share-button');
  link.setAttribute('style', 'margin-top:5px;');
  link.setAttribute('id', 'twitterbutton');
  link.setAttribute("data-text", tweettext);
  link.setAttribute("data-size", "large");

  // Put it inside the twtbox div
  tweetdiv = document.getElementById('twtbox');
  tweetdiv.appendChild(link);

  twttr.widgets.load(); //very important
}



function change() {
  var quotes = ["Don't cry because it's over, smile because it happened@Dr. Seuss", "In the end, it's not the years in your life that count. It's the life in your years.@Abraham Lincoln", "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.@Albert Einstein", "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.@Bernard M. Baruch", "A room without books is like a body without a soul.@Marcus Tullius Cicero", "So many books, so little time.” @Frank Zappa", "Be the change that you wish to see in the world.@Mahatma Gandhi", "If you tell the truth, you don't have to remember anything.@Mark Twain"];
var num=Math.floor(Math.random() * quotes.length);
  while(num==prev){
    num=Math.floor(Math.random() * quotes.length);
  }
  prev=num;
  var quotedisplay = quotes[num].split("@");
  //console.log(quotedisplay[0]);
  //console.log(quotedisplay[1]);

  tweettext = quotedisplay[0] + " --"+ quotedisplay[1] ;
  document.getElementById('quote').innerHTML =quotedisplay[0];
  document.getElementById('author').innerHTML = "--" + quotedisplay[1];

}

$(document).ready(function() {

  var tweettext = "";

  change();
  createButton();

  $("dt").css("fontSize", "19px");
  $("dl").css("fontSize", "16px");

  /**Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.@Bernard M. Baruch
  A room without books is like a body without a soul.@Marcus Tullius Cicero
  So many books, so little time.” @Frank Zappa
  Be the change that you wish to see in the world.@Mahatma Gandhi
  If you tell the truth, you don't have to remember anything.@Mark Twain
  Always forgive your enemies; nothing annoys them so much. @Oscar Wilde
  Live as if you were to die tomorrow. Learn as if you were to live forever.@Mahatma Gandhi
  Don't think or judge, just listen.@Sarah Dessen
  One day, in retrospect, the years of struggle will strike you as the most beautiful.@Sigmund Freud
  Don't be afraid of your fears. They're not there to scare you. They're there to let you know that something is worth it.@C JoyBell C
  For great men, religion is a way of making friends; small people make religion a fighting tool.@A.P.J. Abdul Kalam
  Dreams are not those which comes while we are sleeping, but dreams are those when u don't sleep before fulfilling them.@A.P.J. Abdul Kalam
  **/
});
