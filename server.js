const path = require("path")

// requires express
const express = require("express");
// Add Port
const PORT = 8080
// Create instance
const app = express();

// Last step - add route

require('./routing/htmlRouting.js')(app);

app.listen(PORT, function (){
    console.log(`App is running on http://localhost:${PORT}`);
})
