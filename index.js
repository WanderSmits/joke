//import express package
const express = require("express");
//create new server
const app = express();
//define basic html document
const page = `<hmtl>
  <head>
    <title>Wander</title>
    <style>
    *{
      background-color: 
    }
    </style>
  </head>
  <body>
    
    <h1 class="joke1">Why do comedians love !false?</h1>
    <p class="punchline">It's funny because it's true.</p>
  </body> 
</html>`;

//define GET / endpoint
app.get("/", (request, response) => {
  response.send(page);
});

//set port to 3000
const port = process.env.PORT || 3000;

//makes the app go to localhost on port 3000
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
