const router = require("express").Router();
const bcrypt = require("bcryptjs");

const Users = require("../models/userModels");
const auth = require("../middleware/auth");

// * sanity
router.get("/", (req, res) => res.json({ api: "api is go" }));

router.get("/users", auth.authUser, (req, res) => {
  Users.find()
    .then(users => res.status(200).json(users))
    .catch(error => res.status(500).json(error.message));
});

router.post("/register", (req, res) => {
  const user = req.body;
  const hash = bcrypt.hashSync(user.password, 14);
  const token = auth.getJwtToken(user.username);
  user.password = hash;

  Users.add(user)
    .then(newUser =>
      res.status(201).json({ newUser, message: "success", token })
    )
    .catch(error => res.status(500).json(error.message));
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = auth.getJwtToken(user.username);

        res.status(200).json({
          message: `Hi ${user.username}`,
          token
        });
      } else {
        res.status(401).json({ error: `Nope.` });
      }
    })
    .catch(error => res.status(500).json(error.message));
});

module.exports = router;
