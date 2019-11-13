const router = require("express").Router();

const userRouter = require("./user");

router.use("/users", userRouter);

// * sanity
router.get("/", (req, res) => res.json({ api: "api is go" }));

module.exports = router;
