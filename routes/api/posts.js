const express = require("express");
const router = express.Router();

//@router       GET api/routes/test
//@description  Tests posts route
//@access       Public
router.get("/test", (req, res) => res.json({ msg: "Posts Works" }));

module.exports = router;
