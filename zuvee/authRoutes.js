// const express = require("express");
// const passport = require("passport");
// const router = express.Router();

// router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// router.get("/google/callback", passport.authenticate("google", {
//   successRedirect: "/",
//   failureRedirect: "/login"
// }));

// module.exports = router;



const express = require("express");
const passport = require("passport");
const router = express.Router();

// 👇 This line is important: scope MUST be passed here
router.get("/google", passport.authenticate("google", {
  scope: ["profile", "email"]
}));

router.get("/google/callback", passport.authenticate("google", {
  successRedirect: "/",
  failureRedirect: "/login"
}));

module.exports = router;
