const express = require("express");
const app = express();

app.get("/", function(request, response) {
  response.send("<h1>Hello WOrld!</h1>");
});

app.get("/contact", function(request, response) {
  response.send("Contact me at: peter.liang.official@gmail.com");
});

app.get("/about", function(request, response) {
  response.send("This website is made by Peter, a student living in Sydney");
});

app.get("/hobbies", function(request, response) {
  response.send("This is my hobbies page");
});

app.listen(3000, function() {
  console.log("server started on port 3000");
});
