// NPM PACKAGES
const   dotenv  = require("dotenv"), 
        express = require("express");

dotenv.config();

const app = express();

// ROUTES
app.get("/", (req, res) => {
    res.send("Hi there!");
});

// SERVER
app.listen(process.env.PORT, () => {
    console.log(`Listening on PORT ${process.env.PORT}.`);
});