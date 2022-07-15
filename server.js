// MODELS
require("./models/Pun");

// NPM PACKAGES
const   dotenv          = require("dotenv"),
        express         = require("express"),
        mongoose        = require("mongoose"),
        path            = require('path');

// FILES AND FOLDERS
const   punRoutes       = require("./routes/punRoutes");

dotenv.config();

const app = express();

app.use(express.json());
app.use(punRoutes);

// DATABASE
mongoose.connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB.");
});
mongoose.connection.on("error", (err) => {
    console.log(`Error connecting to MongoDB: ${err}`);
});

// DEPLOYMENT
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
};

// If no API routes are hit, send the React app
app.use((req, res) => res.sendFile(path.join(__dirname, './client/build/index.html')));

// SERVER
app.listen(process.env.PORT, () => {
    console.log(`Listening on PORT ${process.env.PORT}.`);
});