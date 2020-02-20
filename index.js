//import express package
const express = require("express");
//create new server
const app = express();
//define basic html document
const page = `<hmtl>
  <head>
    <title>Wander</title>
    <style>
body {background-color: #deb887;}
h1   {color: white;
      left: 0;
      line-height: 200px;
      margin-top: -100px;
      position: absolute;
      text-align: center;
      top: 50%;
      width: 100%;
}
p    {
      font-size: 2em;
  color: white;
      left: 0;
      line-height: 200px;
      margin-top: -100px;
      position: absolute;
      text-align: center;
      top: 70%;
      width: 100%;
}
</style>
  </head>
  <body>
    <h1 class="joke1">Why did the half blind man fall into a well?</h1>
    <p class="punchline">He couldn’t see that well.</p>
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
