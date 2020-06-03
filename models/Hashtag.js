// NPM PACKAGES
const mongoose = require("mongoose");

const hashtagSchema = new mongoose.Schema({
    hashtag: {
        type: String,
        unique: true,
        required: true
    }
});

mongoose.model("Hashtag", hashtagSchema);