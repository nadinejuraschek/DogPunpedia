// NPM PACKAGES
const   express     = require("express"),
        mongoose    = require("mongoose"),
        Pun         = mongoose.model("Pun");

const   router  = express.Router();

// CREATE
router.post("/api/pun/create", async (req, res) => {
    const { id, type, pun } = req.body;

    try {
        const newPun = new Pun({ id, type, pun });
        await newPun.save();

        res.send("You created a pun.");
    } catch (err) {
        // 422 indicates invalid user data
        return res.status(422).send("Pun already saved.");
    }
});

// READ
router.get("/api/pun/all", async (req, res) => {
    const puns = await Pun.find({});

    res.send(puns);
});

router.get("/api/pun/adjective", async (req, res) => {
    const randomPun = await Pun.aggregate([{ $match: { type: "adjective" } }, { $sample: { size: 1 } }]);

    res.send(randomPun);
});

router.get("/api/pun/noun", async (req, res) => {
    const randomPun = await Pun.aggregate([{ $match: { type: "noun" } }, { $sample: { size: 1 } }]);

    res.send(randomPun);
});

router.get("/api/pun/phrase", async (req, res) => {
    const randomPun = await Pun.aggregate([{ $match: { type: "phrase" } }, { $sample: { size: 1 } }]);

    res.send(randomPun);
});

// UPDATE

// DELETE

module.exports = router;