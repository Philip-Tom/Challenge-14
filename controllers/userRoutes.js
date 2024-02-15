const router = require("express").Router();
const { User } = require("../models");

// CREATE a new user
router.post("/", async (req, res) => {
  try {
    const userData = await User.create({
      username: req.body.username,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.userId = userData.id;
      req.session.username = userData.username;
      req.session.loggedIn = true;

      res.status(200).redirect("/dashboard");
    });
  } catch (err) {
    res
      .status(500)
      .render("newAccount", { errorMessage: err.errors[0].message });
  }
});

// LOGIN an existing user
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!userData) {
      res
        .status(400)
        .render("login", {
          errorMessage: "Incorrect email or password, please try again",
        });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .render("login", {
          errorMessage: "Incorrect email or password, please try again",
        });
      return;
    }

    req.session.save(() => {
      req.session.userId = userData.id;
      req.session.username = userData.username;
      req.session.loggedIn = true;

      res.status(200).redirect("/dashboard");
    });
  } catch (err) {
    res.status(500).render("login", { errorMessage: err });
  }
});

// LOGOUT a user
router.get("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).redirect("/");
    });
  } else {
    res.status(404).redirect("/login");
  }
});

module.exports = router;
