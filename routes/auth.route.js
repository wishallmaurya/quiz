const express = require("express");
const router = express.Router();
const passport=require("passport")
const { login, register } = require("../controllers/auth.controller");

router.post("/signin", login);
router.post("/create-admin", register);
router.get("/login/success", (req, res) => {
	if (req.user) {
		res.status(200).json({
			error: false,
			message: "Successfully Logged In",
			user: req.user,
		});
	} else {
		res.status(403).json({ error: true, message: "Not Authorized" });
	}
});

router.get("/login/failed", (req, res) => {
	res.status(401).json({
		error: true,
		message: "Log in failure",
	});
});

router.get("/google", passport.authenticate("google", ["profile", "email"]));

router.get(
	"/google/callback",
	passport.authenticate("google", {
		successRedirect: 'http://localhost:3000/',
		failureRedirect: "/login/failed",
	})
);

router.get("/logout", (req, res) => {  
	req.logout();
	res.redirect(process.env.CLIENT_URL);
});  
module.exports = router;

