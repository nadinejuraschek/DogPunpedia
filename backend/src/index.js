// MODELS
require("./models/Pun");
require("./models/Hashtag");

// NPM PACKAGES
const   dotenv          = require("dotenv"), 
        express         = require("express"),
        mongoose        = require("mongoose");

// FILES AND FOLDERS
const   punRoutes       = require("./routes/punRoutes"),
        hashtagRoutes   = require("./routes/hashtagRoutes");

dotenv.config();

const app = express();

app.use(express.json());
app.use(punRoutes);
app.use(hashtagRoutes);

// DATABASE
mongoose.connect(process.env.MONGO_DB, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB.");
});
mongoose.connection.on("error", (err) => {
    console.log(`Error connecting to MongoDB: ${err}`);
});

// ROUTES
app.get("/", (req, res) => {
    res.send("Hi there!");
});

// SERVER
app.listen(process.env.PORT, () => {
    console.log(`Listening on PORT ${process.env.PORT}.`);
});