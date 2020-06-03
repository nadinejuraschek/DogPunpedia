// NPM PACKAGES
const mongoose = require("mongoose");

const punSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    pun: {
        type: String,
        unique: true,
        required: true
    }
});

mongoose.model("Pun", punSchema);