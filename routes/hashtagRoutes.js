// NPM PACKAGES
const   express     = require("express"),
        mongoose    = require("mongoose"),
        Hashtag     = mongoose.model("Hashtag");

const   router  = express.Router();

// CREATE
router.post("/api/hashtag/create", async (req, res) => {
    const { id, hashtag } = req.body;

    try {
        const newHashtag = new Hashtag({ id, hashtag });
        await newHashtag.save();

        res.send("You created a hashtag.");
    } catch (err) {
        // 422 indicates invalid user data
        return res.status(422).send("Hashtag already saved.");
    }
});

// READ
router.get("/api/hashtag/all", async (req, res) => {
    const hashtags = await Hashtag.find({});

    res.send(hashtags);
});

router.get("/api/hashtag", async (req, res) => {
    const randomHashtag = await Hashtag.aggregate([{ $sample: { size: 1 } }]);

    res.send(randomHashtag);
});

// UPDATE

// DELETE

module.exports = router;