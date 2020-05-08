/* Accessing CSS
1. Getting font-size of h1
2. Changing font-size of h1 to 3rem
*/
$("h1").css("font-size");
$("h1").css("font-size", "3rem");

/*Adding/Removing classes
1. Adding class big-title to h1
2. Removing class big-title from h1
*/
$("h1").addClass("big-title");
$("h1").removeClass("big-title");

/*Checking if a selector has a class */
$("h1").hasClass("margin-50");

/*Accessing html text and inner html */
$("h1").text("Bye");
$("button").html("<em>HII</em>");

/* */
console.log($("img").attr("src"));
$("a").attr("href", "https://www.yahoo.com");

$("h1").click(function() {
  $("h1").css("color", "purple");
});

$("button").click(function() {
  $("h1").css("color", "purple");
});

$("input").keypress(function() {
  console.log(event.key);
});

$(document).keypress(function() {
  $("h1").text(event.key);
});

$(document).on("mouseover", function() {
  $("h1").css("color", "green");
});

$("h1").before("<button>New</button>");
$("h1").after("<button>New</button>");
$("h1").prepend("<button>New</button>");
$("h1").append("<button>New</button>");

// $("button").on("click", function() {
//   $("h1").toggle();
// });

$("button").on("click", function() {
  //.fadeIN
  //.fadeOut
  //   $("h1").fadeToggle();
  //.slideUp
  //.slideDown
  //.slideToggle

  //.animate
  $("h1").animate({ opacity: 0.5 });
});
