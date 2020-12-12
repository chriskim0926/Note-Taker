// need express to interact with the front end
const express = require("express");
// need path for filename paths
const path = require("path");
// need fs to read and write to files


// creating an "express" server
const app = express();
// Sets an Initial port for listeners
const PORT = process.env.PORT || 8080;

//  Initialize notesData


// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(path.join(__dirname, "public")));
// app.use(express.static(path.join(__dirname, "/public")));


// routes
require("./routing/apiRouters.js")(app)
require("./routing/htmlRouting.js")(app)

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});

